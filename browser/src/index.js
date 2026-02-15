import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter.js";

window.onload = () => {
  /// T3D
  let _lr;
  let _context;
  let _fileId;
  let _fileList;
  let _audioSource;
  let _audioContext;

  /// THREE
  let _scene;
  let _camera;
  let _renderer;
  let _models = [];
  let _controls;

  $(function () {
    /*
        SET MAIN UP GRID
        */
    const pstyle = "border: 1px solid #dfdfdf; padding: 0;";
    $("#layout").w2layout({
      name: "layout",
      panels: [
        {
          type: "left",
          size: 570,
          resizable: true,
          style: pstyle + "margin:0",
        },
        {
          type: "main",
          style: pstyle + " background-color: transparent;",
          toolbar: {
            style: "background-color:#eaeaea; height:40px",
            items: [
              {
                type: "html",
                id: "fileIdToolbar",
                html:
                  '<div class="toolbarEntry">' +
                  " File ID:" +
                  '    <input id="fileIdInput"/>' +
                  '    <button id="fileIdInputBtn">' +
                  "    Load </button>" +
                  "</div>",
              },
              {
                type: "html",
                id: "contextToolbar",
                html: '<div class="toolbarEntry" id="contextToolbar"></div>',
              },
            ],
            onClick: function (event) {
              this.owner.content("main", event);
            },
          },
        },
      ],
      onResize: onCanvasResize,
    });

    $("#fileIdInputBtn").click(function () {
      viewFileByFileId($("#fileIdInput").val());
    });

    /// Grid inside main left
    $().w2layout({
      name: "leftLayout",
      panels: [
        {
          type: "left",
          size: 150,
          resizable: true,
          style: pstyle,
          content: "left",
        },
        {
          type: "main",
          size: 420,
          resizable: true,
          style: pstyle,
          content: "right",
        },
      ],
    });
    w2ui["layout"].content("left", w2ui["leftLayout"]);

    /*
            SIDEBAR
            */
    w2ui["leftLayout"].content(
      "left",
      $().w2sidebar({
        name: "sidebar",
        img: null,
        nodes: [{ id: "All", text: "All", img: "icon-folder", group: false }],
        onClick: onFilterClick,
      })
    );

    /*
            SET UP FILE BROWSER
            */
    w2ui["leftLayout"].content(
      "main",
      $().w2grid({
        name: "grid",
        show: {
          toolbar: true,
          footer: true,
        },
        columns: [
          {
            field: "recid",
            caption: "MFT index",
            size: "80px",
            sortable: true,
            resizable: true,
            searchable: "int",
          },
          {
            field: "baseIds",
            caption: "BaseId list",
            size: "100%",
            sortable: true,
            resizable: true,
            searchable: true,
          },
          {
            field: "type",
            caption: "Type",
            size: "100px",
            resizable: true,
            sortable: true,
          },
          {
            field: "fileSize",
            caption: "Pack Size",
            size: "85px",
            resizable: true,
            sortable: true,
          },
        ],
        onClick: function (event) {
          viewFileByMFT(event.recid);
        },
      })
    );

    /*
            SET UP FILE VIEW 'WINDOW'
            */
    $(w2ui["layout"].el("main"))
      .append($("<h1 id='fileTitle' />"))
      .append($("<div id='fileTabs' />"))
      .append($("<div class='fileTab' id='fileTabsRaw'>" + "<div class='tabOutput' id='rawOutput' />" + "</div>"))
      .append(
        $("<div class='fileTab' id='fileTabsPack'>" + "<div class='tabOutput' id='packOutput' />" + "</div>").hide()
      )
      .append(
        $(
          "<div class='fileTab' id='fileTabsTexture'>" + "<div class='tabOutput' id='textureOutput' />" + "</div>"
        ).hide()
      )
      .append($("<div class='fileTab' id='fileTabsString'>" + "<div id='stringOutput' />" + "</div>").hide())
      .append($("<div class='fileTab' id='fileTabsModel'>" + "<div id='modelOutput'/>" + "</div>").hide())
      .append(
        $("<div class='fileTab' id='fileTabsSound'>" + "<div class='tabOutput' id='soundOutput'/>" + "</div>").hide())
      .append(
        $("<div class='fileTab' id='fileTabsDialog'>" + "<div class='tabOutput' id='dialogOutput'/>" + "</div>").hide());

    $("#fileTabs").w2tabs({
      name: "fileTabs",
      active: "tabRaw",
      tabs: [
        {
          id: "tabRaw",
          caption: "Raw",
          disabled: true,
          onClick: function () {
            $(".fileTab").hide();
            $("#fileTabsRaw").show();
          },
        },
        {
          id: "tabPF",
          caption: "Pack File",
          disabled: true,
          onClick: function () {
            $(".fileTab").hide();
            $("#fileTabsPack").show();
          },
        },
        {
          id: "tabTexture",
          caption: "Texture",
          disabled: true,
          onClick: function () {
            $(".fileTab").hide();
            $("#fileTabsTexture").show();
          },
        },
        {
          id: "tabString",
          caption: "String",
          disabled: true,
          onClick: function () {
            $(".fileTab").hide();
            $("#fileTabsString").show();
          },
        },
        {
          id: "tabModel",
          caption: "Model",
          disabled: true,
          onClick: function () {
            $(".fileTab").hide();
            $("#fileTabsModel").show();
          },
        },
        {
          id: "tabSound",
          caption: "Sound",
          disabled: true,
          onClick: function () {
            $(".fileTab").hide();
            $("#fileTabsSound").show();
          },
        },
        {
          id: "tabDialog",
          caption: "Dialog",
          disabled: true,
          onClick: function() {
            $(".fileTab").hide();
            $("#fileTabsDialog").show();
          },
        }
      ],
    });

    /// Set up grid for strings view
    ///Create grid
    $("#stringOutput").w2grid({
      name: "stringGrid",
      selectType: "cell",
      show: {
        toolbar: true,
        footer: true,
      },
      columns: [
        { field: "recid", caption: "Row #", size: "60px" },
        { field: "value", caption: "Text", size: "100%" },
      ],
    });

    /*
            SET UP TREE 3D SCENE
        */
    setupScene();

    /// Ask for file
    w2popup.open({
      speed: 0,
      title: "Load A GW2 dat",
      modal: true,
      showClose: false,
      body:
        '<div class="w2ui-centered">' +
        '<div id="fileLoadProgress" />' +
        '<input id="filePickerPop" type="file" />' +
        "</div>",
    });

    $("#filePickerPop").change(function (evt) {
      _lr = T3D.getLocalReader(evt.target.files[0], onReaderCreated, "./static/t3dworker.js");
    });

    /// Overwrite progress logger
    T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
      $("#filePickerPop").prop("disabled", true);
      $("#fileLoadProgress").html("Indexing .dat file (first visit only)<br/>" + arguments[1] + "%<br/><br/>");
    };
  });

  function onReaderCreated() {
    T3D.getFileListAsync(
      _lr,
      function (files) {
        /// Store fileList globally
        _fileList = files;

        const packNode = {
          id: "packGroup",
          text: "Pack Files",
          img: "icon-folder",
          group: false,
          nodes: [],
        };

        const textureNode = {
          id: "textureGroup",
          text: "Texture files",
          img: "icon-folder",
          group: false,
          nodes: [],
        };

        const unsortedNode = {
          id: "unsortedGroup",
          text: "Unsorted",
          img: "icon-folder",
          group: false,
          nodes: [],
        };

        /// Build sidebar nodes
        for (const fileType in _fileList) {
          if (Object.getOwnPropertyNames(_fileList).includes(fileType)) {
            let node = { id: fileType, img: "icon-folder", group: false };
            //let isPack = false;
            if (fileType.startsWith("TEXTURE")) {
              node = {
                id: fileType,
                img: "icon-folder",
                group: false,
                text: fileType,
              };
              textureNode.nodes.push(node);
            } else if (fileType === "BINARIES") {
              node.text = "Binaries";
              w2ui.sidebar.add(node);
            } else if (fileType === "STRINGS") {
              node.text = "Strings";
              w2ui.sidebar.add(node);
            } else if (fileType.startsWith("PF")) {
              node = {
                id: fileType,
                img: "icon-folder",
                group: false,
                text: fileType,
              };
              packNode.nodes.push(node);
            } else if (fileType === "UNKNOWN") {
              node.text = "Unknown";
              w2ui.sidebar.add(node);
            } else {
              node = {
                id: fileType,
                img: "icon-folder",
                group: false,
                text: fileType,
              };
              unsortedNode.nodes.push(node);
            }
          }
        }

        if (packNode.nodes.length > 0) {
          w2ui.sidebar.add(packNode);
        }

        if (textureNode.nodes.length > 0) {
          w2ui.sidebar.add(textureNode);
        }

        if (unsortedNode.nodes.length > 0) {
          w2ui.sidebar.add(unsortedNode);
        }

        /// Close the pop
        w2popup.close();

        /// Select the "All" category
        w2ui.sidebar.click("All");
      } /// End getFileListAsync callback
    );
  }

  function onFilterClick(evt) {
    /// No filter if clicked group was "All"
    if (evt.target === "All") {
      showFileGroup();
    }

    /// Other events are fine to just pass
    else {
      showFileGroup([evt.target]);
    }
  }

  function showFileGroup(fileTypeFilter) {
    w2ui.grid.records = [];

    const reverseTable = _lr.getReverseIndex();

    for (const fileType in _fileList) {
      /// Only show types we've asked for
      if (fileTypeFilter && fileTypeFilter.indexOf(fileType) < 0) {
        /// Special case for "packGroup"
        /// Should let trough all pack types
        /// Should NOT let trought any non-pack types
        /// i.e. Strings, Binaries etc
        if (fileTypeFilter.indexOf("packGroup") >= 0) {
          if (!fileType.startsWith("PF")) {
            continue;
          }
        } else if (fileTypeFilter.indexOf("textureGroup") >= 0) {
          if (!fileType.startsWith("TEXTURE")) {
            continue;
          }
        } else {
          continue;
        }
      }

      if (Object.keys(_fileList).includes(fileType)) {
        const fileArr = _fileList[fileType];
        fileArr.forEach(
          function (mftIndex) {
            const meta = _lr.getFileMeta(mftIndex);

            const baseIds = reverseTable[mftIndex];
            const fileSize = meta ? meta.size : "";

            if (fileSize > 0 && mftIndex > 15) {
              w2ui["grid"].records.push({
                recid: mftIndex, /// MFT index
                baseIds: baseIds,
                type: fileType,
                fileSize: fileSize,
              });
            }

            mftIndex++;
          } /// End for each mft in this file type
        );
      } /// End if _fileList[filetype]
    } /// End for each fileType key in _fileList object

    /// Update file grid
    w2ui.grid.refresh();
  }

  function viewFileByMFT(mftIdx) {
    const reverseTable = _lr.getReverseIndex();

    const baseId = reverseTable[mftIdx] ? reverseTable[mftIdx][0] : "";

    viewFileByFileId(baseId);
  }

  function viewFileByFileId(fileId) {
    /// Clean outputs
    $(".tabOutput").html("");
    $("#fileTitle").html("");

    /// Clean context toolbar
    $("#contextToolbar").html("");

    /// Disable tabs
    w2ui.fileTabs.disable("tabRaw");
    w2ui.fileTabs.disable("tabPF");
    w2ui.fileTabs.disable("tabTexture");
    w2ui.fileTabs.disable("tabString");
    w2ui.fileTabs.disable("tabModel");
    w2ui.fileTabs.disable("tabSound");
    w2ui.fileTabs.disable("tabDialog");

    /// Remove old models from the scene
    if (_models) {
      _models.forEach(function (mdl) {
        _scene.remove(mdl);
      });
    }

    /// Make sure _context is clean
    _context = {};

    /// Run the basic DataRenderer, handles all sorts of files for us.
    T3D.runRenderer(T3D.DataRenderer, _lr, { id: fileId }, _context, onBasicRendererDone);
  }

  function onBasicRendererDone() {
    /// Read render output from _context VO
    const fileId = (_fileId = T3D.getContextValue(_context, T3D.DataRenderer, "fileId"));

    const rawData = T3D.getContextValue(_context, T3D.DataRenderer, "rawData");

    const raw = T3D.getContextValue(_context, T3D.DataRenderer, "rawString");

    const packfile = T3D.getContextValue(_context, T3D.DataRenderer, "file");

    const image = T3D.getContextValue(_context, T3D.DataRenderer, "image");

    const fcc = raw.substring(0, 4);

    /// Update main header to show filename

    const fileName = fileId + (image || !packfile ? "." + fcc : "." + packfile.header.type);
    $("#fileTitle").html(fileName);

    /// Update raw view and enable tab
    w2ui.fileTabs.enable("tabRaw");

    $("#contextToolbar").append(
      $("<button>Download raw</button>").click(function () {
        downloadData(rawData, fileName + ".raw");
      })
    );

    $("#rawOutput").append($("<div>").text(raw));

    const ui8aRawData = new Uint8Array(rawData);

    /// Texture file
    if (image) {
      /// Select texture tab
      w2ui.fileTabs.enable("tabTexture");
      w2ui.fileTabs.click("tabTexture");

      /// Display bitmap on canvas
      const canvas = $("<canvas>");
      canvas[0].width = image.width;
      canvas[0].height = image.height;
      const ctx = canvas[0].getContext("2d");
      const uica = new Uint8ClampedArray(image.data);
      const imagedata = new ImageData(uica, image.width, image.height);
      ctx.putImageData(imagedata, 0, 0);

      $("#textureOutput").append(canvas);
    }

    // PNG texture
    else if (
      ui8aRawData.length > 4 &&
      ui8aRawData[0] === 137 &&
      ui8aRawData[1] === 80 && // P
      ui8aRawData[2] === 78 && // N
      ui8aRawData[3] === 71 // G
    ) {
      /// Select texture tab
      w2ui.fileTabs.enable("tabTexture");
      w2ui.fileTabs.click("tabTexture");

      const canvas = $("<canvas>");
      const pngBlob = new Blob([rawData], { type: "image/png" });
      const url = URL.createObjectURL(pngBlob);
      const img = new Image();
      img.onload = function () {
        canvas[0].width = img.width;
        canvas[0].height = img.height;
        const ctx = canvas[0].getContext("2d");
        ctx.drawImage(this, 0, 0);
        URL.revokeObjectURL(url);
      };
      img.src = url;
      $("#textureOutput").append(canvas);
      $("#contextToolbar")
        .show()
        .append(
          $("<button>Download Image</button>").click(function () {
            downloadData(rawData, fileId + ".png");
          })
        );
    }

    // RIFF texture
    else if (
      ui8aRawData.length > 4 &&
      ui8aRawData[0] === 82 && // R
      ui8aRawData[1] === 73 && // I
      ui8aRawData[2] === 70 && // F
      ui8aRawData[3] === 70 // F
    ) {
      /// Select texture tab
      w2ui.fileTabs.enable("tabTexture");
      w2ui.fileTabs.click("tabTexture");

      const canvas = $("<canvas>");
      const riffBlob = new Blob([rawData], { type: "image/webp" });
      const url = URL.createObjectURL(riffBlob);
      const img = new Image();
      img.onload = function () {
        canvas[0].width = img.width;
        canvas[0].height = img.height;
        const ctx = canvas[0].getContext("2d");
        ctx.drawImage(this, 0, 0);
        URL.revokeObjectURL(url);
      };
      img.src = url;
      $("#textureOutput").append(canvas);
      $("#contextToolbar")
        .show()
        .append(
          $("<button>Download Image</button>").click(function () {
            downloadData(rawData, fileId + ".riff");
          })
        );
    }

    /// PF Pack file
    else if (packfile) {
      /// Always render the pack file chunk data
      displayPackFile();

      /// Enable corresponding tab
      w2ui.fileTabs.enable("tabPF");

      /// If the pack file was a model, render it!
      if (packfile.header.type === "MODL") {
        /// Render model
        renderFileModel(fileId);
      } else if (packfile.header.type === "ABNK") {
        const chunk = packfile.getChunk("BKCK");

        /// Enable and select dialog tab
        w2ui.fileTabs.enable("tabDialog");
        w2ui.fileTabs.click("tabDialog");

        /// Print some random data about this sound
        $("#dialogOutput").html(
          "<div id='dialogSamples'/>" 
        );
        for (const sample of chunk.data.asndFile) {
          if (sample.voiceId === 0) {
            continue;
          }
          const soundUintArray = sample.audioData;
          let data = $("<div/>");
          data.append(
            $("<button>Download MP3</button>").click(function () {
              downloadData(soundUintArray, fileName + "_" + sample.voiceId + ".mp3");
            })
          )
          .append(
            $("<button>Play MP3</button>").click(function () {
              playSound(soundUintArray);
            })
          )
          .append(
            $("<button>Stop MP3</button>").click(stopPlayingSound)
          );
          data.append($("<span>Voice id: " + sample.voiceId + " duration: " + sample.length + "</span>"));
          $("#dialogSamples").append(data);
        }
      } else if (packfile.header.type === "ASND") {
        /// Get a chunk, this is really the job of a renderer but whatevs
        const chunk = packfile.getChunk("ASND");

        /// Enable and select sound tab
        w2ui.fileTabs.enable("tabSound");
        w2ui.fileTabs.click("tabSound");

        /// Print some random data about this sound
        $("#soundOutput").html(
          "Length: " + chunk.data.length + " seconds<br/>" + "Size: " + chunk.data.audioData.length + " bytes"
        );

        /// Extract sound data

        const soundUintArray = chunk.data.audioData;

        $("#contextToolbar")
          .show()
          .append(
            $("<button>Download MP3</button>").click(function () {
              downloadData(soundUintArray, fileName + ".mp3");
            })
          )
          .append(
            $("<button>Play MP3</button>").click(function () {
              playSound(soundUintArray);
            })
          )
          .append(
            $("<button>Stop MP3</button>").click(stopPlayingSound)
          );
      } else {
        /// Select PF tab
        w2ui.fileTabs.click("tabPF");
      }
    } else if (fcc === "strs") {
      showFileString(fileId);
    }

    /// Else just show raw view
    else {
      w2ui.fileTabs.click("tabRaw");
    }
  }

  function displayPackFile() {
    //let fileId = T3D.getContextValue(_context, T3D.DataRenderer, "fileId");
    const packfile = T3D.getContextValue(_context, T3D.DataRenderer, "file");

    $("#packOutput").html("");
    $("#packOutput").append($("<h2>Chunks</h2>"));

    packfile.chunks.forEach(function (chunk) {
      const field = $("<fieldset />");
      const legend = $("<legend>" + chunk.header.type + "</legend>");

      const logButton = $("<button>Log Chunk Data to Console</button>");
      logButton.click(function () {
        T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, "Logging", chunk.header.type, "chunk");
        T3D.Logger.log(T3D.Logger.TYPE_MESSAGE, chunk.data);
      });

      field.append(legend);
      field.append($("<p>Size:" + chunk.header.chunkDataSize + "</p>"));
      field.append(logButton);

      $("#packOutput").append(field);
      $("#packOutput").show();
    });
  }

  function showFileString(fileId) {
    /// Make sure output is clean
    _context = {};

    /// Run single renderer
    T3D.runRenderer(T3D.StringRenderer, _lr, { id: fileId }, _context, onRendererDoneString);
  }

  function onRendererDoneString() {
    /// Read data from renderer
    const strings = T3D.getContextValue(_context, T3D.StringRenderer, "strings", []);

    w2ui.stringGrid.records = strings;

    w2ui.stringGrid.buffered = w2ui.stringGrid.records.length;
    w2ui.stringGrid.total = w2ui.stringGrid.buffered;
    w2ui.stringGrid.refresh();

    /// Select this view
    w2ui.fileTabs.enable("tabString");
    w2ui.fileTabs.click("tabString");
  }

  function renderFileModel(fileId) {
    const packfile = T3D.getContextValue(_context, T3D.DataRenderer, "file");
    const hasModel = packfile.chunks.find((chunk) => chunk.header.type === "MODL");

    /// Make sure output is clean
    _context = {};

    if (hasModel) {
      /// Run single renderer
      T3D.runRenderer(T3D.SingleModelRenderer, _lr, { id: fileId }, _context, onRendererDoneModel);
    } else {
      w2ui.fileTabs.click("tabPF");
    }
  }

  function onRendererDoneModel() {
    /// Enable and select model tab
    w2ui.fileTabs.enable("tabModel");
    w2ui.fileTabs.click("tabModel");
    $("#modelOutput").show();

    /// Re-fit canvas
    onCanvasResize();

    /// Add context toolbar export button
    $("#contextToolbar").append($("<button>Export scene</button>").click(exportScene));

    /// Read the new models
    _models = T3D.getContextValue(_context, T3D.SingleModelRenderer, "meshes", []);

    /// Keeping track of the biggest model for later
    let biggestMdl = null;

    /// Add all models to the scene
    _models.forEach(function (model) {
      /// Find the biggest model for camera focus/fitting
      if (!biggestMdl || biggestMdl.boundingSphere.radius < model.boundingSphere.radius) {
        biggestMdl = model;
      }

      _scene.add(model);
    });

    /// Reset any zoom and transaltion/rotation done when viewing earlier models.
    _controls.reset();

    /// Focus camera to the bigest model, doesn't work great.
    let dist =
      biggestMdl && biggestMdl.boundingSphere ? biggestMdl.boundingSphere.radius / Math.tan((Math.PI * 60) / 360) : 100;
    dist = 1.2 * Math.max(100, dist);
    dist = Math.min(1000, dist);
    _camera.position.zoom = 1;
    _camera.position.x = dist * Math.sqrt(2);
    _camera.position.y = 50;
    _camera.position.z = 0;

    if (biggestMdl) _camera.lookAt(biggestMdl.position);
  }

  /// Exports current model as an .obj file with a .mtl refering .png textures.
  function exportScene() {
    /// Get last loaded fileId
    const fileId = _fileId;

    /// Run T3D hacked version of OBJExporter
    const result = new OBJExporter().parse(_scene, fileId);

    /// Download obj
    downloadData(result, "export." + fileId + ".obj");
  }

  const downloadData = (dataArray, filename) => {
    const blob = new Blob([dataArray], { type: "octet/stream" });
    saveData(blob, filename);
  }

  const playSound = (soundUintArray) => {
    if (!_audioContext) {
      _audioContext = new AudioContext();
    }

    /// Stop previous sound
    try {
      _audioSource.stop();
    } catch (e) {
      console.error(e);
    }

    /// Create new buffer for current sound
    _audioSource = _audioContext.createBufferSource();
    _audioSource.connect(_audioContext.destination);

    /// Decode and start playing
    var dst = new ArrayBuffer(soundUintArray.byteLength);
    new Uint8Array(dst).set(new Uint8Array(soundUintArray));
    _audioContext.decodeAudioData(dst, function (res) {
      _audioSource.buffer = res;
      _audioSource.start();
    });
  }

  const stopPlayingSound = () => {
    try {
      _audioSource.stop();
    } catch (e) {
      console.error(e);
    }
  }

  /// Utility for downloading files to client
  const saveData = (function () {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (blob, fileName) {
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  })();

  /// Setting up a scene, Tree.js standard stuff...
  function setupScene() {
    const canvasWidth = $("#modelOutput").width();
    const canvasHeight = $("#modelOutput").height();
    const canvasClearColor = 0x342920; // For happy rendering, always use Van Dyke Brown.
    const fov = 60;
    const aspect = 1;
    const near = 0.1;
    const far = 500000;

    _camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    _scene = new THREE.Scene();

    /// This scene has one ambient light source and three directional lights
    const ambientLight = new THREE.AmbientLight(0x555555);
    _scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(0, 0, 1);
    _scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight2.position.set(1, 0, 0);
    _scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight3.position.set(0, 1, 0);
    _scene.add(directionalLight3);

    /// Standard THREE renderer with AA
    _renderer = new THREE.WebGLRenderer({ antialiasing: true });
    $("#modelOutput")[0].appendChild(_renderer.domElement);

    _renderer.setSize(canvasWidth, canvasHeight);
    _renderer.setClearColor(canvasClearColor);

    /// Add THREE orbit controls, for simple orbiting, panning and zooming
    _controls = new OrbitControls(_camera, _renderer.domElement);
    _controls.enableZoom = true;

    /// Sems w2ui delays resizing :/
    $(window).resize(function () {
      setTimeout(onCanvasResize, 10);
    });

    /// Note: constant continous rendering from page load event, not very opt.
    render();
  }

  function onCanvasResize() {
    const sceneWidth = $("#modelOutput").width();
    const sceneHeight = $("#modelOutput").height();

    if (!sceneHeight || !sceneWidth) return;

    _camera.aspect = sceneWidth / sceneHeight;

    _renderer.setSize(sceneWidth, sceneHeight);

    _camera.updateProjectionMatrix();
  }

  /// Render loop, no game logic, just rendering.
  function render() {
    window.requestAnimationFrame(render);
    _renderer.render(_scene, _camera);
  }
};
