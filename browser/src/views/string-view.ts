import { VirtualTable } from "../components/virtual-table";

interface StringRow {
  recid: number;
  value: string;
}

export class StringView {
  private table: VirtualTable<StringRow>;

  constructor(host: HTMLElement) {
    host.className = "view-pane";
    host.replaceChildren();
    this.table = new VirtualTable<StringRow>({
      columns: [
        { field: "recid", caption: "Row #", width: "80px", align: "right", sortable: true },
        { field: "value", caption: "Text", width: "1fr", sortable: false },
      ],
      getRowKey: (r) => r.recid,
    });
    host.appendChild(this.table.root);
  }

  setData(strings: StringRow[]): void {
    this.table.setData(strings);
  }
}
