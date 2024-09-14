export namespace V0_N {
  export type SceneFileAnimationV0 = {
    animations: Array<SceneAnimationV0>,
    imports: Array<SceneAnimationImportV0>
  }

  export type SceneAnimationV0 = {
    name: bigint,
    motion: SceneMotionV0,
    actionPoints: Array<SceneActionPointV0>
  }

  export type SceneMotionV0 = {
    keys: Array<SceneKeyframeV0>
  }

  export type SceneKeyframeV0 = {
    time: number,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneActionPointV0 = {
    name: bigint,
    motion: SceneMotionV0
  }

  export type SceneAnimationImportV0 = {
    filename: number,
    animNames: BigUint64Array
  }

}

export type V0 = V0_N.SceneFileAnimationV0;

export namespace V1_N {
  export type SceneFileAnimationV1 = {
    animations: Array<SceneAnimationV1>,
    imports: Array<SceneAnimationImportV1>
  }

  export type SceneAnimationV1 = {
    name: bigint,
    motion: SceneMotionV1,
    actionPoints: Array<SceneActionPointV1>,
    events: Array<SceneAnimationEventV1>
  }

  export type SceneMotionV1 = {
    keys: Array<SceneKeyframeV1>
  }

  export type SceneKeyframeV1 = {
    time: number,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneActionPointV1 = {
    name: bigint,
    motion: SceneMotionV1
  }

  export type SceneAnimationEventV1 = {
    name: bigint,
    time: number
  }

  export type SceneAnimationImportV1 = {
    filename: number,
    animNames: BigUint64Array
  }

}

export type V1 = V1_N.SceneFileAnimationV1;

export namespace V2_N {
  export type SceneFileAnimationV2 = {
    animations: Array<SceneAnimationV2>,
    poses: Array<ScenePoseV2>,
    imports: Array<SceneAnimationImportV2>
  }

  export type SceneAnimationV2 = {
    name: bigint,
    motion: SceneMotionV2,
    actionPoints: Array<SceneActionPointV2>,
    events: Array<SceneAnimationEventV2>
  }

  export type SceneMotionV2 = {
    keys: Array<SceneKeyframeV2>
  }

  export type SceneKeyframeV2 = {
    time: number,
    position: Float32Array,
    rotation: Float32Array
  }

  export type SceneActionPointV2 = {
    name: bigint,
    motion: SceneMotionV2
  }

  export type SceneAnimationEventV2 = {
    name: bigint,
    time: number
  }

  export type ScenePoseV2 = {
    name: bigint,
    transforms: Array<SceneTransformV2>
  }

  export type SceneTransformV2 = {
    name: bigint,
    translation: Float32Array,
    rotation: Float32Array
  }

  export type SceneAnimationImportV2 = {
    filename: number,
    animNames: Array<SceneImportSequenceV2>,
    flags: number
  }

  export type SceneImportSequenceV2 = {
    name: bigint
  }

}

export type V2 = V2_N.SceneFileAnimationV2;

export type V0_U = V0 | V1 | V2;
export type V1_U = V1 | V2;
export type V2_U = V2;
