export namespace V0 {
  export type ModelFileCollisionV0 = {
    meshes: Array<ModelCollisionMeshV0>,
    clouds: Array<ModelCollisionCloudV0>,
    cubes: Array<ModelCollisionCubeV0>,
    spheres: Array<ModelCollisionSphereV0>,
    surfaces: Array<ModelCollisionSurfaceV0>
  }

  export type ModelCollisionMeshV0 = {
    animationSequence: BigInt,
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionCloudV0 = {
    animationSequence: BigInt,
    points: Array<Array<number>>,
    surface: number
  }

  export type ModelCollisionCubeV0 = {
    transform: Array<Array<number>>,
    surface: number
  }

  export type ModelCollisionSphereV0 = {
    radius: number,
    position: Array<number>,
    surface: number
  }

  export type ModelCollisionSurfaceV0 = {
    tokens: Array<BigInt>
  }

}

export namespace V1 {
  export type ModelFileCollisionV1 = {
    meshes: Array<ModelCollisionMeshV1>,
    clouds: Array<ModelCollisionCloudV1>,
    cubes: Array<ModelCollisionCubeV1>,
    spheres: Array<ModelCollisionSphereV1>,
    surfaces: Array<ModelCollisionSurfaceV1>
  }

  export type ModelCollisionMeshV1 = {
    animationSequences: Array<BigInt>,
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionCloudV1 = {
    animationSequence: BigInt,
    points: Array<Array<number>>,
    surface: number
  }

  export type ModelCollisionCubeV1 = {
    transform: Array<Array<number>>,
    surface: number
  }

  export type ModelCollisionSphereV1 = {
    radius: number,
    position: Array<number>,
    surface: number
  }

  export type ModelCollisionSurfaceV1 = {
    tokens: Array<BigInt>
  }

}

export namespace V2 {
  export type ModelFileCollisionV8 = {
    meshes: Array<ModelCollisionMeshV8>,
    clouds: Array<ModelCollisionCloudV8>,
    cubes: Array<ModelCollisionCubeV8>,
    spheres: Array<ModelCollisionSphereV8>,
    capsules: Array<ModelCollisionCapsuleV8>,
    surfaces: Array<ModelCollisionSurfaceV8>
  }

  export type ModelCollisionMeshV8 = {
    animationSequences: Array<BigInt>,
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionCloudV8 = {
    animationSequence: BigInt,
    points: Array<Array<number>>,
    surface: number
  }

  export type ModelCollisionCubeV8 = {
    transform: Array<Array<number>>,
    surface: number
  }

  export type ModelCollisionSphereV8 = {
    radius: number,
    position: Array<number>,
    surface: number
  }

  export type ModelCollisionCapsuleV8 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number,
    surface: number
  }

  export type ModelCollisionSurfaceV8 = {
    tokens: Array<BigInt>
  }

}

export namespace V3 {
  export type ModelFileCollisionV9 = {
    animations: Array<ModelCollisionAnimationV9>,
    meshes: Array<ModelCollisionMeshV9>,
    boxes: Array<ModelCollisionBoxV9>,
    spheres: Array<ModelCollisionSphereV9>,
    capsules: Array<ModelCollisionCapsuleV9>,
    surfaces: Array<ModelCollisionSurfaceV9>
  }

  export type ModelCollisionAnimationV9 = {
    animation: BigInt,
    objects: Array<ModelCollisionAnimatedObjectV9>
  }

  export type ModelCollisionAnimatedObjectV9 = {
    shapeIndices: Array<number>,
    keyFrames: Array<ModelCollisionKeyFrameV9>
  }

  export type ModelCollisionKeyFrameV9 = {
    time: number,
    position: Array<number>,
    orientation: Array<number>
  }

  export type ModelCollisionMeshV9 = {
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionBoxV9 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    surface: number
  }

  export type ModelCollisionSphereV9 = {
    radius: number,
    position: Array<number>,
    surface: number
  }

  export type ModelCollisionCapsuleV9 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number,
    surface: number
  }

  export type ModelCollisionSurfaceV9 = {
    tokens: Array<BigInt>
  }

}

export namespace V4 {
  export type ModelFileCollisionV10 = {
    animations: Array<ModelCollisionAnimationV10>,
    meshes: Array<ModelCollisionMeshV10>,
    boxes: Array<ModelCollisionBoxV10>,
    spheres: Array<ModelCollisionSphereV10>,
    capsules: Array<ModelCollisionCapsuleV10>,
    surfaces: Array<ModelCollisionSurfaceV10>
  }

  export type ModelCollisionAnimationV10 = {
    animation: BigInt,
    objects: Array<ModelCollisionAnimatedObjectV10>,
    targetPoints: Array<Array<number>>
  }

  export type ModelCollisionAnimatedObjectV10 = {
    shapeIndices: Array<number>,
    keyFrames: Array<ModelCollisionKeyFrameV10>
  }

  export type ModelCollisionKeyFrameV10 = {
    time: number,
    position: Array<number>,
    orientation: Array<number>
  }

  export type ModelCollisionMeshV10 = {
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>,
    navSeedPoints: Array<Array<number>>
  }

  export type ModelCollisionBoxV10 = {
    dimensions: Array<number>,
    position: Array<number>,
    rotation: Array<number>,
    surface: number
  }

  export type ModelCollisionSphereV10 = {
    radius: number,
    position: Array<number>,
    surface: number
  }

  export type ModelCollisionCapsuleV10 = {
    p0: Array<number>,
    p1: Array<number>,
    radius: number,
    surface: number
  }

  export type ModelCollisionSurfaceV10 = {
    tokens: Array<BigInt>
  }

}

