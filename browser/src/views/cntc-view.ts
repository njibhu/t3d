import { Cntc, FileParser, type LocalReader } from "t3d-lib";
import {
  CntcExplorer,
  type CntcExplorerEntry,
  type CntcFocusTarget,
  type CntcNavigationTarget,
} from "./cntc/cntc-explorer";

export type { CntcNavigationTarget } from "./cntc/cntc-explorer";

interface CntcViewInit {
  reader: LocalReader;
  onNavigateToEntry?: (target: CntcNavigationTarget) => void;
  onOpenFile?: (baseId: number, newTab: boolean) => void;
}

/**
 * Per-file CNTC viewer. A thin wrapper over the shared {@link CntcExplorer}: it
 * parses a single cntc packfile, feeds its entries to the explorer, and seeds
 * the resolver so cross-file references work. Everything else (the 3-pane UI,
 * hex/decoded fields, reference resolution) is shared with the archive-wide
 * table.
 */
export class CntcView {
  private reader: LocalReader;
  private resolver: InstanceType<typeof Cntc.CntcResolver>;
  private explorer: CntcExplorer;

  constructor(host: HTMLElement, init: CntcViewInit) {
    this.reader = init.reader;
    this.resolver = new Cntc.CntcResolver(this.reader);
    host.className = "view-pane";

    this.explorer = new CntcExplorer({
      resolver: this.resolver,
      showSource: false,
      onNavigateToEntry: init.onNavigateToEntry,
      onOpenFile: init.onOpenFile,
    });
    host.replaceChildren(this.explorer.root);
  }

  setData(packfile: FileParser, fileName: string): void {
    const parsedBaseId = Number(fileName.split(".", 1)[0]);
    const baseId = Number.isFinite(parsedBaseId) ? parsedBaseId : 0;

    const mainContent = Cntc.getCntcMainContent(packfile);
    const entries = Cntc.getCntcEntries(mainContent);
    // Seed the resolver with the file we just parsed so it isn't re-read.
    this.resolver.seedFile({ baseId, mainContent, entries });

    const entriesByType = new Map<number, CntcExplorerEntry[]>();
    for (const entry of entries) {
      const tagged: CntcExplorerEntry = { ...entry, baseId };
      const bucket = entriesByType.get(entry.type);
      if (bucket) bucket.push(tagged);
      else entriesByType.set(entry.type, [tagged]);
    }
    this.explorer.setData(entriesByType);
  }

  focusEntry(target: CntcFocusTarget): boolean {
    return this.explorer.focusEntry(target);
  }
}
