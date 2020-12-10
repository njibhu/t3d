export namespace V0_N {
  export type ModelFileGr2sV0 = {
    gr2Data: Array<ModelGr2DataV0>
  }

  export type ModelGr2DataV0 = {
    data: Array<number>
  }

}

export type V0 = V0_N.ModelFileGr2sV0;

export namespace V1_N {
  export type ModelFileGr2sV1 = {
    gr2Data: Array<ModelGr2DataV1>
  }

  export type ModelGr2DataV1 = {
    filename: string,
    flags: number,
    data: Array<number>
  }

}

export type V1 = V1_N.ModelFileGr2sV1;

export namespace V2_N {
  export type ModelFileGr2sV2 = {
    gr2Data: Array<ModelGr2DataV2>
  }

  export type ModelGr2DataV2 = {
    filename: string,
    flags: number,
    data: Array<number>
  }

}

export type V2 = V2_N.ModelFileGr2sV2;

export namespace V3_N {
  export type ModelFileGr2sV3 = {
    gr2Data: Array<ModelGr2DataV3>
  }

  export type ModelGr2DataV3 = {
    filename: string,
    flags: number,
    data: Array<number>
  }

}

export type V3 = V3_N.ModelFileGr2sV3;

export namespace V4_N {
  export type ModelFileGr2sV4 = {
    gr2Data: Array<ModelGr2DataV4>
  }

  export type ModelGr2DataV4 = {
    filename: string,
    flags: number,
    data: Array<number>
  }

}

export type V4 = V4_N.ModelFileGr2sV4;

export type V0_U = V0 | V1 | V2 | V3 | V4;
export type V1_U = V1 | V2 | V3 | V4;
export type V2_U = V2 | V3 | V4;
export type V3_U = V3 | V4;
export type V4_U = V4;
