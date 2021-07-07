const cntcFileCache = {};
const fileTypeSets = {};

function setupUi() {
  const pstyle = "border: 1px solid #dfdfdf; padding: 0;";
  $("#layout").w2layout({
    name: "layout",
    panels: [
      { type: "left", size: "25%", resizable: true, style: pstyle, content: "left" },
      { type: "main", content: "main", style: pstyle },
      //{ type: "preview", size: "50%", resizable: true, style: pstyle, content: "preview" },
    ],
  });

  w2ui["layout"].content(
    "left",
    $().w2grid({
      name: "grid",
      columns: [
        {
          field: "recid",
          caption: "cntc id",
          size: "20%",
          sortable: false,
          resizable: true,
        },
        {
          field: "count",
          caption: "entries count",
          size: "40%",
          sortable: false,
          resizable: true,
        },
        {
          field: "description",
          caption: "description",
          size: "40%",
          resizable: true,
          sortable: false,
        },
      ],
      onClick: () => {},
    })
  );

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
    T3D.getLocalReader(evt.target.files[0], onLocalReaderCreated, "./static/t3dworker.js");
  });

  /// Overwrite progress logger
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
    $("#filePickerPop").prop("disabled", true);
    $("#fileLoadProgress").html("Indexing .dat file (first visit only)<br/>" + arguments[1] + "%<br/><br/>");
  };
}

async function onLocalReaderCreated(lr) {
  w2popup.close();
  w2popup.open({
    speed: 0,
    title: "Parse cntc files",
    modal: true,
    showClose: false,
    body: '<div class="w2ui-centered">' + '<div id="cntcLoadProgress">Indexing cntc file</div>' + "</div>",
  });
  const cntcFiles = (await lr.readFileList()).filter(
    (file) => file.fileType === "PF_cntc" && file.baseIdList[0] < 1000000
  );
  const cntcTypes = {};
  let fileProgress = 1;
  for (const cntcFile of cntcFiles) {
    $("#cntcLoadProgress").html(`Indexing cntc file: ${cntcFile.mftId}<br />${fileProgress}/${cntcFiles.length}`);
    const file = new T3D.GW2File(new DataStream((await lr.readFile(cntcFile.mftId)).buffer), 0);
    cntcFileCache[cntcFile.mftId] = file;
    const mainChunk = file.getChunk("Main").data;
    const types = new Set(mainChunk.indexEntries.map((i) => i.type));
    fileTypeSets[cntcFile.mftId] = types;
    for (const type of types) {
      const count = mainChunk.indexEntries.filter((i) => i.type === type).length;
      if (cntcTypes[type]) {
        cntcTypes[type] += count;
      } else {
        cntcTypes[type] = count;
      }
    }
    fileProgress++;
  }

  for (const [type, count] of Object.entries(cntcTypes)) {
    w2ui["grid"].records.push({
      recid: type,
      count,
      description: "",
    });
  }

  w2ui.grid.refresh();
  w2popup.close();
}

window.onload = setupUi();
