import { DataType } from "./internals";

export const Float32: DataType = {
  read: (dv, pos) => dv.getFloat32(pos)
};

export const Float64: DataType = {
  read: (dv, pos) => dv.getFloat64(pos)
};

export const Uint8: DataType = {
  read: (dv, pos) => dv.getUint8(pos)
};

export const Uint16: DataType = {
  read: (dv, pos) => dv.getUint16(pos)
};

export const Uint32: DataType = {
  read: (dv, pos) => dv.getUint32(pos)
};

export const Uint64: DataType = {
  // TODO
  read: (dv, pos) => {}
};

export const Int8: DataType = {
  read: (dv, pos) => dv.getInt8(pos)
};

export const Int16: DataType = {
  read: (dv, pos) => dv.getInt16(pos)
};

export const Int32: DataType = {
  read: (dv, pos) => dv.getInt32(pos)
};

export const Int64: DataType = {
  // TODO
  read: (dv, pos) => {}
};

export const CString: DataType = {
  // TODO
  read: (dv, pos) => {}
};

export const QWord: DataType = {
  // TODO
  read: (dv, pos) => {}
};

export function Padding(length: number): DataType {
  return {
    length,
    // TODO
    read: (dv, pos) => {}
  };
}

export function List(type: DataType | string, length?: number): DataType {
  const data = length ? { type, length } : { type };
  return {
    ...data,
    // TODO
    read: (dv, pos) => {}
  };
}

export function Pointer(type: DataType | string): DataType {
  return {
    type,
    // TODO
    read: (dv, pos) => {}
  };
}

export function Struct(type: string): DataType {
  return {
    type,
    // TODO
    read: (dv, pos) => {}
  };
}

export function String8(length: number): DataType {
  return {
    length,
    // TODO
    read: (dv, pos) => {}
  };
}

export function String16(length: number): DataType {
  return {
    length,
    // TODO
    read: (dv, pos) => {}
  };
}
