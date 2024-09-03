export namespace V0_N {
  export type ModelFileCollisionV0 = {
    meshes: Array<ModelCollisionMeshV0>,
    clouds: Array<ModelCollisionCloudV0>,
    cubes: Array<ModelCollisionCubeV0>,
    spheres: Array<ModelCollisionSphereV0>,
    surfaces: Array<ModelCollisionSurfaceV0>
  }

  export type ModelCollisionMeshV0 = {
    animationSequence: number,
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionCloudV0 = {
    animationSequence: number,
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
    tokens: Array<number>
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
    animationSequences: Array<number>,
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionCloudV1 = {
    animationSequence: number,
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
    tokens: Array<number>
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
    animationSequences: Array<number>,
    vertices: Array<Array<number>>,
    indices: Array<number>,
    surfaces: Array<number>
  }

  export type ModelCollisionCloudV8 = {
    animationSequence: number,
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
    tokens: Array<number>
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
    animation: number,
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
    tokens: Array<number>
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
    animation: number,
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
    tokens: Array<number>
  }

}

export type V4 = V4_N.ModelFileCollisionV10;

export type V0_U = V0 | V1 | V2 | V3 | V4;
export type V1_U = V1 | V2 | V3 | V4;
export type V2_U = V2 | V3 | V4;
export type V3_U = V3 | V4;
export type V4_U = V4;
