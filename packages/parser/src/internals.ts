export interface DataType {
  length?: number;
  type?: DataType | string;
  read: (dv: DataView, position: number, definitions: [Definition]) => any;
  declarationType: string;
}

export interface Definition {}
