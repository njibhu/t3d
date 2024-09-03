export namespace V0_N {
  export type SceneFileSkeletonV0 = {
    bones: Array<SceneBoneV0>,
    joints: Array<SceneJointV0>,
    unmappedBones: Array<SceneUnmappedBoneV0>,
    ragdollToModel: Array<number>,
    modelToRagdoll: Array<number>
  }

  export type SceneBoneV0 = {
    vertexA: Array<number>,
    vertexB: Array<number>,
    radius: number,
    mass: number
  }

  export type SceneJointV0 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    twists: Array<Array<number>>,
    planes: Array<Array<number>>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneUnmappedBoneV0 = {
    modelBoneIndex: number,
    sceneBoneIndex: number,
    localPose: Array<Array<number>>
  }

}

export type V0 = V0_N.SceneFileSkeletonV0;

export namespace V1_N {
  export type SceneFileSkeletonV1 = {
    bones: Array<SceneBoneV1>,
    joints: Array<SceneJointV1>,
    hingeJoints: Array<SceneHingeJointV1>,
    unmappedBones: Array<SceneUnmappedBoneV1>,
    ragdollToModel: Array<number>,
    modelToRagdoll: Array<number>
  }

  export type SceneBoneV1 = {
    vertexA: Array<number>,
    vertexB: Array<number>,
    radius: number,
    mass: number
  }

  export type SceneJointV1 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    twists: Array<Array<number>>,
    planes: Array<Array<number>>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneHingeJointV1 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    hinges: Array<Array<number>>,
    normals: Array<Array<number>>,
    limitMin: number,
    limitMax: number
  }

  export type SceneUnmappedBoneV1 = {
    modelBoneIndex: number,
    sceneBoneIndex: number,
    localPose: Array<Array<number>>
  }

}

export type V1 = V1_N.SceneFileSkeletonV1;

export namespace V2_N {
  export type SceneFileSkeletonV2 = {
    bones: Array<SceneBoneV2>,
    joints: Array<SceneJointV2>,
    hingeJoints: Array<SceneHingeJointV2>,
    ragdollToModel: Array<number>
  }

  export type SceneBoneV2 = {
    vertexA: Array<number>,
    vertexB: Array<number>,
    radius: number,
    mass: number
  }

  export type SceneJointV2 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    twists: Array<Array<number>>,
    planes: Array<Array<number>>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneHingeJointV2 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    hinges: Array<Array<number>>,
    normals: Array<Array<number>>,
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
    ragdollToModel: Array<number>
  }

  export type SceneBoneV3 = {
    vertexA: Array<number>,
    vertexB: Array<number>,
    radius: number,
    mass: number,
    name: number
  }

  export type SceneJointV3 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    twists: Array<Array<number>>,
    planes: Array<Array<number>>,
    coneLimit: number,
    planeMin: number,
    planeMax: number,
    twistMin: number,
    twistMax: number
  }

  export type SceneHingeJointV3 = {
    bones: Array<number>,
    pivots: Array<Array<number>>,
    hinges: Array<Array<number>>,
    normals: Array<Array<number>>,
    limitMin: number,
    limitMax: number
  }

}

export type V3 = V3_N.SceneFileSkeletonV3;

export type V0_U = V0 | V1 | V2 | V3;
export type V1_U = V1 | V2 | V3;
export type V2_U = V2 | V3;
export type V3_U = V3;
