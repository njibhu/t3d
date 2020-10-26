

export type SceneFileAnimationV0 = {
  animations: Array<SceneAnimationV0>,
  imports: Array<SceneAnimationImportV0>
}

export type SceneAnimationV0 = {
  name: BigInt,
  motion: SceneMotionV0,
  actionPoints: Array<SceneActionPointV0>
}

export type SceneMotionV0 = {
  keys: Array<SceneKeyframeV0>
}

export type SceneKeyframeV0 = {
  time: number,
  position: Array<number>,
  rotation: Array<number>
}

export type SceneActionPointV0 = {
  name: BigInt,
  motion: SceneMotionV0
}

export type SceneAnimationImportV0 = {
  filename: string,
  animNames: Array<BigInt>
}

export type SceneFileAnimationV1 = {
  animations: Array<SceneAnimationV1>,
  imports: Array<SceneAnimationImportV1>
}

export type SceneAnimationV1 = {
  name: BigInt,
  motion: SceneMotionV1,
  actionPoints: Array<SceneActionPointV1>,
  events: Array<SceneAnimationEventV1>
}

export type SceneMotionV1 = {
  keys: Array<SceneKeyframeV1>
}

export type SceneKeyframeV1 = {
  time: number,
  position: Array<number>,
  rotation: Array<number>
}

export type SceneActionPointV1 = {
  name: BigInt,
  motion: SceneMotionV1
}

export type SceneAnimationEventV1 = {
  name: BigInt,
  time: number
}

export type SceneAnimationImportV1 = {
  filename: string,
  animNames: Array<BigInt>
}

export type SceneFileAnimationV2 = {
  animations: Array<SceneAnimationV2>,
  poses: Array<ScenePoseV2>,
  imports: Array<SceneAnimationImportV2>
}

export type SceneAnimationV2 = {
  name: BigInt,
  motion: SceneMotionV2,
  actionPoints: Array<SceneActionPointV2>,
  events: Array<SceneAnimationEventV2>
}

export type SceneMotionV2 = {
  keys: Array<SceneKeyframeV2>
}

export type SceneKeyframeV2 = {
  time: number,
  position: Array<number>,
  rotation: Array<number>
}

export type SceneActionPointV2 = {
  name: BigInt,
  motion: SceneMotionV2
}

export type SceneAnimationEventV2 = {
  name: BigInt,
  time: number
}

export type ScenePoseV2 = {
  name: BigInt,
  transforms: Array<SceneTransformV2>
}

export type SceneTransformV2 = {
  name: BigInt,
  translation: Array<number>,
  rotation: Array<number>
}

export type SceneAnimationImportV2 = {
  filename: string,
  animNames: Array<SceneImportSequenceV2>,
  flags: number
}

export type SceneImportSequenceV2 = {
  name: BigInt
}