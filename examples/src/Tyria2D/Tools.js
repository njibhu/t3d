const Globals = require("./Globals");

async function cntcSummary() {
  $().w2grid({
    name: "cntcSummaryGrid",
    columns: [
      { field: "typeId", caption: "cntc type ID", size: "33%", sortable: true },
      { field: "amount", caption: "entries amount", size: "33%", sortable: true },
      { field: "files", caption: "files", size: "33%", sortable: false },
    ],
  });
  w2popup.open({
    title: "Summary of cntc types.",
    body: '<div id="summaryGrid" style="height: 100%">Loading...</div>',
    modal: true,
    showClose: true,
    showMax: true,
    onClose: () => {
      $().w2destroy("cntcSummaryGrid");
    },
    onMax: function () {
      setTimeout(function () {
        w2ui.cntcSummaryGrid.render("#summaryGrid");
      }, 500);
    },
    onMin: function () {
      setTimeout(function () {
        w2ui.cntcSummaryGrid.render("#summaryGrid");
      }, 500);
    },
  });

  let res = await Globals._lr.readFileList();

  //Get the cntc files
  let cntcFiles = res.filter((i) => {
    return i.fileType === "PF_cntc" && i.baseIdList[0] < 1000000;
  });

  let cntcTypes = [];

  for (let elt of cntcFiles) {
    let r = await Globals._lr.readFile(elt.mftId);
    let file = new T3D.GW2File(new DataStream(r.buffer), 0);
    let mainChunk = file.getChunk("Main").data;

    for (let entry of mainChunk.indexEntries) {
      let summary =
        cntcTypes.filter((t) => {
          return t.typeId === entry.type;
        }).length > 0
          ? cntcTypes.filter((t) => {
              return t.typeId === entry.type;
            })[0]
          : cntcTypes[cntcTypes.push({ typeId: entry.type, amount: 0, files: [] }) - 1];
      summary.amount += 1;
      if (!summary.files.includes(elt.baseIdList[0])) {
        summary.files.push(elt.baseIdList[0]);
      }
    }
  }

  w2ui.cntcSummaryGrid.records = cntcTypes;
  w2ui.cntcSummaryGrid.render("#summaryGrid");
  w2ui.cntcSummaryGrid.refresh();
}

module.exports = {
  cntcSummary: cntcSummary,
};
