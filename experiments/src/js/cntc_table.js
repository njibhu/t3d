import T3D from "t3d-lib";
import { getCntcFiles, getEntries, getMainChunk, getTypeId, getUniqueId, readCntcFile } from "./lib/cntc.js";
import { getType35ItemTypeEnum, getType35ItemTypeLabel, parseType35Item, readUint32LE } from "./lib/cntc_item35.js";

const cntcFileCache = {};
const fileTypeSets = {};
const cntcEntriesByType = {};
let selectedCntcType = null;

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function formatHexByte(value) {
  return value.toString(16).toUpperCase().padStart(2, "0");
}

function formatAsciiByte(value) {
  return value >= 32 && value <= 126 ? String.fromCharCode(value) : ".";
}

function escapeHtmlAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

const FIELD_COLORS = {
  "embedded type @0x10": "#d8ecff",
  "unique id @0x14": "#f4d8ff",
  "item id @0x28": "#d8ffe1",
  "map id @0x28": "#d8ffe1",
  "id @0x28": "#d8ffe1",
  "item type @0x2C": "#ffe7d6",
  "weapon field @0x38": "#ffe1ea",
  "unknown ref @0x40": "#e1f0ff",
  "flag @0x48": "#fff2d8",
  "subtype enum @0x4C": "#e6e0ff",
  "armor field @0x4C": "#e6e0ff",
  "rarity enum @0x60": "#fff0c9",
  "item level @0x74": "#dff7d6",
  "armor slot enum @0xB8": "#ffe2b8",
  "armor field @0xBC": "#f3d8e8",
  "weapon field @0xC0": "#ffd9d9",
  "armor field @0xC0": "#ffd9d9",
  "armor weight class enum @0x118": "#d8fff4",
};

function getFieldColor(label) {
  return FIELD_COLORS[label] ?? "#e9ecef";
}

function getTypeIdLabel(type) {
  if (Number(type) === 35) {
    return "item id @0x28";
  }
  if (Number(type) === 45) {
    return "map id @0x28";
  }
  return "id @0x28";
}

function getTypeIdCaption(type) {
  if (Number(type) === 35) {
    return "item id";
  }
  if (Number(type) === 45) {
    return "map id";
  }
  return "id @0x28";
}

function buildHexAnnotations(entryRecord) {
  if (!entryRecord?.contentSlice) {
    return [];
  }

  const annotations = [
    { offset: 16, length: 4, label: "embedded type @0x10" },
    { offset: 20, length: 4, label: "unique id @0x14" },
    { offset: 40, length: 4, label: getTypeIdLabel(entryRecord.type) },
  ];

  if (entryRecord.type === 35) {
    annotations.push({ offset: 44, length: 4, label: "item type @0x2C" });
  }

  if (entryRecord.type === 35 && getType35ItemTypeEnum(entryRecord) === 24) {
    annotations.push(
      { offset: 56, length: 4, label: "weapon field @0x38" },
      { offset: 64, length: 4, label: "unknown ref @0x40" },
      { offset: 72, length: 4, label: "flag @0x48" },
      { offset: 76, length: 4, label: "subtype enum @0x4C" },
      { offset: 96, length: 4, label: "rarity enum @0x60" },
      { offset: 116, length: 4, label: "item level @0x74" },
      { offset: 192, length: 4, label: "weapon field @0xC0" }
    );
  }

  if (entryRecord.type === 35 && getType35ItemTypeEnum(entryRecord) === 0) {
    annotations.push(
      { offset: 184, length: 4, label: "armor slot enum @0xB8" },
      { offset: 280, length: 4, label: "armor weight class enum @0x118" },
      { offset: 76, length: 4, label: "armor field @0x4C" },
      { offset: 188, length: 4, label: "armor field @0xBC" },
      { offset: 192, length: 4, label: "armor field @0xC0" }
    );
  }

  return annotations.filter(
    (annotation) =>
      annotation.offset >= 0 &&
      annotation.length > 0 &&
      annotation.offset + annotation.length <= entryRecord.contentSlice.length
  );
}

function createHexDump(entryRecord, bytesPerLine = 16) {
  const bytes = entryRecord.contentSlice;
  const annotations = buildHexAnnotations(entryRecord);
  const annotationByByte = new Map();

  for (const annotation of annotations) {
    for (let offset = annotation.offset; offset < annotation.offset + annotation.length; offset += 1) {
      annotationByByte.set(offset, annotation);
    }
  }

  const lines = [];
  for (let offset = 0; offset < bytes.length; offset += bytesPerLine) {
    const lineBytes = Array.from(bytes.slice(offset, offset + bytesPerLine));
    let hexText = "";
    for (let index = 0; index < lineBytes.length; index += 1) {
      const byteOffset = offset + index;
      const annotation = annotationByByte.get(byteOffset);
      const previousAnnotation = index > 0 ? annotationByByte.get(byteOffset - 1) : null;
      const byteText = formatHexByte(lineBytes[index]);

      if (index > 0) {
        if (annotation && previousAnnotation === annotation) {
          hexText += `<span title="${escapeHtmlAttribute(annotation.label)}" style="background:${getFieldColor(annotation.label)}"> </span>`;
        } else {
          hexText += " ";
        }
      }

      const byteTitle = annotation
        ? `${annotation.label} | offset 0x${byteOffset.toString(16).toUpperCase()}`
        : `offset 0x${byteOffset.toString(16).toUpperCase()}`;

      if (!annotation) {
        hexText += `<span class="hex-byte" data-byte-offset="${byteOffset}" title="${escapeHtmlAttribute(byteTitle)}" style="cursor:pointer">${byteText}</span>`;
        continue;
      }

      const first = byteOffset === annotation.offset;
      const last = byteOffset === annotation.offset + annotation.length - 1;
      const styles = [`background:${getFieldColor(annotation.label)}`, "cursor:pointer"];
      if (first) {
        styles.push("padding-left:2px", "border-top-left-radius:2px", "border-bottom-left-radius:2px");
      }
      if (last) {
        styles.push("padding-right:2px", "border-top-right-radius:2px", "border-bottom-right-radius:2px");
      }

      hexText += `<span class="hex-byte" data-byte-offset="${byteOffset}" title="${escapeHtmlAttribute(byteTitle)}" style="${styles.join(";")}">${byteText}</span>`;
    }

    const ascii = lineBytes.map(formatAsciiByte).join("");
    lines.push(`${offset.toString(16).toUpperCase().padStart(8, "0")}  ${hexText}  ${escapeHtml(ascii)}`);
  }
  return lines.join("\n");
}

function formatFieldValue(value) {
  if (value === null || value === undefined) {
    return "n/a";
  }

  return String(value);
}

function formatUint32Inspector(entryRecord, offset) {
  if (!entryRecord?.contentSlice || offset < 0 || offset >= entryRecord.contentSlice.length) {
    return "Click a hex byte to inspect the uint32 at that offset.";
  }

  const value = readUint32LE(entryRecord.contentSlice, offset);
  if (value === null) {
    return `offset 0x${offset.toString(16).toUpperCase()} (${offset}) | uint32 unavailable: not enough bytes`;
  }

  return `offset 0x${offset.toString(16).toUpperCase()} (${offset}) | uint32 = ${value} | 0x${value.toString(16).toUpperCase()}`;
}

function getCntcTypeDescription(type) {
  if (Number(type) === 0) {
    return "Achievements";
  }

  if (Number(type) === 1) {
    return "Achievement Categories";
  }

  if (Number(type) === 12) {
    return "Crafting Recipes";
  }

  if (Number(type) === 35) {
    return "Items";
  }

  if (Number(type) === 66) {
    return "Skins";
  }

  if (Number(type) === 45) {
    return "Maps";
  }

  return "";
}

function getEntryGridColumns(type) {
  const columns = [
    { field: "fileId", caption: "file id", size: "12%", sortable: true, resizable: true },
    { field: "baseId", caption: "base id", size: "12%", sortable: true, resizable: true },
    { field: "rootIndex", caption: "root", size: "10%", sortable: true, resizable: true },
    { field: "namespaceIndex", caption: "namespace", size: "14%", sortable: true, resizable: true },
    { field: "size", caption: "size", size: "8%", sortable: true, resizable: true },
    { field: "uniqueId", caption: "unique id", size: "12%", sortable: true, resizable: true },
    { field: "typeId", caption: getTypeIdCaption(type), size: "12%", sortable: true, resizable: true },
  ];

  if (String(type) === "35") {
    columns.push({ field: "itemType", caption: "item type", size: "14%", sortable: true, resizable: true });
  }

  return columns;
}

function decodeKnownFields(entryRecord) {
  const bytes = entryRecord?.contentSlice;
  const parsedItem = parseType35Item(entryRecord);
  if (!bytes) {
    return [];
  }

  const fields = [
    { label: "decoded length", value: bytes.length },
    { label: "embedded type @0x10", value: readUint32LE(bytes, 16) },
    { label: "unique id @0x14", value: getUniqueId(entryRecord) },
    { label: getTypeIdLabel(entryRecord.type), value: getTypeId(entryRecord) },
  ];

  if (entryRecord.type === 35) {
    fields.push(
      { label: "item type @0x2C", value: getType35ItemTypeLabel(entryRecord) },
      {
        label: "rarity @0x60",
        value:
          parsedItem?.rarity_id !== null && parsedItem?.rarity_id !== undefined
            ? `${parsedItem.rarity ?? "Unknown"} (${parsedItem.rarity_id})`
            : readUint32LE(bytes, 96),
      },
      { label: "level @0x74", value: parsedItem?.level ?? readUint32LE(bytes, 116) }
    );
  }

  if (entryRecord.type === 35 && getType35ItemTypeEnum(entryRecord) === 24) {
    fields.push(
      { label: "weapon field @0x38", value: parsedItem?.details?.field_0x38 ?? readUint32LE(bytes, 56) },
      { label: "unknown ref @0x40", value: parsedItem?.details?.field_0x40 ?? readUint32LE(bytes, 64) },
      { label: "flag @0x48", value: parsedItem?.details?.flag_0x48 ?? readUint32LE(bytes, 72) },
      { label: "subtype enum @0x4C", value: parsedItem?.details?.subtype_id ?? readUint32LE(bytes, 76) },
      { label: "weapon field @0xC0", value: parsedItem?.details?.field_0xC0 ?? readUint32LE(bytes, 192) }
    );
  }

  if (entryRecord.type === 35 && getType35ItemTypeEnum(entryRecord) === 0) {
    fields.push(
      {
        label: "armor slot @0xB8",
        value:
          parsedItem?.details?.type_id !== null && parsedItem?.details?.type_id !== undefined
            ? `${parsedItem.details.type ?? "Unknown"} (${parsedItem.details.type_id})`
            : readUint32LE(bytes, 184),
      },
      {
        label: "armor weight class @0x118",
        value:
          parsedItem?.details?.weight_class_id !== null && parsedItem?.details?.weight_class_id !== undefined
            ? `${parsedItem.details.weight_class ?? "Unknown"} (${parsedItem.details.weight_class_id})`
            : readUint32LE(bytes, 280),
      },
      { label: "armor field @0x4C", value: parsedItem?.details?.field_0x4C ?? readUint32LE(bytes, 76) },
      { label: "armor field @0xBC", value: parsedItem?.details?.field_0xBC ?? readUint32LE(bytes, 188) },
      { label: "armor field @0xC0", value: parsedItem?.details?.field_0xC0 ?? readUint32LE(bytes, 192) }
    );
  }

  return fields;
}

function renderParsedJson(entryRecord) {
  const parsedItem = parseType35Item(entryRecord);
  if (!parsedItem) {
    return '<div style="padding:10px; color:#666;">No parsed JSON available for this entry.</div>';
  }

  return (
    `<div style="height:100%; display:flex; flex-direction:column; background:#fff; border-top:1px solid #ddd;">` +
    `<div style="padding:8px 10px; border-bottom:1px solid #ddd; font-size:12px; font-weight:bold;">Parsed JSON</div>` +
    `<pre style="margin:0; padding:10px; overflow:auto; font-family:Consolas, Monaco, monospace; font-size:12px; line-height:1.35;">${escapeHtml(
      JSON.stringify(parsedItem, null, 2)
    )}</pre>` +
    `</div>`
  );
}

function renderDecodedFields(entryRecord) {
  const decodedFields = decodeKnownFields(entryRecord);

  if (decodedFields.length === 0) {
    return '<div style="padding:12px; color:#666;">No decoded fields for this subtype yet.</div>';
  }

  const rows = decodedFields
    .map((field) => {
      const color = getFieldColor(field.label);

      return (
        `<div style="padding:6px 10px; border-bottom:1px solid #eee; font-family:monospace; font-size:12px; line-height:1.3; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">` +
        `<span style="display:inline-block; width:10px; height:10px; margin-right:8px; border-radius:2px; background:${color}; vertical-align:middle;"></span>` +
        `<span style="color:#222;">${escapeHtml(field.label)}</span>` +
        `<span style="color:#666;"> = </span>` +
        `<span>${escapeHtml(formatFieldValue(field.value))}</span>` +
        `</div>`
      );
    })
    .join("");

  return (
    `<div style="height:100%; display:flex; flex-direction:column; background:#fff;">` +
    `<div style="padding:8px 10px; border-bottom:1px solid #ddd; font-size:12px; font-weight:bold;">Decoded fields</div>` +
    `<div style="overflow:auto;">${rows}</div>` +
    `${renderParsedJson(entryRecord)}` +
    `</div>`
  );
}

function toBase64(bytes) {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

function updateToolbarState() {
  if (w2ui.cntcToolbar) {
    w2ui.cntcToolbar.set("downloadEntries", {
      disabled: !selectedCntcType || (cntcEntriesByType[selectedCntcType]?.length ?? 0) === 0,
    });
    w2ui.cntcToolbar.set("downloadAllEntries", {
      disabled: Object.keys(cntcEntriesByType).length === 0,
    });
  }
}

function serializeEntryRecord(entryRecord) {
  return {
    type: entryRecord.type,
    fileId: entryRecord.fileId,
    baseId: entryRecord.baseId,
    rootIndex: entryRecord.rootIndex,
    namespaceIndex: entryRecord.namespaceIndex,
    size: entryRecord.size,
    contentBase64: toBase64(entryRecord.contentSlice),
  };
}

function downloadSelectedEntries() {
  if (!selectedCntcType) {
    return;
  }

  const entryRecords = cntcEntriesByType[selectedCntcType] ?? [];
  const exportData = {
    cntcType: Number(selectedCntcType),
    entryCount: entryRecords.length,
    entries: entryRecords.map(serializeEntryRecord),
  };

  downloadJson(`cntc-${selectedCntcType}-entries.json`, exportData);
}

function downloadAllEntries() {
  const typeKeys = Object.keys(cntcEntriesByType).sort((left, right) => Number(left) - Number(right));
  if (typeKeys.length === 0) {
    return;
  }

  const exportData = {
    cntcTypeCount: typeKeys.length,
    totalEntryCount: typeKeys.reduce((sum, typeKey) => sum + (cntcEntriesByType[typeKey]?.length ?? 0), 0),
    cntcTypes: typeKeys.map((typeKey) => ({
      cntcType: Number(typeKey),
      entryCount: cntcEntriesByType[typeKey]?.length ?? 0,
      entries: (cntcEntriesByType[typeKey] ?? []).map(serializeEntryRecord),
    })),
  };

  downloadJson("cntc-all-entries.json", exportData);
}

function renderHexPreview(entryRecord) {
  if (!entryRecord) {
    w2ui.detailLayout.content(
      "preview",
      '<div style="padding: 12px; color: #666;">Select an entry to inspect its hexadecimal payload.</div>'
    );
    return;
  }

  const header = [
    `type=${entryRecord.type}`,
    `file=${entryRecord.fileId}`,
    `baseId=${entryRecord.baseId}`,
    `size=${entryRecord.size}`,
    `rootIndex=${entryRecord.rootIndex}`,
    `namespaceIndex=${entryRecord.namespaceIndex}`,
  ].join(" | ");

  w2ui.detailLayout.content(
    "preview",
    `<div style="height:100%; display:flex; flex-direction:column; background:#fafafa;">` +
      `<div style="padding:8px 12px; border-bottom:1px solid #ddd; font-family:monospace;">${escapeHtml(header)}</div>` +
      `<div id="hexInspectorInfo" style="padding:6px 12px; border-bottom:1px solid #ddd; font-family:monospace; font-size:12px; background:#fff;">${escapeHtml(
        formatUint32Inspector(null, -1)
      )}</div>` +
      `<div style="flex:1; min-height:0; display:flex;">` +
      `<div style="flex:1 1 70%; overflow:auto; border-right:1px solid #ddd;">` +
      `<pre id="hexDumpView" style="margin:0; padding:12px; font-family:Consolas, Monaco, monospace; font-size:12px; line-height:1.4;">${createHexDump(entryRecord)}</pre>` +
      `</div>` +
      `<div style="flex:0 0 320px; min-width:280px; background:#fff;">${renderDecodedFields(entryRecord)}</div>` +
      `</div>` +
      `</div>`
  );

  const hexDumpView = document.getElementById("hexDumpView");
  const hexInspectorInfo = document.getElementById("hexInspectorInfo");
  if (hexDumpView && hexInspectorInfo) {
    hexDumpView.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const byteSpan = target.closest(".hex-byte");
      if (!(byteSpan instanceof HTMLElement)) {
        return;
      }

      const offset = Number(byteSpan.dataset.byteOffset);
      if (!Number.isFinite(offset)) {
        return;
      }

      hexDumpView.querySelectorAll(".hex-byte.uint32-selected").forEach((element) => {
        element.classList.remove("uint32-selected");
        if (element instanceof HTMLElement) {
          element.style.boxShadow = "";
        }
      });

      for (let selectedOffset = offset; selectedOffset < offset + 4; selectedOffset += 1) {
        const selectedByte = hexDumpView.querySelector(`.hex-byte[data-byte-offset="${selectedOffset}"]`);
        if (!(selectedByte instanceof HTMLElement)) {
          continue;
        }
        selectedByte.classList.add("uint32-selected");
        selectedByte.style.boxShadow = "inset 0 0 0 9999px rgba(255, 235, 59, 0.7)";
      }

      hexInspectorInfo.textContent = formatUint32Inspector(entryRecord, offset);
    });
  }
}

function showTypeEntries(type) {
  selectedCntcType = type;
  updateToolbarState();
  const entryRecords = cntcEntriesByType[type] ?? [];
  console.log("[cntc_table] showTypeEntries", type, entryRecords.length);
  w2ui.entryGrid.columns = getEntryGridColumns(type);
  w2ui.entryGrid.records = entryRecords.map((entryRecord, index) => ({
    recid: `${type}:${index}`,
    fileId: entryRecord.fileId,
    baseId: entryRecord.baseId,
    rootIndex: entryRecord.rootIndex,
    namespaceIndex: entryRecord.namespaceIndex,
    size: entryRecord.size,
    uniqueId: getUniqueId(entryRecord),
    typeId: getTypeId(entryRecord),
    itemType: getType35ItemTypeLabel(entryRecord),
    _entryRecord: entryRecord,
  }));
  w2ui.entryGrid.refresh();
  renderHexPreview(entryRecords[0]);
}

function setupUi() {
  console.log("[cntc_table] setupUi");
  const pstyle = "border: 1px solid #dfdfdf; padding: 0;";
  $("#layout").w2layout({
    name: "layout",
    panels: [
      {
        type: "top",
        size: 42,
        style: pstyle,
        content: '<div id="cntcToolbar" style="width: 100%; height: 100%"></div>',
      },
      { type: "left", size: "25%", resizable: true, style: pstyle, content: "left" },
      { type: "main", content: "main", style: pstyle },
      //{ type: "preview", size: "50%", resizable: true, style: pstyle, content: "preview" },
    ],
  });

  $("#cntcToolbar").w2toolbar({
    name: "cntcToolbar",
    items: [
      {
        id: "downloadEntries",
        type: "button",
        text: "Download selected type",
        disabled: true,
      },
      {
        id: "downloadAllEntries",
        type: "button",
        text: "Download all types",
        disabled: true,
      },
    ],
    onClick(event) {
      if (event.target === "downloadEntries") {
        downloadSelectedEntries();
      }

      if (event.target === "downloadAllEntries") {
        downloadAllEntries();
      }
    },
  });

  w2ui["layout"].content("main", '<div id="detailLayout" style="width: 100%; height: 100%"></div>');
  $("#detailLayout").w2layout({
    name: "detailLayout",
    panels: [
      { type: "main", style: pstyle, content: '<div id="entryGrid" style="width: 100%; height: 100%"></div>' },
      {
        type: "preview",
        size: "45%",
        resizable: true,
        style: pstyle,
        content: '<div style="padding: 12px; color: #666;">Select an entry to inspect its hexadecimal payload.</div>',
      },
    ],
  });

  w2ui["layout"].content(
    "left",
    $().w2grid({
      name: "grid",
      columns: [
        {
          field: "cntcId",
          caption: "cntc id",
          size: "28%",
          sortable: true,
          resizable: true,
        },
        {
          field: "count",
          caption: "entries count",
          size: "44%",
          sortable: true,
          resizable: true,
        },
        {
          field: "description",
          caption: "description",
          size: "28%",
          sortable: true,
          resizable: true,
        },
      ],
      sortData: [{ field: "count", direction: "desc" }],
      onClick(event) {
        event.onComplete = function () {
          const record = this.get(event.recid);
          if (record) {
            showTypeEntries(String(record.cntcId));
          }
        };
      },
    })
  );

  $("#entryGrid").w2grid({
    name: "entryGrid",
    columns: getEntryGridColumns(null),
    records: [],
    onClick(event) {
      event.onComplete = function () {
        renderHexPreview(this.get(event.recid)?._entryRecord);
      };
    },
  });

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
    console.log("[cntc_table] file selected", evt.target.files?.[0]?.name);
    T3D.getLocalReader(evt.target.files[0], onLocalReaderCreated, "./static/t3dworker.js");
  });

  /// Overwrite progress logger
  T3D.Logger.logFunctions[T3D.Logger.TYPE_PROGRESS] = function () {
    $("#filePickerPop").prop("disabled", true);
    $("#fileLoadProgress").html("Indexing .dat file (first visit only)<br/>" + arguments[1] + "%<br/><br/>");
  };
}

async function onLocalReaderCreated(lr) {
  console.log("[cntc_table] local reader created");
  w2popup.close();
  w2popup.open({
    speed: 0,
    title: "Parse cntc files",
    modal: true,
    showClose: false,
    body: '<div class="w2ui-centered">' + '<div id="cntcLoadProgress">Indexing cntc file</div>' + "</div>",
  });
  const fileList = await lr.readFileList();
  console.log("[cntc_table] readFileList complete", {
    totalFiles: fileList.length,
    cntcCandidates: fileList.filter((file) => file.fileType === "PF_cntc").length,
  });
  const cntcFiles = getCntcFiles(fileList);
  console.log("[cntc_table] filtered cntc files", cntcFiles.length, cntcFiles.slice(0, 10));
  const cntcTypes = {};
  let fileProgress = 1;
  for (const key of Object.keys(cntcEntriesByType)) {
    delete cntcEntriesByType[key];
  }
  for (const cntcFile of cntcFiles) {
    $("#cntcLoadProgress").html(`Indexing cntc file: ${cntcFile.mftId}<br />${fileProgress}/${cntcFiles.length}`);
    try {
      const file = await readCntcFile(lr, cntcFile.mftId);
      cntcFileCache[cntcFile.mftId] = file;
      const mainChunk = getMainChunk(file);
      const entryRecords = getEntries(mainChunk);
      const types = new Set(entryRecords.map((i) => i.type));
      fileTypeSets[cntcFile.mftId] = types;
      for (const entryRecord of entryRecords) {
        const typeKey = String(entryRecord.type);
        if (!cntcEntriesByType[typeKey]) {
          cntcEntriesByType[typeKey] = [];
        }
        cntcEntriesByType[typeKey].push({
          ...entryRecord,
          fileId: cntcFile.mftId,
          baseId: cntcFile.baseIdList[0] ?? "",
          size: entryRecord.contentSlice.length,
        });
      }
      for (const type of types) {
        const count = entryRecords.filter((i) => i.type === type).length;
        if (cntcTypes[type]) {
          cntcTypes[type] += count;
        } else {
          cntcTypes[type] = count;
        }
      }
    } catch (error) {
      console.error("[cntc_table] failed to parse cntc file", cntcFile.mftId, cntcFile, error);
    }
    fileProgress++;
  }

  console.log("[cntc_table] aggregated cntc types", cntcTypes);
  selectedCntcType = null;
  w2ui["grid"].records = [];
  for (const [type, count] of Object.entries(cntcTypes)) {
    w2ui["grid"].records.push({
      recid: Number(type),
      cntcId: Number(type),
      description: getCntcTypeDescription(type),
      count,
    });
  }

  console.log("[cntc_table] rows added", w2ui["grid"].records.length);
  w2ui.grid.refresh();
  w2ui.entryGrid.columns = getEntryGridColumns(null);
  w2ui.entryGrid.records = [];
  w2ui.entryGrid.refresh();
  renderHexPreview(null);
  updateToolbarState();
  w2popup.close();
}

window.addEventListener("load", setupUi);
