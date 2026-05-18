import { VirtualTable } from "../components/virtual-table";

const BYTES_PER_LINE = 16;

interface HexRow {
  offset: number;
}

/// Simple xxd-style hex dump. Virtualised through VirtualTable so a 100 MB
/// file renders the same as a 1 KB one — only the visible rows are built.
export class HexView {
  private table: VirtualTable<HexRow>;
  private bytes: Uint8Array = new Uint8Array(0);

  constructor(host: HTMLElement) {
    host.className = "view-pane";
    host.replaceChildren();
    this.table = new VirtualTable<HexRow>({
      columns: [
        {
          field: "offset",
          caption: "Offset",
          width: "100px",
          sortable: false,
          format: (v) => (v as number).toString(16).padStart(8, "0"),
        },
        {
          field: "hex",
          caption: "Hex",
          width: "420px",
          sortable: false,
          get: (r) => this.formatHex(r.offset),
        },
        {
          field: "ascii",
          caption: "ASCII",
          width: "auto",
          sortable: false,
          get: (r) => this.formatAscii(r.offset),
        },
      ],
      getRowKey: (r) => r.offset,
    });
    host.appendChild(this.table.root);
  }

  setData(rawData: ArrayBuffer): void {
    this.bytes = new Uint8Array(rawData);
    const lineCount = Math.ceil(this.bytes.length / BYTES_PER_LINE);
    const rows: HexRow[] = new Array(lineCount);
    for (let i = 0; i < lineCount; i++) rows[i] = { offset: i * BYTES_PER_LINE };
    this.table.setData(rows);
  }

  private formatHex(offset: number): string {
    const end = Math.min(offset + BYTES_PER_LINE, this.bytes.length);
    let out = "";
    for (let i = offset; i < end; i++) {
      out += this.bytes[i].toString(16).padStart(2, "0");
      /// Group bytes in two halves, like xxd
      out += i === offset + 7 ? "  " : " ";
    }
    return out.trimEnd();
  }

  private formatAscii(offset: number): string {
    const end = Math.min(offset + BYTES_PER_LINE, this.bytes.length);
    let out = "";
    for (let i = offset; i < end; i++) {
      const b = this.bytes[i];
      out += b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : ".";
    }
    return out;
  }
}
