export namespace V0_N {
  export type ModelFileCollisionV0 = {
    meshes: Array<ModelCollisionMeshV0>,
    clouds: Array<ModelCollisionCloudV0>,
    cubes: Array<ModelCollisionCubeV0>,
    spheres: Array<ModelCollisionSphereV0>,
    surfaces: Array<ModelCollisionSurfaceV0>
  }

  export type ModelCollisionMeshV0 = {
    animationSequence: bigint,
    vertices: Array<Float32Array>,
    indices: Uint16Array,
    surfaces: Uint8Array
  }

  export type ModelCollisionCloudV0 = {
    animationSequence: bigint,
    points: Array<Float32Array>,
    surface: number
  }

  export type ModelCollisionCubeV0 = {
    transform: Array<Float32Array>,
    surface: number
  }

  export type ModelCollisionSphereV0 = {
    radius: number,
    position: Float32Array,
    surface: number
  }

  export type ModelCollisionSurfaceV0 = {
    tokens: BigUint64Array
  }

}

export type V0 = V0_N.ModelFileCollisionV0;

export namespace V1_N {
  export type ModelFileCollisionV1 = {
    meshes: Array<ModelCollisionMeshV1>,
    clouds: Array<ModelCollisionCloudV1>,
    cubes: Array<ModelCollisionCubeV1>,
    spheres: Array<ModelCollisionSphereV1>,
    surfaces: Array<ModelCollisionSurfaceV1>
  }

  export type ModelCollisionMeshV1 = {
    animationSequences: BigUint64Array,
    vertices: Array<Float32Array>,
    indices: Uint16Array,
    surfaces: Uint8Array
  }

  export type ModelCollisionCloudV1 = {
    animationSequence: bigint,
    points: Array<Float32Array>,
    surface: number
  }

  export type ModelCollisionCubeV1 = {
    transform: Array<Float32Array>,
    surface: number
  }

  export type ModelCollisionSphereV1 = {
    radius: number,
    position: Float32Array,
    surface: number
  }

  export type ModelCollisionSurfaceV1 = {
    tokens: BigUint64Array
  }

}

export type V1 = V1_N.ModelFileCollisionV1;

export namespace V2_N {
  export type ModelFileCollisionV8 = {
    meshes: Array<ModelCollisionMeshV8>,
    clouds: Array<ModelCollisionCloudV8>,
    cubes: Array<ModelCollisionCubeV8>,
    spheres: Array<ModelCollisionSphereV8>,
    capsules: Array<ModelCollisionCapsuleV8>,
    surfaces: Array<ModelCollisionSurfaceV8>
  }

  export type ModelCollisionMeshV8 = {
    animationSequences: BigUint64Array,
    vertices: Array<Float32Array>,
    indices: Uint16Array,
    surfaces: Uint8Array
  }

  export type ModelCollisionCloudV8 = {
    animationSequence: bigint,
    points: Array<Float32Array>,
    surface: number
  }

  export type ModelCollisionCubeV8 = {
    transform: Array<Float32Array>,
    surface: number
  }

  export type ModelCollisionSphereV8 = {
    radius: number,
    position: Float32Array,
    surface: number
  }

  export type ModelCollisionCapsuleV8 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number,
    surface: number
  }

  export type ModelCollisionSurfaceV8 = {
    tokens: BigUint64Array
  }

}

export type V2 = V2_N.ModelFileCollisionV8;

export namespace V3_N {
  export type ModelFileCollisionV9 = {
    animations: Array<ModelCollisionAnimationV9>,
    meshes: Array<ModelCollisionMeshV9>,
    boxes: Array<ModelCollisionBoxV9>,
    spheres: Array<ModelCollisionSphereV9>,
    capsules: Array<ModelCollisionCapsuleV9>,
    surfaces: Array<ModelCollisionSurfaceV9>
  }

  export type ModelCollisionAnimationV9 = {
    animation: bigint,
    objects: Array<ModelCollisionAnimatedObjectV9>
  }

  export type ModelCollisionAnimatedObjectV9 = {
    shapeIndices: Uint32Array,
    keyFrames: Array<ModelCollisionKeyFrameV9>
  }

  export type ModelCollisionKeyFrameV9 = {
    time: number,
    position: Float32Array,
    orientation: Float32Array
  }

  export type ModelCollisionMeshV9 = {
    vertices: Array<Float32Array>,
    indices: Uint16Array,
    surfaces: Uint8Array
  }

  export type ModelCollisionBoxV9 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array,
    surface: number
  }

  export type ModelCollisionSphereV9 = {
    radius: number,
    position: Float32Array,
    surface: number
  }

  export type ModelCollisionCapsuleV9 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number,
    surface: number
  }

  export type ModelCollisionSurfaceV9 = {
    tokens: BigUint64Array
  }

}

export type V3 = V3_N.ModelFileCollisionV9;

export namespace V4_N {
  export type ModelFileCollisionV10 = {
    animations: Array<ModelCollisionAnimationV10>,
    meshes: Array<ModelCollisionMeshV10>,
    boxes: Array<ModelCollisionBoxV10>,
    spheres: Array<ModelCollisionSphereV10>,
    capsules: Array<ModelCollisionCapsuleV10>,
    surfaces: Array<ModelCollisionSurfaceV10>
  }

  export type ModelCollisionAnimationV10 = {
    animation: bigint,
    objects: Array<ModelCollisionAnimatedObjectV10>,
    targetPoints: Array<Float32Array>
  }

  export type ModelCollisionAnimatedObjectV10 = {
    shapeIndices: Uint32Array,
    keyFrames: Array<ModelCollisionKeyFrameV10>
  }

  export type ModelCollisionKeyFrameV10 = {
    time: number,
    position: Float32Array,
    orientation: Float32Array
  }

  export type ModelCollisionMeshV10 = {
    vertices: Array<Float32Array>,
    indices: Uint16Array,
    surfaces: Uint8Array,
    navSeedPoints: Array<Float32Array>
  }

  export type ModelCollisionBoxV10 = {
    dimensions: Float32Array,
    position: Float32Array,
    rotation: Float32Array,
    surface: number
  }

  export type ModelCollisionSphereV10 = {
    radius: number,
    position: Float32Array,
    surface: number
  }

  export type ModelCollisionCapsuleV10 = {
    p0: Float32Array,
    p1: Float32Array,
    radius: number,
    surface: number
  }

  export type ModelCollisionSurfaceV10 = {
    tokens: BigUint64Array
  }

}

export type V4 = V4_N.ModelFileCollisionV10;

export type V0_U = V0 | V1 | V2 | V3 | V4;
export type V1_U = V1 | V2 | V3 | V4;
export type V2_U = V2 | V3 | V4;
export type V3_U = V3 | V4;
export type V4_U = V4;
