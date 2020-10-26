

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
  name: BigInt
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