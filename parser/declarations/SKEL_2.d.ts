export namespace V0_N {
  export type SceneFileSkeletonV0 = {
    bones: Array<SceneBoneV0>,
    joints: Array<SceneJointV0>,
    unmappedBones: Array<SceneUnmappedBoneV0>,
    ragdollToModel: Uint32Array,
    modelToRagdoll: Uint32Array
  }

  export type SceneBoneV0 = {
    vertexA: Float32Array,
    vertexB: Float32Array,
    radius: number,
    mass: number
  }

  export type SceneJointV0 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    twists: Array<Float32Array>,
    planes: Array<Float32Array>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneUnmappedBoneV0 = {
    modelBoneIndex: number,
    sceneBoneIndex: number,
    localPose: Array<Float32Array>
  }

}

export type V0 = V0_N.SceneFileSkeletonV0;

export namespace V1_N {
  export type SceneFileSkeletonV1 = {
    bones: Array<SceneBoneV1>,
    joints: Array<SceneJointV1>,
    hingeJoints: Array<SceneHingeJointV1>,
    unmappedBones: Array<SceneUnmappedBoneV1>,
    ragdollToModel: Uint32Array,
    modelToRagdoll: Uint32Array
  }

  export type SceneBoneV1 = {
    vertexA: Float32Array,
    vertexB: Float32Array,
    radius: number,
    mass: number
  }

  export type SceneJointV1 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    twists: Array<Float32Array>,
    planes: Array<Float32Array>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneHingeJointV1 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    hinges: Array<Float32Array>,
    normals: Array<Float32Array>,
    limitMin: number,
    limitMax: number
  }

  export type SceneUnmappedBoneV1 = {
    modelBoneIndex: number,
    sceneBoneIndex: number,
    localPose: Array<Float32Array>
  }

}

export type V1 = V1_N.SceneFileSkeletonV1;

export namespace V2_N {
  export type SceneFileSkeletonV2 = {
    bones: Array<SceneBoneV2>,
    joints: Array<SceneJointV2>,
    hingeJoints: Array<SceneHingeJointV2>,
    ragdollToModel: Uint32Array
  }

  export type SceneBoneV2 = {
    vertexA: Float32Array,
    vertexB: Float32Array,
    radius: number,
    mass: number
  }

  export type SceneJointV2 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    twists: Array<Float32Array>,
    planes: Array<Float32Array>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneHingeJointV2 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    hinges: Array<Float32Array>,
    normals: Array<Float32Array>,
    limitMin: number,
    limitMax: number
  }

}

export type V2 = V2_N.SceneFileSkeletonV2;

export namespace V3_N {
  export type SceneFileSkeletonV3 = {
    bones: Array<SceneBoneV3>,
    joints: Array<SceneJointV3>,
    hingeJoints: Array<SceneHingeJointV3>,
    ragdollToModel: Uint32Array
  }

  export type SceneBoneV3 = {
    vertexA: Float32Array,
    vertexB: Float32Array,
    radius: number,
    mass: number,
    name: BigInt
  }

  export type SceneJointV3 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    twists: Array<Float32Array>,
    planes: Array<Float32Array>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneHingeJointV3 = {
    bones: Uint32Array,
    pivots: Array<Float32Array>,
    hinges: Array<Float32Array>,
    normals: Array<Float32Array>,
    limitMin: number,
    limitMax: number
  }

}

export type V3 = V3_N.SceneFileSkeletonV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
