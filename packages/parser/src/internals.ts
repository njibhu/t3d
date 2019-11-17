export interface DataType {
  length?: number;
  type?: DataType | string;
  read: (dv: DataView, position: number, definitions: [Definition]) => any;
}

export interface Definition {}
