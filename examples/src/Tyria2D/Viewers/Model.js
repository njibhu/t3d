/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

const Viewer = require("./Viewer");
const Globals = require("../Globals");
const Utils = require("../Utils");

class ModelViewer extends Viewer {
  constructor() {
    super("model", "Model");
    this.currentRenderId = null;
  }

  render() {
    let fileId = (Globals._fileId = T3D.getContextValue(Globals._context, T3D.DataRenderer, "fileId"));

    // First check if we've already renderer it
    if (this.currentRenderId !== fileId) {
      /// Run single renderer
      T3D.runRenderer(
        T3D.SingleModelRenderer,
        Globals._lr,
        {
          id: fileId,
        },
        Globals._context,
        () => {
          this.onRendererDoneModel();
        }
      );

      this.currentRenderId = fileId;
    }

    $(".fileTab").hide();
    $(this.getDomTabId(true)).show();
  }

  clean() {
    /// Remove old models from the scene
    if (Globals._models) {
      for (let mdl of Globals._models) {
        Globals._scene.remove(mdl);
      }
    }
  }

  canView() {
    let packfile = T3D.getContextValue(Globals._context, T3D.DataRenderer, "file");
    if (packfile && packfile.header.type === "MODL") {
      return true;
    } else {
      return false;
    }
  }

  overrideDefault() {
    return this.canView();
  }

  onRendererDoneModel() {
    $(this.getOutputId(true)).show();

    /// Re-fit canvas
    Globals._onCanvasResize();

    /// Add context toolbar export button
    $("#contextToolbar").append($("<button>Export scene</button>").click(Utils.exportScene));

    /// Read the new models
    Globals._models = T3D.getContextValue(Globals._context, T3D.SingleModelRenderer, "meshes", []);

    /// Keeping track of the biggest model for later
    let biggestMdl = null;

    /// Add all models to the scene
    for (let model of Globals._models) {
      /// Find the biggest model for camera focus/fitting
      if (!biggestMdl || biggestMdl.boundingSphere.radius < model.boundingSphere.radius) {
        biggestMdl = model;
      }

      Globals._scene.add(model);
    }

    /// Reset any zoom and transaltion/rotation done when viewing earlier models.
    Globals._controls.reset();

    /// Focus camera to the bigest model, doesn't work great.
    let dist =
      biggestMdl && biggestMdl.boundingSphere ? biggestMdl.boundingSphere.radius / Math.tan((Math.PI * 60) / 360) : 100;
    dist = 1.2 * Math.max(100, dist);
    dist = Math.min(1000, dist);
    Globals._camera.position.zoom = 1;
    Globals._camera.position.x = dist * Math.sqrt(2);
    Globals._camera.position.y = 50;
    Globals._camera.position.z = 0;

    if (biggestMdl) Globals._camera.lookAt(biggestMdl.position);
  }

  setup() {
    /// Setting up a scene, Tree.js standard stuff...
    const canvasWidth = $(this.getOutputId(true)).width();
    const canvasHeight = $(this.getOutputId(true)).height();
    const canvasClearColor = 0x342920; // For happy rendering, always use Van Dyke Brown.
    const fov = 60;
    const aspect = 1;
    const near = 0.1;
    const far = 500000;

    Globals._onCanvasResize = () => {
      const sceneWidth = $(this.getOutputId(true)).width();
      const sceneHeight = $(this.getOutputId(true)).height();

      if (!sceneHeight || !sceneWidth) return;

      Globals._camera.aspect = sceneWidth / sceneHeight;

      Globals._renderer.setSize(sceneWidth, sceneHeight);

      Globals._camera.updateProjectionMatrix();
    };

    Globals._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    Globals._scene = new THREE.Scene();

    /// This scene has one ambient light source and three directional lights
    const ambientLight = new THREE.AmbientLight(0x555555);
    Globals._scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(0, 0, 1);
    Globals._scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(1, 0, 0);
    Globals._scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight3.position.set(0, 1, 0);
    Globals._scene.add(directionalLight3);

    /// Standard THREE renderer with AA
    Globals._renderer = new THREE.WebGLRenderer({
      antialiasing: true,
    });

    $(this.getOutputId(true))[0].appendChild(Globals._renderer.domElement);

    Globals._renderer.setSize(canvasWidth, canvasHeight);
    Globals._renderer.setClearColor(canvasClearColor);

    /// Add THREE orbit controls, for simple orbiting, panning and zooming
    Globals._controls = new THREE.OrbitControls(Globals._camera, Globals._renderer.domElement);
    Globals._controls.enableZoom = true;

    /// Sems w2ui delays resizing :/
    $(window).resize(function () {
      setTimeout(Globals._onCanvasResize, 10);
    });

    /// Note: constant continous rendering from page load event, not very opt.
    render();
  }
}

/// Render loop, no game logic, just rendering.
function render() {
  window.requestAnimationFrame(render);
  Globals._renderer.render(Globals._scene, Globals._camera);
}

module.exports = ModelViewer;
