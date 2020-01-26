import { DataType } from "./internals";

export const Float32: DataType = {
  read: (dv, pos) => dv.getFloat32(pos, true)
};

export const Float64: DataType = {
  read: (dv, pos) => dv.getFloat64(pos, true)
};

export const Uint8: DataType = {
  read: (dv, pos) => dv.getUint8(pos)
};

export const Uint16: DataType = {
  read: (dv, pos) => dv.getUint16(pos, true)
};

export const Uint32: DataType = {
  read: (dv, pos) => dv.getUint32(pos, true)
};

export const Uint64: DataType = {
  read: (dv, pos) =>
    dv.getUint32(pos, true) + 2 ** 32 * dv.getUint32(pos + 4, true)
};

export const CString: DataType = {
  // TODO
  read: (dv, pos) => {}
};

export function FixedArray(type: DataType | string, length: number): DataType {
  return {
    type,
    length,
    // TODO
    read: (dv, pos) => {}
  };
}

export function DynArray(type: DataType | string): DataType {
  return {
    type,
    // TODO
    read: (dv, pos) => {}
  };
}

export function RefArray(type: DataType | string): DataType {
  return {
    type,
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

export function String16(): DataType {
  return {
    // TODO
    read: (dv, pos) => {}
  };
}

export function Filename(): DataType {
  return {
    // TODO
    read: (dv, pos) => {}
  };
}

export function Fileref(): DataType {
  return {
    // TODO
    read: (dv, pos) => {}
  };
}
