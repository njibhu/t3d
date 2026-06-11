import { Cntc, FileParser, type LocalReader } from "t3d-lib";
import { triggerDownload } from "../util/download";
import type { ArchiveToolView } from "./archive-tool";

interface CntcMapListViewInit {
  reader: LocalReader;
}

interface MapCodenameRecord {
  mapBaseId: number;
  codename: string;
  codenames: string[];
  regions: string[];
  definitionCount: number;
  sourceCntcBaseIds: number[];
}

const MAP_DATA_REFERENCE: Cntc.CntcReference = {
  kind: "asset",
  label: "map data @0x68",
  offset: Cntc.CNTC_MAP_DATA_FILEREF_OFFSET,
  length: 4,
};

export class CntcMapListView implements ArchiveToolView {
  readonly root: HTMLDivElement;

  private reader: LocalReader;
  private resolver: InstanceType<typeof Cntc.CntcResolver>;

  private statusEl: HTMLDivElement;
  private summaryEl: HTMLDivElement;
  private listEl: HTMLPreElement;
  private exportTextBtn: HTMLButtonElement;
  private exportJsonBtn: HTMLButtonElement;

  private loadToken = 0;
  private loading = false;
  private records: MapCodenameRecord[] = [];

  constructor(init: CntcMapListViewInit) {
    this.reader = init.reader;
    this.resolver = new Cntc.CntcResolver(this.reader);

    this.root = document.createElement("div");
    this.root.className = "archive-tool-view cntc-map-list-view";

    const toolbar = document.createElement("div");
    toolbar.className = "archive-tool-toolbar";
    this.statusEl = document.createElement("div");
    this.statusEl.className = "archive-tool-status";
    this.exportTextBtn = this.buildButton("Download TXT", () => this.downloadText());
    this.exportJsonBtn = this.buildButton("Download JSON", () => this.downloadJson());
    const spacer = document.createElement("div");
    spacer.className = "archive-tool-toolbar-spacer";
    toolbar.append(this.statusEl, spacer, this.exportTextBtn, this.exportJsonBtn);

    const body = document.createElement("div");
    body.className = "cntc-map-list-body";
    this.summaryEl = document.createElement("div");
    this.summaryEl.className = "cntc-map-list-summary";
    this.listEl = document.createElement("pre");
    this.listEl.className = "cntc-map-list-output";
    body.append(this.summaryEl, this.listEl);

    this.root.append(toolbar, body);
    this.setMessage("Waiting to scan CNTC map entries...");
    this.updateExportState();
  }

  setWaiting(message: string): void {
    this.setMessage(message);
  }

  async load(files: { mftId: number; baseId: number }[]): Promise<void> {
    if (this.loading) return;
    const token = ++this.loadToken;
    this.loading = true;
    this.records = [];

    if (files.length === 0) {
      this.setMessage("No CNTC files in this archive.");
      this.loading = false;
      return;
    }

    this.statusEl.textContent = `Parsing CNTC files... 0 / ${files.length}`;
    this.summaryEl.textContent = "Scanning CNTC type 45 entries...";
    this.listEl.textContent = "";

    const mappings = new Map<
      number,
      { codenames: Set<string>; regions: Set<string>; definitionCount: number; sourceCntcBaseIds: Set<number> }
    >();
    let parsed = 0;
    let mapDefinitions = 0;
    let unresolvedMapDataRefs = 0;

    for (const { mftId, baseId } of files) {
      if (token !== this.loadToken) return;
      try {
        const file = await this.reader.readFile(mftId, false, true);
        if (token !== this.loadToken) return;
        if (!file.buffer) {
          parsed += 1;
          continue;
        }

        const packfile = new FileParser(file.buffer);
        if (packfile.header.type !== "cntc") {
          parsed += 1;
          continue;
        }

        const mainContent = Cntc.getCntcMainContent(packfile);
        const entries = Cntc.getCntcEntries(mainContent);
        this.resolver.seedFile({ baseId, mainContent, entries });

        for (const entry of entries) {
          if (entry.type !== 45) continue;
          mapDefinitions += 1;

          const codename =
            Cntc.resolveCntcString(mainContent.strings, Cntc.getCntcMapNameIndex(entry)) ?? "(unknown codename)";
          const region = Cntc.resolveCntcString(mainContent.strings, Cntc.getCntcMapRegionIndex(entry));
          const resolved = await this.resolver.resolveReference(baseId, entry, MAP_DATA_REFERENCE);
          const mapBaseId = resolved?.navigation.target === "file" ? resolved.navigation.baseId : null;
          if (mapBaseId == null) {
            unresolvedMapDataRefs += 1;
            continue;
          }

          const existing = mappings.get(mapBaseId);
          if (existing) {
            existing.codenames.add(codename);
            if (region) existing.regions.add(region);
            existing.definitionCount += 1;
            existing.sourceCntcBaseIds.add(baseId);
          } else {
            mappings.set(mapBaseId, {
              codenames: new Set([codename]),
              regions: region ? new Set([region]) : new Set<string>(),
              definitionCount: 1,
              sourceCntcBaseIds: new Set([baseId]),
            });
          }
        }
      } catch (err) {
        console.error("[cntc-map-list] failed to parse cntc file", mftId, err);
      }

      parsed += 1;
      if (parsed % 25 === 0) {
        this.statusEl.textContent = `Parsing CNTC files... ${parsed} / ${files.length}`;
        await new Promise((resolve) => setTimeout(resolve));
        if (token !== this.loadToken) return;
      }
    }

    this.loading = false;
    this.records = [...mappings.entries()]
      .map(([mapBaseId, record]) => {
        const codenames = [...record.codenames].sort((a, b) => a.localeCompare(b));
        return {
          mapBaseId,
          codename: codenames.join(" | "),
          codenames,
          regions: [...record.regions].sort((a, b) => a.localeCompare(b)),
          definitionCount: record.definitionCount,
          sourceCntcBaseIds: [...record.sourceCntcBaseIds].sort((a, b) => a - b),
        };
      })
      .sort((a, b) => a.mapBaseId - b.mapBaseId);

    const conflictCount = this.records.filter((record) => record.codenames.length > 1).length;
    this.statusEl.textContent =
      `${this.records.length.toLocaleString()} unique maps | ${mapDefinitions.toLocaleString()} map definitions | ` +
      `${files.length.toLocaleString()} CNTC files`;
    this.summaryEl.textContent =
      `Generated ${this.records.length.toLocaleString()} map baseId > codename mappings.` +
      (unresolvedMapDataRefs > 0
        ? ` Skipped ${unresolvedMapDataRefs.toLocaleString()} entries with unresolved map data refs.`
        : "") +
      (conflictCount > 0 ? ` ${conflictCount.toLocaleString()} map baseIds resolved to multiple codenames.` : "");
    this.listEl.textContent = this.records.map((record) => `${record.mapBaseId} > ${record.codename}`).join("\n");
    this.updateExportState();
  }

  onShow(): void {
    // No GL / timers to resume.
  }

  onHide(): void {
    // No GL / timers to pause.
  }

  dispose(): void {
    this.loadToken += 1;
    this.loading = false;
  }

  private setMessage(message: string): void {
    this.records = [];
    this.statusEl.textContent = message;
    this.summaryEl.textContent = message;
    this.listEl.textContent = "";
    this.updateExportState();
  }

  private downloadText(): void {
    if (this.records.length === 0) return;
    triggerDownload(
      new Blob([this.listEl.textContent ?? ""], { type: "text/plain;charset=utf-8" }),
      "cntc-map-codenames.txt"
    );
  }

  private downloadJson(): void {
    if (this.records.length === 0) return;
    triggerDownload(
      new Blob(
        [
          JSON.stringify(
            {
              generatedAt: new Date().toISOString(),
              entryCount: this.records.length,
              entries: this.records,
            },
            null,
            2
          ),
        ],
        { type: "application/json" }
      ),
      "cntc-map-codenames.json"
    );
  }

  private updateExportState(): void {
    const disabled = this.records.length === 0;
    this.exportTextBtn.disabled = disabled;
    this.exportJsonBtn.disabled = disabled;
  }

  private buildButton(label: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }
}
