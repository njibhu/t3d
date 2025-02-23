import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

let localReader = undefined;
let mapId = undefined;

// Cleanup html cache state
$("#fileIdInput").prop("disabled", true);
$("#loadMapBtn").prop("disabled", true);

/// Extend Original Logger
const myLogger = {
  lastMessageType: null,
  log: function () {
    const htmlOutput = $("#log");
    const str = Array.prototype.slice.call(arguments, 1).join(" ");
    if (arguments[1] === myLogger.lastMessageType) {
      $("#log p:last-of-type")[0].innerHTML = str;
    } else {
      htmlOutput.append($("<p>-------------</p>"));
      htmlOutput.append($("<p>" + str + "</p>"));
    }
    htmlOutput[0].scrollTop = htmlOutput[0].scrollHeight;
    myLogger.lastMessageType = arguments[1];
  },
};

$(document).ready(function () {
  /// Handle file pick
  $("#filePicker").change(function (evt) {
    const file = evt.target.files[0];

    localReader = T3D.getLocalReader(file, onReaderCreated, "../static/t3dworker.js", myLogger);
  });

  /// Handle button click
  $("#loadMapBtn").click(onLoadMapClick);
});

/// Callback for when the LocalReader has finished setting up!
async function onReaderCreated() {
  $("#fileIdInput").removeAttr("disabled");
  $("#loadMapBtn").removeAttr("disabled");
}

/// The insterresting part!
function onLoadMapClick() {
  $("#loadMapBtn").prop("disabled", true);
  /// Get selected file id
  mapId = $("#fileIdInput").val();

  /// Renderer settings (see the documentation of each Renderer for details)
  const renderers = [
    {
      renderClass: T3D.EnvironmentRenderer,
      settings: {},
    },
    {
      renderClass: T3D.TerrainRenderer,
      settings: {
        export: true,
      },
    },
    {
      renderClass: T3D.HavokRenderer,
      settings: {
        export: true,
      },
    },
  ];

  /// Setup the logger (hacky way because very verbose)
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
    myLogger.log(arguments[0], arguments[0], arguments[1]);
    console.log(arguments[0], arguments[1]);
  };

  /// Load for the first time the renderer and spawn the context
  T3D.renderMapContentsAsync(localReader, mapId, renderers, onRendererDone, myLogger);
}

/// Runs when the ModelRenderer is finshed
function onRendererDone(context) {
  const scene = new THREE.Scene();

  /// Take all the terrain tiles generated by the TerrainRenderer and add them to the scene
  for (const elem of T3D.getContextValue(context, T3D.TerrainRenderer, "terrainTiles")) {
    scene.add(elem);
  }

  /// Add all the meshes from the prop renderer
  const meshes = T3D.getContextValue(context, T3D.HavokRenderer, "meshes");
  for (const elem of meshes) {
    scene.add(elem);
  }

  const exporter = new GLTFExporter();
  exporter.parse(scene, (gltf) => {
    const blob = new Blob([JSON.stringify(gltf)], { type: "text/plain" });
    const filename = mapId + ".gltf";

    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  });
}
