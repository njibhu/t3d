import { Uint64, Uint32, Filename, Uint8, DynArray, FixedArray, Float32, Uint16, RefArray, Pointer, CString } from "../src/types";

module.exports = [
  {
    chunkName: "MODL",
    name: "ModelFileDataV0",
    version: 0,
    definitions: {
      ModelMaterialDataV0: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV0"),
        constants: DynArray("ModelConstantDataV0")
      },
      ModelTextureDataV0: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV0: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV0: {
        mesh: "PackGrannyMeshType"
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV0: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelModelDataV0: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV0"),
        InitialPlacement: "ModelTransformDataV0",
        MeshBindings: DynArray("ModelMeshBindingDataV0")
      },
      ModelSkeletonDataV0: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV0"),
        LODType: Uint32
      },
      ModelBoneDataV0: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV0",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV0: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV0: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV0: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV0")
      },
      ModelFloatPropertyDataV0: {
        token: Uint64,
        value: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV0"),
      meshes: RefArray("ModelMeshDataV0"),
      animations: RefArray("ModelAnimationDataV0"),
      model: Pointer("ModelModelDataV0"),
      properties: Pointer("ModelPropertyDataV0")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV1",
    version: 1,
    definitions: {
      ModelMaterialDataV1: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV1"),
        constants: DynArray("ModelConstantDataV1")
      },
      ModelTextureDataV1: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV1: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV1: {
        mesh: "PackGrannyMeshType"
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV1: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelModelDataV1: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV1"),
        InitialPlacement: "ModelTransformDataV1",
        MeshBindings: DynArray("ModelMeshBindingDataV1")
      },
      ModelSkeletonDataV1: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV1"),
        LODType: Uint32
      },
      ModelBoneDataV1: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV1",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV1: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV1: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV1: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV1")
      },
      ModelFloatPropertyDataV1: {
        token: Uint64,
        value: Float32
      },
      ModelChunkCollisionDataV1: {
        meshes: DynArray("ModelChunkCollisionMeshV1"),
        clouds: DynArray("ModelChunkCollisionCloudV1"),
        surfaces: DynArray("ModelChunkCollisionSurfaceV1")
      },
      ModelChunkCollisionMeshV1: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelChunkCollisionCloudV1: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelChunkCollisionSurfaceV1: {
        tokens: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV1"),
      meshes: RefArray("ModelMeshDataV1"),
      animations: RefArray("ModelAnimationDataV1"),
      model: Pointer("ModelModelDataV1"),
      properties: Pointer("ModelPropertyDataV1"),
      collisionData: Pointer("ModelChunkCollisionDataV1")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV2",
    version: 2,
    definitions: {
      ModelMaterialDataV2: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV2"),
        constants: DynArray("ModelConstantDataV2")
      },
      ModelTextureDataV2: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV2: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV2: {
        mesh: "PackGrannyMeshType"
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV2: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelModelDataV2: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV2"),
        InitialPlacement: "ModelTransformDataV2",
        MeshBindings: DynArray("ModelMeshBindingDataV2")
      },
      ModelSkeletonDataV2: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV2"),
        LODType: Uint32
      },
      ModelBoneDataV2: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV2",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV2: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV2: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV2: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV2")
      },
      ModelFloatPropertyDataV2: {
        token: Uint64,
        value: Float32
      },
      ModelCollisionDataV2: {
        meshes: DynArray("ModelCollisionMeshV2"),
        clouds: DynArray("ModelCollisionCloudV2"),
        surfaces: DynArray("ModelCollisionSurfaceV2")
      },
      ModelCollisionMeshV2: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelCollisionCloudV2: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelCollisionSurfaceV2: {
        tokens: DynArray(Uint64)
      },
      ModelCloudDataV2: {
        clouds: DynArray("ModelParticleCloudV2"),
        emitters: DynArray("ModelParticleEmitterV2"),
        obstacles: DynArray("ModelParticleObstacleV2")
      },
      ModelParticleCloudV2: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flipbook: DynArray("ModelParticleFlipbookV2"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV2: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV2: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8
      },
      ModelParticleObstacleV2: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV2"),
      meshes: RefArray("ModelMeshDataV2"),
      animations: RefArray("ModelAnimationDataV2"),
      model: Pointer("ModelModelDataV2"),
      properties: Pointer("ModelPropertyDataV2"),
      collisionData: Pointer("ModelCollisionDataV2"),
      cloudData: Pointer("ModelCloudDataV2")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV3",
    version: 3,
    definitions: {
      ModelMaterialDataV3: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV3"),
        constants: DynArray("ModelConstantDataV3")
      },
      ModelTextureDataV3: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV3: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV3: {
        mesh: "PackGrannyMeshType"
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV3: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0"
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelModelDataV3: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV3"),
        InitialPlacement: "ModelTransformDataV3",
        MeshBindings: DynArray("ModelMeshBindingDataV3")
      },
      ModelSkeletonDataV3: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV3"),
        LODType: Uint32
      },
      ModelBoneDataV3: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV3",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV3: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV3: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV3: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV3")
      },
      ModelFloatPropertyDataV3: {
        token: Uint64,
        value: Float32
      },
      ModelCollisionDataV3: {
        meshes: DynArray("ModelCollisionMeshV3"),
        clouds: DynArray("ModelCollisionCloudV3"),
        cubes: DynArray("ModelCollisionCubeV3"),
        spheres: DynArray("ModelCollisionSphereV3"),
        surfaces: DynArray("ModelCollisionSurfaceV3")
      },
      ModelCollisionMeshV3: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelCollisionCloudV3: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelCollisionCubeV3: {
        transform: FixedArray(FixedArray(Float32, 4), 3),
        surface: Uint8
      },
      ModelCollisionSphereV3: {
        radius: Float32,
        position: FixedArray(Float32, 3),
        surface: Uint8
      },
      ModelCollisionSurfaceV3: {
        tokens: DynArray(Uint64)
      },
      ModelCloudDataV3: {
        clouds: DynArray("ModelParticleCloudV3"),
        emitters: DynArray("ModelParticleEmitterV3"),
        obstacles: DynArray("ModelParticleObstacleV3")
      },
      ModelParticleCloudV3: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flipbook: DynArray("ModelParticleFlipbookV3"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV3: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV3: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8
      },
      ModelParticleObstacleV3: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV3"),
      meshes: RefArray("ModelMeshDataV3"),
      animations: RefArray("ModelAnimationDataV3"),
      model: Pointer("ModelModelDataV3"),
      properties: Pointer("ModelPropertyDataV3"),
      collisionData: Pointer("ModelCollisionDataV3"),
      cloudData: Pointer("ModelCloudDataV3")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV4",
    version: 4,
    definitions: {
      ModelMaterialDataV4: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV4"),
        constants: DynArray("ModelConstantDataV4")
      },
      ModelTextureDataV4: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV4: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV4: {
        mesh: "PackGrannyMeshType",
        visTokens: DynArray(Uint64)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV4: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0",
        moveSpeed: Float32,
        visTrackData: DynArray("ModelVisTrackDataV4")
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelVisTrackDataV4: {
        token: Uint64,
        keys: DynArray(Float32)
      },
      ModelModelDataV4: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV4"),
        InitialPlacement: "ModelTransformDataV4",
        MeshBindings: DynArray("ModelMeshBindingDataV4")
      },
      ModelSkeletonDataV4: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV4"),
        LODType: Uint32
      },
      ModelBoneDataV4: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV4",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV4: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV4: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV4: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV4")
      },
      ModelFloatPropertyDataV4: {
        token: Uint64,
        value: Float32
      },
      ModelCollisionDataV4: {
        meshes: DynArray("ModelCollisionMeshV4"),
        clouds: DynArray("ModelCollisionCloudV4"),
        cubes: DynArray("ModelCollisionCubeV4"),
        spheres: DynArray("ModelCollisionSphereV4"),
        surfaces: DynArray("ModelCollisionSurfaceV4")
      },
      ModelCollisionMeshV4: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelCollisionCloudV4: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelCollisionCubeV4: {
        transform: FixedArray(FixedArray(Float32, 4), 3),
        surface: Uint8
      },
      ModelCollisionSphereV4: {
        radius: Float32,
        position: FixedArray(Float32, 3),
        surface: Uint8
      },
      ModelCollisionSurfaceV4: {
        tokens: DynArray(Uint64)
      },
      ModelCloudDataV4: {
        clouds: DynArray("ModelParticleCloudV4"),
        emitters: DynArray("ModelParticleEmitterV4"),
        obstacles: DynArray("ModelParticleObstacleV4")
      },
      ModelParticleCloudV4: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flipbook: DynArray("ModelParticleFlipbookV4"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV4: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV4: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8
      },
      ModelParticleObstacleV4: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV4"),
      meshes: RefArray("ModelMeshDataV4"),
      animations: RefArray("ModelAnimationDataV4"),
      model: Pointer("ModelModelDataV4"),
      properties: Pointer("ModelPropertyDataV4"),
      collisionData: Pointer("ModelCollisionDataV4"),
      cloudData: Pointer("ModelCloudDataV4")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV5",
    version: 5,
    definitions: {
      ModelMaterialDataV5: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV5"),
        constants: DynArray("ModelConstantDataV5")
      },
      ModelTextureDataV5: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV5: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV5: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visTokens: DynArray(Uint64)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV5: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0",
        moveSpeed: Float32,
        visTrackData: DynArray("ModelVisTrackDataV5")
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelVisTrackDataV5: {
        token: Uint64,
        keys: DynArray(Float32)
      },
      ModelModelDataV5: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV5"),
        InitialPlacement: "ModelTransformDataV5",
        MeshBindings: DynArray("ModelMeshBindingDataV5")
      },
      ModelSkeletonDataV5: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV5"),
        LODType: Uint32
      },
      ModelBoneDataV5: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV5",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV5: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV5: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV5: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV5")
      },
      ModelFloatPropertyDataV5: {
        token: Uint64,
        value: Float32
      },
      ModelCollisionDataV5: {
        meshes: DynArray("ModelCollisionMeshV5"),
        clouds: DynArray("ModelCollisionCloudV5"),
        cubes: DynArray("ModelCollisionCubeV5"),
        spheres: DynArray("ModelCollisionSphereV5"),
        surfaces: DynArray("ModelCollisionSurfaceV5")
      },
      ModelCollisionMeshV5: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelCollisionCloudV5: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelCollisionCubeV5: {
        transform: FixedArray(FixedArray(Float32, 4), 3),
        surface: Uint8
      },
      ModelCollisionSphereV5: {
        radius: Float32,
        position: FixedArray(Float32, 3),
        surface: Uint8
      },
      ModelCollisionSurfaceV5: {
        tokens: DynArray(Uint64)
      },
      ModelCloudDataV5: {
        clouds: DynArray("ModelParticleCloudV5"),
        emitters: DynArray("ModelParticleEmitterV5"),
        obstacles: DynArray("ModelParticleObstacleV5")
      },
      ModelParticleCloudV5: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        flipbook: DynArray("ModelParticleFlipbookV5"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV5: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV5: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8
      },
      ModelParticleObstacleV5: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV5"),
      meshes: RefArray("ModelMeshDataV5"),
      animations: RefArray("ModelAnimationDataV5"),
      model: Pointer("ModelModelDataV5"),
      properties: Pointer("ModelPropertyDataV5"),
      collisionData: Pointer("ModelCollisionDataV5"),
      cloudData: Pointer("ModelCloudDataV5")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV6",
    version: 6,
    definitions: {
      ModelMaterialDataV6: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV6"),
        constants: DynArray("ModelConstantDataV6")
      },
      ModelTextureDataV6: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV6: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV6: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV6: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0",
        moveSpeed: Float32,
        visTrackData: DynArray("ModelVisTrackDataV6")
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelVisTrackDataV6: {
        boneIndex: Uint32,
        keys: DynArray(Float32)
      },
      ModelAnimationImportDataV6: {
        filename: Filename(),
        sequenceTokens: DynArray(Uint64)
      },
      ModelModelDataV6: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV6"),
        InitialPlacement: "ModelTransformDataV6",
        MeshBindings: DynArray("ModelMeshBindingDataV6")
      },
      ModelSkeletonDataV6: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV6"),
        LODType: Uint32
      },
      ModelBoneDataV6: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV6",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV6: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV6: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV6: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV6")
      },
      ModelFloatPropertyDataV6: {
        token: Uint64,
        value: Float32
      },
      ModelCollisionDataV6: {
        meshes: DynArray("ModelCollisionMeshV6"),
        clouds: DynArray("ModelCollisionCloudV6"),
        cubes: DynArray("ModelCollisionCubeV6"),
        spheres: DynArray("ModelCollisionSphereV6"),
        surfaces: DynArray("ModelCollisionSurfaceV6")
      },
      ModelCollisionMeshV6: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelCollisionCloudV6: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelCollisionCubeV6: {
        transform: FixedArray(FixedArray(Float32, 4), 3),
        surface: Uint8
      },
      ModelCollisionSphereV6: {
        radius: Float32,
        position: FixedArray(Float32, 3),
        surface: Uint8
      },
      ModelCollisionSurfaceV6: {
        tokens: DynArray(Uint64)
      },
      ModelCloudDataV6: {
        clouds: DynArray("ModelParticleCloudV6"),
        emitters: DynArray("ModelParticleEmitterV6"),
        obstacles: DynArray("ModelParticleObstacleV6")
      },
      ModelParticleCloudV6: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        flipbook: DynArray("ModelParticleFlipbookV6"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV6: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV6: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        visBoneIndex: Uint32
      },
      ModelParticleObstacleV6: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV6"),
      meshes: RefArray("ModelMeshDataV6"),
      animations: RefArray("ModelAnimationDataV6"),
      animationFallbacks: DynArray(Uint64),
      animationImports: DynArray("ModelAnimationImportDataV6"),
      model: Pointer("ModelModelDataV6"),
      properties: Pointer("ModelPropertyDataV6"),
      collisionData: Pointer("ModelCollisionDataV6"),
      cloudData: Pointer("ModelCloudDataV6")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV7",
    version: 7,
    definitions: {
      ModelMaterialDataV7: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV7"),
        constants: DynArray("ModelConstantDataV7")
      },
      ModelTextureDataV7: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64
      },
      ModelConstantDataV7: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV7: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelAnimationDataV7: {
        token: Uint64,
        animation: "PackGrannyAnimationTypeV0",
        moveSpeed: Float32,
        visTrackData: DynArray("ModelVisTrackDataV7")
      },
      PackGrannyAnimationTypeV0: {
        animation: DynArray(Uint8)
      },
      ModelVisTrackDataV7: {
        boneIndex: Uint32,
        keys: DynArray(Float32)
      },
      ModelAnimationImportDataV7: {
        filename: Filename(),
        sequenceTokens: DynArray(Uint64)
      },
      ModelModelDataV7: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV7"),
        InitialPlacement: "ModelTransformDataV7",
        MeshBindings: DynArray("ModelMeshBindingDataV7"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV7: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV7"),
        LODType: Uint32
      },
      ModelBoneDataV7: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV7",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV7: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV7: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV7: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV7")
      },
      ModelFloatPropertyDataV7: {
        token: Uint64,
        value: Float32
      },
      ModelCollisionDataV7: {
        meshes: DynArray("ModelCollisionMeshV7"),
        clouds: DynArray("ModelCollisionCloudV7"),
        cubes: DynArray("ModelCollisionCubeV7"),
        spheres: DynArray("ModelCollisionSphereV7"),
        surfaces: DynArray("ModelCollisionSurfaceV7")
      },
      ModelCollisionMeshV7: {
        animationSequence: Uint64,
        vertices: DynArray(FixedArray(Float32, 3)),
        indices: DynArray(Uint16),
        surfaces: DynArray(Uint8)
      },
      ModelCollisionCloudV7: {
        animationSequence: Uint64,
        points: DynArray(FixedArray(Float32, 3)),
        surface: Uint8
      },
      ModelCollisionCubeV7: {
        transform: FixedArray(FixedArray(Float32, 4), 3),
        surface: Uint8
      },
      ModelCollisionSphereV7: {
        radius: Float32,
        position: FixedArray(Float32, 3),
        surface: Uint8
      },
      ModelCollisionSurfaceV7: {
        tokens: DynArray(Uint64)
      },
      ModelCloudDataV7: {
        clouds: DynArray("ModelParticleCloudV7"),
        emitters: DynArray("ModelParticleEmitterV7"),
        obstacles: DynArray("ModelParticleObstacleV7")
      },
      ModelParticleCloudV7: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        flipbook: DynArray("ModelParticleFlipbookV7"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV7: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV7: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        visBoneIndex: Uint32
      },
      ModelParticleObstacleV7: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV7"),
      meshes: RefArray("ModelMeshDataV7"),
      animations: RefArray("ModelAnimationDataV7"),
      animationFallbacks: DynArray(Uint64),
      animationImports: DynArray("ModelAnimationImportDataV7"),
      model: Pointer("ModelModelDataV7"),
      properties: Pointer("ModelPropertyDataV7"),
      collisionData: Pointer("ModelCollisionDataV7"),
      cloudData: Pointer("ModelCloudDataV7")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV8",
    version: 8,
    definitions: {
      ModelMaterialDataV8: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV8"),
        constants: DynArray("ModelConstantDataV8")
      },
      ModelTextureDataV8: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV8: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV8: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV8: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV8"),
        InitialPlacement: "ModelTransformDataV8",
        MeshBindings: DynArray("ModelMeshBindingDataV8"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV8: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV8"),
        LODType: Uint32
      },
      ModelBoneDataV8: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV8",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV8: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV8: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV8: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV8")
      },
      ModelFloatPropertyDataV8: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV8: {
        clouds: DynArray("ModelParticleCloudV8"),
        emitters: DynArray("ModelParticleEmitterV8"),
        obstacles: DynArray("ModelParticleObstacleV8")
      },
      ModelParticleCloudV8: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        flipbook: DynArray("ModelParticleFlipbookV8"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV8: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV8: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        visBoneIndex: Uint32
      },
      ModelParticleObstacleV8: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV8"),
      meshes: RefArray("ModelMeshDataV8"),
      model: Pointer("ModelModelDataV8"),
      properties: Pointer("ModelPropertyDataV8"),
      cloudData: Pointer("ModelCloudDataV8")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV9",
    version: 9,
    definitions: {
      ModelMaterialDataV9: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV9"),
        constants: DynArray("ModelConstantDataV9")
      },
      ModelTextureDataV9: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV9: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV9: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV9: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV9"),
        InitialPlacement: "ModelTransformDataV9",
        MeshBindings: DynArray("ModelMeshBindingDataV9"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV9: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV9"),
        LODType: Uint32
      },
      ModelBoneDataV9: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV9",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV9: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV9: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV9: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV9")
      },
      ModelFloatPropertyDataV9: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV9: {
        clouds: DynArray("ModelParticleCloudV9"),
        emitters: DynArray("ModelParticleEmitterV9"),
        obstacles: DynArray("ModelParticleObstacleV9")
      },
      ModelParticleCloudV9: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        flipbook: DynArray("ModelParticleFlipbookV9"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV9: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV9: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        visBoneIndex: Uint32
      },
      ModelParticleObstacleV9: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV9"),
      meshes: RefArray("ModelMeshDataV9"),
      model: Pointer("ModelModelDataV9"),
      properties: Pointer("ModelPropertyDataV9"),
      cloudData: Pointer("ModelCloudDataV9")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV10",
    version: 10,
    definitions: {
      ModelMaterialDataV10: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV10"),
        constants: DynArray("ModelConstantDataV10")
      },
      ModelTextureDataV10: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV10: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV10: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV10: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV10"),
        InitialPlacement: "ModelTransformDataV10",
        MeshBindings: DynArray("ModelMeshBindingDataV10"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV10: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV10"),
        LODType: Uint32
      },
      ModelBoneDataV10: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV10",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV10: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV10: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV10: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV10")
      },
      ModelFloatPropertyDataV10: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV10: {
        clouds: DynArray("ModelParticleCloudV10"),
        emitters: DynArray("ModelParticleEmitterV10"),
        obstacles: DynArray("ModelParticleObstacleV10")
      },
      ModelParticleCloudV10: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        flipbook: DynArray("ModelParticleFlipbookV10"),
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        opacityCurveType: Uint8,
        opacityKeys: DynArray(FixedArray(Float32, 2)),
        scaleCurveType: Uint8,
        scaleKeys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV10: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleEmitterV10: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        flags: Uint32,
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        visBoneIndex: Uint32
      },
      ModelParticleObstacleV10: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV10: {
        streaks: DynArray("ModelStreakV10"),
        anchors: DynArray("ModelStreakAnchorV10")
      },
      ModelStreakV10: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV10: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV10"),
      meshes: RefArray("ModelMeshDataV10"),
      model: Pointer("ModelModelDataV10"),
      properties: Pointer("ModelPropertyDataV10"),
      cloudData: Pointer("ModelCloudDataV10"),
      streakData: Pointer("ModelStreakDataV10")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV11",
    version: 11,
    definitions: {
      ModelMaterialDataV11: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV11"),
        constants: DynArray("ModelConstantDataV11")
      },
      ModelTextureDataV11: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV11: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV11: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV11: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV11"),
        InitialPlacement: "ModelTransformDataV11",
        MeshBindings: DynArray("ModelMeshBindingDataV11"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV11: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV11"),
        LODType: Uint32
      },
      ModelBoneDataV11: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV11",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV11: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV11: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV11: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV11")
      },
      ModelFloatPropertyDataV11: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV11: {
        clouds: DynArray("ModelParticleCloudV11"),
        emitters: DynArray("ModelParticleEmitterV11"),
        obstacles: DynArray("ModelParticleObstacleV11")
      },
      ModelParticleCloudV11: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV11: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV11"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV11"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV11"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV11: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV11: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV11: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV11: {
        streaks: DynArray("ModelStreakV11"),
        anchors: DynArray("ModelStreakAnchorV11")
      },
      ModelStreakV11: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV11: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV11"),
      meshes: RefArray("ModelMeshDataV11"),
      model: Pointer("ModelModelDataV11"),
      properties: Pointer("ModelPropertyDataV11"),
      cloudData: Pointer("ModelCloudDataV11"),
      streakData: Pointer("ModelStreakDataV11")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV12",
    version: 12,
    definitions: {
      ModelMaterialDataV12: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV12"),
        constants: DynArray("ModelConstantDataV12")
      },
      ModelTextureDataV12: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV12: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV12: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV12: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV12"),
        InitialPlacement: "ModelTransformDataV12",
        MeshBindings: DynArray("ModelMeshBindingDataV12"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV12: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV12"),
        LODType: Uint32
      },
      ModelBoneDataV12: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV12",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV12: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV12: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV12: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV12")
      },
      ModelFloatPropertyDataV12: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV12: {
        clouds: DynArray("ModelParticleCloudV12"),
        emitters: DynArray("ModelParticleEmitterV12"),
        obstacles: DynArray("ModelParticleObstacleV12")
      },
      ModelParticleCloudV12: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV12: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV12"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV12"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV12"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV12: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV12: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV12: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV12: {
        streaks: DynArray("ModelStreakV12"),
        anchors: DynArray("ModelStreakAnchorV12")
      },
      ModelStreakV12: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV12: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV12"),
      meshes: RefArray("ModelMeshDataV12"),
      model: Pointer("ModelModelDataV12"),
      properties: Pointer("ModelPropertyDataV12"),
      cloudData: Pointer("ModelCloudDataV12"),
      streakData: Pointer("ModelStreakDataV12")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV13",
    version: 13,
    definitions: {
      ModelMaterialDataV13: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV13"),
        constants: DynArray("ModelConstantDataV13")
      },
      ModelTextureDataV13: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV13: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV13: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV13: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV13"),
        InitialPlacement: "ModelTransformDataV13",
        MeshBindings: DynArray("ModelMeshBindingDataV13"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV13: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV13"),
        LODType: Uint32
      },
      ModelBoneDataV13: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV13",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV13: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV13: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV13: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV13")
      },
      ModelFloatPropertyDataV13: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV13: {
        clouds: DynArray("ModelParticleCloudV13"),
        emitters: DynArray("ModelParticleEmitterV13"),
        obstacles: DynArray("ModelParticleObstacleV13")
      },
      ModelParticleCloudV13: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV13: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV13"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV13"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV13"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV13: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV13: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV13: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV13: {
        streaks: DynArray("ModelStreakV13"),
        anchors: DynArray("ModelStreakAnchorV13")
      },
      ModelStreakV13: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV13: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV13"),
      meshes: RefArray("ModelMeshDataV13"),
      model: Pointer("ModelModelDataV13"),
      properties: Pointer("ModelPropertyDataV13"),
      cloudData: Pointer("ModelCloudDataV13"),
      streakData: Pointer("ModelStreakDataV13")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV14",
    version: 14,
    definitions: {
      ModelMaterialDataV14: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV14"),
        constants: DynArray("ModelConstantDataV14")
      },
      ModelTextureDataV14: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV14: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV14: {
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        actionOffsetNames: DynArray(Uint64),
        actionOffsets: DynArray(FixedArray(Float32, 3))
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV14: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV14"),
        InitialPlacement: "ModelTransformDataV14",
        MeshBindings: DynArray("ModelMeshBindingDataV14"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV14: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV14"),
        LODType: Uint32
      },
      ModelBoneDataV14: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV14",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV14: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV14: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV14: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV14")
      },
      ModelFloatPropertyDataV14: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV14: {
        clouds: DynArray("ModelParticleCloudV14"),
        emitters: DynArray("ModelParticleEmitterV14"),
        obstacles: DynArray("ModelParticleObstacleV14")
      },
      ModelParticleCloudV14: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV14: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV14"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV14"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV14"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV14: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV14: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV14: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV14: {
        streaks: DynArray("ModelStreakV14"),
        anchors: DynArray("ModelStreakAnchorV14")
      },
      ModelStreakV14: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV14: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV14"),
      meshes: RefArray("ModelMeshDataV14"),
      model: Pointer("ModelModelDataV14"),
      properties: Pointer("ModelPropertyDataV14"),
      cloudData: Pointer("ModelCloudDataV14"),
      streakData: Pointer("ModelStreakDataV14")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV15",
    version: 15,
    definitions: {
      ModelMaterialDataV15: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV15"),
        constants: DynArray("ModelConstantDataV15")
      },
      ModelTextureDataV15: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV15: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV15: {
        lods: DynArray("ModelMeshLodDataV15"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV15: {
        indices: DynArray(Uint16)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV15: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV15"),
        InitialPlacement: "ModelTransformDataV15",
        MeshBindings: DynArray("ModelMeshBindingDataV15"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV15: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV15"),
        LODType: Uint32
      },
      ModelBoneDataV15: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV15",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV15: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV15: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV15: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV15")
      },
      ModelFloatPropertyDataV15: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV15: {
        clouds: DynArray("ModelParticleCloudV15"),
        emitters: DynArray("ModelParticleEmitterV15"),
        obstacles: DynArray("ModelParticleObstacleV15")
      },
      ModelParticleCloudV15: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV15: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV15"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV15"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV15"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV15: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV15: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV15: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV15: {
        streaks: DynArray("ModelStreakV15"),
        anchors: DynArray("ModelStreakAnchorV15")
      },
      ModelStreakV15: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV15: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV15: {
        effectLights: DynArray("ModelEffectLightV15")
      },
      ModelEffectLightV15: {
        bone: Uint64,
        color: FixedArray(Uint8, 4),
        ranges: FixedArray(Float32, 2)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV15"),
      meshes: RefArray("ModelMeshDataV15"),
      model: Pointer("ModelModelDataV15"),
      properties: Pointer("ModelPropertyDataV15"),
      cloudData: Pointer("ModelCloudDataV15"),
      streakData: Pointer("ModelStreakDataV15"),
      lightData: Pointer("ModelLightDataV15"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3))
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV16",
    version: 16,
    definitions: {
      ModelMaterialDataV16: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV16"),
        constants: DynArray("ModelConstantDataV16")
      },
      ModelTextureDataV16: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV16: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV16: {
        lods: DynArray("ModelMeshLodDataV16"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV16: {
        indices: DynArray(Uint16)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV16: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV16"),
        InitialPlacement: "ModelTransformDataV16",
        MeshBindings: DynArray("ModelMeshBindingDataV16"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV16: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV16"),
        LODType: Uint32
      },
      ModelBoneDataV16: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV16",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV16: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV16: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV16: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV16")
      },
      ModelFloatPropertyDataV16: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV16: {
        clouds: DynArray("ModelParticleCloudV16"),
        emitters: DynArray("ModelParticleEmitterV16"),
        obstacles: DynArray("ModelParticleObstacleV16")
      },
      ModelParticleCloudV16: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV16: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV16"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV16"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV16"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV16: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV16: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV16: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV16: {
        streaks: DynArray("ModelStreakV16"),
        anchors: DynArray("ModelStreakAnchorV16")
      },
      ModelStreakV16: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV16: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV16: {
        effectLights: DynArray("ModelEffectLightV16")
      },
      ModelEffectLightV16: {
        bone: Uint64,
        color: FixedArray(Uint8, 4),
        ranges: FixedArray(Float32, 2)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV16"),
      meshes: RefArray("ModelMeshDataV16"),
      model: Pointer("ModelModelDataV16"),
      properties: Pointer("ModelPropertyDataV16"),
      cloudData: Pointer("ModelCloudDataV16"),
      streakData: Pointer("ModelStreakDataV16"),
      lightData: Pointer("ModelLightDataV16"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2)
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV17",
    version: 17,
    definitions: {
      ModelMaterialDataV17: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV17"),
        constants: DynArray("ModelConstantDataV17")
      },
      ModelTextureDataV17: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV17: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV17: {
        lods: DynArray("ModelMeshLodDataV17"),
        morphTargets: DynArray("ModelMeshMorphTargetV17"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV17: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV17: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3))
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV17: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV17"),
        InitialPlacement: "ModelTransformDataV17",
        MeshBindings: DynArray("ModelMeshBindingDataV17"),
        boneFlags: DynArray(Uint32)
      },
      ModelSkeletonDataV17: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV17"),
        LODType: Uint32
      },
      ModelBoneDataV17: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV17",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV17: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV17: {
        Mesh: Pointer(Uint8)
      },
      ModelPropertyDataV17: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV17")
      },
      ModelFloatPropertyDataV17: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV17: {
        clouds: DynArray("ModelParticleCloudV17"),
        emitters: DynArray("ModelParticleEmitterV17"),
        obstacles: DynArray("ModelParticleObstacleV17")
      },
      ModelParticleCloudV17: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV17: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV17"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV17"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV17"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV17: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV17: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV17: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV17: {
        streaks: DynArray("ModelStreakV17"),
        anchors: DynArray("ModelStreakAnchorV17")
      },
      ModelStreakV17: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV17: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV17: {
        effectLights: DynArray("ModelEffectLightV17")
      },
      ModelEffectLightV17: {
        bone: Uint64,
        color: FixedArray(Uint8, 4),
        ranges: FixedArray(Float32, 2)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV17"),
      meshes: RefArray("ModelMeshDataV17"),
      model: Pointer("ModelModelDataV17"),
      properties: Pointer("ModelPropertyDataV17"),
      cloudData: Pointer("ModelCloudDataV17"),
      streakData: Pointer("ModelStreakDataV17"),
      lightData: Pointer("ModelLightDataV17"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV18",
    version: 18,
    definitions: {
      ModelMaterialDataV18: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV18"),
        constants: DynArray("ModelConstantDataV18")
      },
      ModelTextureDataV18: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV18: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV18: {
        lods: DynArray("ModelMeshLodDataV18"),
        morphTargets: DynArray("ModelMeshMorphTargetV18"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV18: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV18: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV18: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV18"),
        InitialPlacement: "ModelTransformDataV18",
        MeshBindings: DynArray("ModelMeshBindingDataV18"),
        boneFlags: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV18"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV18: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV18"),
        LODType: Uint32
      },
      ModelBoneDataV18: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV18",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV18: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV18: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV18: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV18: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV18")
      },
      ModelFloatPropertyDataV18: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV18: {
        clouds: DynArray("ModelParticleCloudV18"),
        emitters: DynArray("ModelParticleEmitterV18"),
        obstacles: DynArray("ModelParticleObstacleV18")
      },
      ModelParticleCloudV18: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV18: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV18"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV18"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV18"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV18: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV18: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV18: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV18: {
        streaks: DynArray("ModelStreakV18"),
        anchors: DynArray("ModelStreakAnchorV18")
      },
      ModelStreakV18: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV18: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV18: {
        effectLights: DynArray("ModelEffectLightV18")
      },
      ModelEffectLightV18: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV18"),
      meshes: RefArray("ModelMeshDataV18"),
      model: Pointer("ModelModelDataV18"),
      properties: Pointer("ModelPropertyDataV18"),
      cloudData: Pointer("ModelCloudDataV18"),
      streakData: Pointer("ModelStreakDataV18"),
      lightData: Pointer("ModelLightDataV18"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV19",
    version: 19,
    definitions: {
      ModelMaterialDataV19: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV19"),
        constants: DynArray("ModelConstantDataV19")
      },
      ModelTextureDataV19: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV19: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV19: {
        lods: DynArray("ModelMeshLodDataV19"),
        morphTargets: DynArray("ModelMeshMorphTargetV19"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV19: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV19: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV19: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV19"),
        InitialPlacement: "ModelTransformDataV19",
        MeshBindings: DynArray("ModelMeshBindingDataV19"),
        boneFlags: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV19"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV19: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV19"),
        LODType: Uint32
      },
      ModelBoneDataV19: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV19",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV19: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV19: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV19: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV19: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV19")
      },
      ModelFloatPropertyDataV19: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV19: {
        clouds: DynArray("ModelParticleCloudV19"),
        emitters: DynArray("ModelParticleEmitterV19"),
        obstacles: DynArray("ModelParticleObstacleV19")
      },
      ModelParticleCloudV19: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV19: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV19"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV19"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV19"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV19: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV19: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV19: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV19: {
        streaks: DynArray("ModelStreakV19"),
        anchors: DynArray("ModelStreakAnchorV19")
      },
      ModelStreakV19: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV19: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV19: {
        effectLights: DynArray("ModelEffectLightV19")
      },
      ModelEffectLightV19: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV19: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV19"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV19"),
        lod1Constraints: DynArray("ModelClothConstraintV19"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV19: {
        weights: DynArray("ModelClothBoneWeightV19")
      },
      ModelClothBoneWeightV19: {
        index: Uint16,
        weight: Uint8
      },
      ModelClothConstraintV19: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV19"),
      meshes: RefArray("ModelMeshDataV19"),
      model: Pointer("ModelModelDataV19"),
      properties: Pointer("ModelPropertyDataV19"),
      cloudData: Pointer("ModelCloudDataV19"),
      streakData: Pointer("ModelStreakDataV19"),
      lightData: Pointer("ModelLightDataV19"),
      clothData: DynArray("ModelClothDataV19"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV20",
    version: 20,
    definitions: {
      ModelMaterialDataV20: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV20"),
        constants: DynArray("ModelConstantDataV20")
      },
      ModelTextureDataV20: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV20: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV20: {
        lods: DynArray("ModelMeshLodDataV20"),
        morphTargets: DynArray("ModelMeshMorphTargetV20"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV20: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV20: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV20: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV20"),
        InitialPlacement: "ModelTransformDataV20",
        MeshBindings: DynArray("ModelMeshBindingDataV20"),
        boneFlags: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV20"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV20: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV20"),
        LODType: Uint32
      },
      ModelBoneDataV20: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV20",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV20: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV20: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV20: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV20: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV20")
      },
      ModelFloatPropertyDataV20: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV20: {
        clouds: DynArray("ModelParticleCloudV20"),
        emitters: DynArray("ModelParticleEmitterV20"),
        obstacles: DynArray("ModelParticleObstacleV20")
      },
      ModelParticleCloudV20: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32)
      },
      ModelParticleEmitterV20: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: FixedArray(Float32, 2),
        colorFalloff: Float32,
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV20"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV20"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV20"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32
      },
      ModelParticleCurveV20: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV20: {
        columns: Uint8,
        count: Uint8,
        flags: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV20: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV20: {
        streaks: DynArray("ModelStreakV20"),
        anchors: DynArray("ModelStreakAnchorV20")
      },
      ModelStreakV20: {
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        spawnFreq: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32
      },
      ModelStreakAnchorV20: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV20: {
        effectLights: DynArray("ModelEffectLightV20")
      },
      ModelEffectLightV20: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV20: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV20"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV20"),
        lod1Constraints: DynArray("ModelClothConstraintV20"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV20: {
        weights: DynArray("ModelClothBoneWeightV20")
      },
      ModelClothBoneWeightV20: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV20: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV20"),
      meshes: RefArray("ModelMeshDataV20"),
      model: Pointer("ModelModelDataV20"),
      properties: Pointer("ModelPropertyDataV20"),
      cloudData: Pointer("ModelCloudDataV20"),
      streakData: Pointer("ModelStreakDataV20"),
      lightData: Pointer("ModelLightDataV20"),
      clothData: DynArray("ModelClothDataV20"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV21",
    version: 21,
    definitions: {
      ModelMaterialDataV21: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV21"),
        constants: DynArray("ModelConstantDataV21")
      },
      ModelTextureDataV21: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV21: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV21: {
        lods: DynArray("ModelMeshLodDataV21"),
        morphTargets: DynArray("ModelMeshMorphTargetV21"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV21: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV21: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV21: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV21"),
        InitialPlacement: "ModelTransformDataV21",
        MeshBindings: DynArray("ModelMeshBindingDataV21"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV21"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV21: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV21"),
        LODType: Uint32
      },
      ModelBoneDataV21: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV21",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV21: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV21: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV21: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV21: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV21")
      },
      ModelFloatPropertyDataV21: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV21: {
        clouds: DynArray("ModelParticleCloudV21"),
        emitters: DynArray("ModelParticleEmitterV21"),
        obstacles: DynArray("ModelParticleObstacleV21")
      },
      ModelParticleCloudV21: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV21: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV21"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV21"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV21"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV21: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV21: {
        columns: Uint8,
        count: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV21: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV21: {
        streaks: DynArray("ModelStreakV21"),
        anchors: DynArray("ModelStreakAnchorV21")
      },
      ModelStreakV21: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV21: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV21: {
        effectLights: DynArray("ModelEffectLightV21")
      },
      ModelEffectLightV21: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV21: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV21"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV21"),
        lod1Constraints: DynArray("ModelClothConstraintV21"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV21: {
        weights: DynArray("ModelClothBoneWeightV21")
      },
      ModelClothBoneWeightV21: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV21: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV21"),
      meshes: RefArray("ModelMeshDataV21"),
      model: Pointer("ModelModelDataV21"),
      properties: Pointer("ModelPropertyDataV21"),
      cloudData: Pointer("ModelCloudDataV21"),
      streakData: Pointer("ModelStreakDataV21"),
      lightData: Pointer("ModelLightDataV21"),
      clothData: DynArray("ModelClothDataV21"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV22",
    version: 22,
    definitions: {
      ModelMaterialDataV22: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV22"),
        constants: DynArray("ModelConstantDataV22")
      },
      ModelTextureDataV22: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV22: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV22: {
        lods: DynArray("ModelMeshLodDataV22"),
        morphTargets: DynArray("ModelMeshMorphTargetV22"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV22: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV22: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV22: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV22"),
        InitialPlacement: "ModelTransformDataV22",
        MeshBindings: DynArray("ModelMeshBindingDataV22"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV22"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV22: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV22"),
        LODType: Uint32
      },
      ModelBoneDataV22: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV22",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV22: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV22: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV22: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV22: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV22")
      },
      ModelFloatPropertyDataV22: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV22: {
        clouds: DynArray("ModelParticleCloudV22"),
        emitters: DynArray("ModelParticleEmitterV22"),
        obstacles: DynArray("ModelParticleObstacleV22")
      },
      ModelParticleCloudV22: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV22: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV22"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV22"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV22"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV22: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV22: {
        columns: Uint8,
        count: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelParticleObstacleV22: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV22: {
        streaks: DynArray("ModelStreakV22"),
        anchors: DynArray("ModelStreakAnchorV22")
      },
      ModelStreakV22: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV22: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV22: {
        effectLights: DynArray("ModelEffectLightV22")
      },
      ModelEffectLightV22: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV22: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV22"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV22"),
        lod1Constraints: DynArray("ModelClothConstraintV22"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV22: {
        weights: DynArray("ModelClothBoneWeightV22")
      },
      ModelClothBoneWeightV22: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV22: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV22"),
      meshes: RefArray("ModelMeshDataV22"),
      model: Pointer("ModelModelDataV22"),
      properties: Pointer("ModelPropertyDataV22"),
      cloudData: Pointer("ModelCloudDataV22"),
      streakData: Pointer("ModelStreakDataV22"),
      lightData: Pointer("ModelLightDataV22"),
      clothData: DynArray("ModelClothDataV22"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV23",
    version: 23,
    definitions: {
      ModelMaterialDataV23: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV23"),
        constants: DynArray("ModelConstantDataV23")
      },
      ModelTextureDataV23: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV23: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV23: {
        lods: DynArray("ModelMeshLodDataV23"),
        morphTargets: DynArray("ModelMeshMorphTargetV23"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV23: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV23: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV23: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV23"),
        InitialPlacement: "ModelTransformDataV23",
        MeshBindings: DynArray("ModelMeshBindingDataV23"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV23"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV23: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV23"),
        LODType: Uint32
      },
      ModelBoneDataV23: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV23",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV23: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV23: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV23: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV23: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV23")
      },
      ModelFloatPropertyDataV23: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV23: {
        clouds: DynArray("ModelParticleCloudV23"),
        emitters: DynArray("ModelParticleEmitterV23")
      },
      ModelParticleCloudV23: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV23: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        opacityCurve: Pointer("ModelParticleCurveV23"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV23"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV23"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV23: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV23: {
        columns: Uint8,
        count: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV23: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV23: {
        streaks: DynArray("ModelStreakV23"),
        anchors: DynArray("ModelStreakAnchorV23")
      },
      ModelStreakV23: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV23: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV23: {
        effectLights: DynArray("ModelEffectLightV23")
      },
      ModelEffectLightV23: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV23: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV23"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV23"),
        lod1Constraints: DynArray("ModelClothConstraintV23"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV23: {
        weights: DynArray("ModelClothBoneWeightV23")
      },
      ModelClothBoneWeightV23: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV23: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV23"),
      meshes: RefArray("ModelMeshDataV23"),
      model: Pointer("ModelModelDataV23"),
      properties: Pointer("ModelPropertyDataV23"),
      cloudData: Pointer("ModelCloudDataV23"),
      obstacles: DynArray("ModelObstacleDataV23"),
      streakData: Pointer("ModelStreakDataV23"),
      lightData: Pointer("ModelLightDataV23"),
      clothData: DynArray("ModelClothDataV23"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV24",
    version: 24,
    definitions: {
      ModelMaterialDataV24: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV24"),
        constants: DynArray("ModelConstantDataV24")
      },
      ModelTextureDataV24: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV24: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV24: {
        lods: DynArray("ModelMeshLodDataV24"),
        morphTargets: DynArray("ModelMeshMorphTargetV24"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV24: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV24: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV24: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV24"),
        InitialPlacement: "ModelTransformDataV24",
        MeshBindings: DynArray("ModelMeshBindingDataV24"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV24"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV24: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV24"),
        LODType: Uint32
      },
      ModelBoneDataV24: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV24",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV24: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV24: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV24: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV24: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV24")
      },
      ModelFloatPropertyDataV24: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV24: {
        clouds: DynArray("ModelParticleCloudV24"),
        emitters: DynArray("ModelParticleEmitterV24")
      },
      ModelParticleCloudV24: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV24: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV24"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV24"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV24"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV24: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV24: {
        columns: Uint8,
        count: Uint8,
        fps: Uint32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV24: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV24: {
        streaks: DynArray("ModelStreakV24"),
        anchors: DynArray("ModelStreakAnchorV24")
      },
      ModelStreakV24: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV24: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV24: {
        effectLights: DynArray("ModelEffectLightV24")
      },
      ModelEffectLightV24: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV24: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV24"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV24"),
        lod1Constraints: DynArray("ModelClothConstraintV24"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV24: {
        weights: DynArray("ModelClothBoneWeightV24")
      },
      ModelClothBoneWeightV24: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV24: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV24"),
      meshes: RefArray("ModelMeshDataV24"),
      model: Pointer("ModelModelDataV24"),
      properties: Pointer("ModelPropertyDataV24"),
      cloudData: Pointer("ModelCloudDataV24"),
      obstacles: DynArray("ModelObstacleDataV24"),
      streakData: Pointer("ModelStreakDataV24"),
      lightData: Pointer("ModelLightDataV24"),
      clothData: DynArray("ModelClothDataV24"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV25",
    version: 25,
    definitions: {
      ModelMaterialDataV25: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV25"),
        constants: DynArray("ModelConstantDataV25")
      },
      ModelTextureDataV25: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV25: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV25: {
        lods: DynArray("ModelMeshLodDataV25"),
        morphTargets: DynArray("ModelMeshMorphTargetV25"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV25: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV25: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV25: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV25"),
        InitialPlacement: "ModelTransformDataV25",
        MeshBindings: DynArray("ModelMeshBindingDataV25"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV25"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV25: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV25"),
        LODType: Uint32
      },
      ModelBoneDataV25: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV25",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV25: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV25: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV25: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV25: {
        boolTokens: DynArray(Uint64),
        floatValues: DynArray("ModelFloatPropertyDataV25")
      },
      ModelFloatPropertyDataV25: {
        token: Uint64,
        value: Float32
      },
      ModelCloudDataV25: {
        clouds: DynArray("ModelParticleCloudV25"),
        emitters: DynArray("ModelParticleEmitterV25")
      },
      ModelParticleCloudV25: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV25: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV25"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV25"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV25"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV25: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV25: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV25: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV25: {
        streaks: DynArray("ModelStreakV25"),
        anchors: DynArray("ModelStreakAnchorV25")
      },
      ModelStreakV25: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV25: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV25: {
        effectLights: DynArray("ModelEffectLightV25")
      },
      ModelEffectLightV25: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV25: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV25"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV25"),
        lod1Constraints: DynArray("ModelClothConstraintV25"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV25: {
        weights: DynArray("ModelClothBoneWeightV25")
      },
      ModelClothBoneWeightV25: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV25: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV25"),
      meshes: RefArray("ModelMeshDataV25"),
      model: Pointer("ModelModelDataV25"),
      properties: Pointer("ModelPropertyDataV25"),
      cloudData: Pointer("ModelCloudDataV25"),
      obstacles: DynArray("ModelObstacleDataV25"),
      streakData: Pointer("ModelStreakDataV25"),
      lightData: Pointer("ModelLightDataV25"),
      clothData: DynArray("ModelClothDataV25"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV26",
    version: 26,
    definitions: {
      ModelMaterialDataV26: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV26"),
        constants: DynArray("ModelConstantDataV26")
      },
      ModelTextureDataV26: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV26: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV26: {
        lods: DynArray("ModelMeshLodDataV26"),
        morphTargets: DynArray("ModelMeshMorphTargetV26"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32)
      },
      ModelMeshLodDataV26: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV26: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV26: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV26"),
        InitialPlacement: "ModelTransformDataV26",
        MeshBindings: DynArray("ModelMeshBindingDataV26"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV26"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV26: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV26"),
        LODType: Uint32
      },
      ModelBoneDataV26: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV26",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV26: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV26: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV26: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV26: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV26: {
        clouds: DynArray("ModelParticleCloudV26"),
        emitters: DynArray("ModelParticleEmitterV26")
      },
      ModelParticleCloudV26: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV26: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV26"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV26"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV26"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV26: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV26: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV26: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV26: {
        streaks: DynArray("ModelStreakV26"),
        anchors: DynArray("ModelStreakAnchorV26")
      },
      ModelStreakV26: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV26: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV26: {
        effectLights: DynArray("ModelEffectLightV26")
      },
      ModelEffectLightV26: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV26: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV26"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV26"),
        lod1Constraints: DynArray("ModelClothConstraintV26"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV26: {
        weights: DynArray("ModelClothBoneWeightV26")
      },
      ModelClothBoneWeightV26: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV26: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV26"),
      meshes: RefArray("ModelMeshDataV26"),
      model: Pointer("ModelModelDataV26"),
      properties: DynArray("ModelPropertyDataV26"),
      cloudData: Pointer("ModelCloudDataV26"),
      obstacles: DynArray("ModelObstacleDataV26"),
      streakData: Pointer("ModelStreakDataV26"),
      lightData: Pointer("ModelLightDataV26"),
      clothData: DynArray("ModelClothDataV26"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV27",
    version: 27,
    definitions: {
      ModelMaterialDataV27: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV27"),
        constants: DynArray("ModelConstantDataV27")
      },
      ModelTextureDataV27: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV27: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV27: {
        lods: DynArray("ModelMeshLodDataV27"),
        morphTargets: DynArray("ModelMeshMorphTargetV27"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64
      },
      ModelMeshLodDataV27: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV27: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV27: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV27"),
        InitialPlacement: "ModelTransformDataV27",
        MeshBindings: DynArray("ModelMeshBindingDataV27"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV27"),
        skeletonHash: DynArray(Uint8)
      },
      ModelSkeletonDataV27: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV27"),
        LODType: Uint32
      },
      ModelBoneDataV27: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV27",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV27: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV27: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV27: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV27: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV27: {
        clouds: DynArray("ModelParticleCloudV27"),
        emitters: DynArray("ModelParticleEmitterV27")
      },
      ModelParticleCloudV27: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV27: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV27"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV27"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV27"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV27: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV27: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV27: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV27: {
        streaks: DynArray("ModelStreakV27"),
        anchors: DynArray("ModelStreakAnchorV27")
      },
      ModelStreakV27: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV27: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV27: {
        effectLights: DynArray("ModelEffectLightV27")
      },
      ModelEffectLightV27: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV27: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV27"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV27"),
        lod1Constraints: DynArray("ModelClothConstraintV27"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV27: {
        weights: DynArray("ModelClothBoneWeightV27")
      },
      ModelClothBoneWeightV27: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV27: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV27"),
      meshes: RefArray("ModelMeshDataV27"),
      model: Pointer("ModelModelDataV27"),
      properties: DynArray("ModelPropertyDataV27"),
      cloudData: Pointer("ModelCloudDataV27"),
      obstacles: DynArray("ModelObstacleDataV27"),
      streakData: Pointer("ModelStreakDataV27"),
      lightData: Pointer("ModelLightDataV27"),
      clothData: DynArray("ModelClothDataV27"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV28",
    version: 28,
    definitions: {
      ModelMaterialDataV28: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV28"),
        constants: DynArray("ModelConstantDataV28")
      },
      ModelTextureDataV28: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint8,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV28: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMeshDataV28: {
        lods: DynArray("ModelMeshLodDataV28"),
        morphTargets: DynArray("ModelMeshMorphTargetV28"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV28: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV28: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV28: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV28"),
        InitialPlacement: "ModelTransformDataV28",
        MeshBindings: DynArray("ModelMeshBindingDataV28"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV28"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV28: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV28"),
        LODType: Uint32
      },
      ModelBoneDataV28: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV28",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV28: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV28: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV28: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV28: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV28: {
        clouds: DynArray("ModelParticleCloudV28"),
        emitters: DynArray("ModelParticleEmitterV28")
      },
      ModelParticleCloudV28: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV28: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV28"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV28"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV28"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV28: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV28: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV28: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV28: {
        streaks: DynArray("ModelStreakV28"),
        anchors: DynArray("ModelStreakAnchorV28")
      },
      ModelStreakV28: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV28: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV28: {
        effectLights: DynArray("ModelEffectLightV28")
      },
      ModelEffectLightV28: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV28: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV28"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV28"),
        lod1Constraints: DynArray("ModelClothConstraintV28"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV28: {
        weights: DynArray("ModelClothBoneWeightV28")
      },
      ModelClothBoneWeightV28: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV28: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV28"),
      meshes: RefArray("ModelMeshDataV28"),
      model: Pointer("ModelModelDataV28"),
      properties: DynArray("ModelPropertyDataV28"),
      cloudData: Pointer("ModelCloudDataV28"),
      obstacles: DynArray("ModelObstacleDataV28"),
      streakData: Pointer("ModelStreakDataV28"),
      lightData: Pointer("ModelLightDataV28"),
      clothData: DynArray("ModelClothDataV28"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV29",
    version: 29,
    definitions: {
      ModelMaterialDataV29: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV29"),
        constants: DynArray("ModelConstantDataV29"),
        matConstLinks: DynArray("ModelMatConstLinkV29"),
        uvTransLinks: DynArray("ModelUVTransLinkV29")
      },
      ModelTextureDataV29: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV29: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV29: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV29: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV29: {
        lods: DynArray("ModelMeshLodDataV29"),
        morphTargets: DynArray("ModelMeshMorphTargetV29"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV29: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV29: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV29: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV29"),
        InitialPlacement: "ModelTransformDataV29",
        MeshBindings: DynArray("ModelMeshBindingDataV29"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV29"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV29: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV29"),
        LODType: Uint32
      },
      ModelBoneDataV29: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV29",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV29: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV29: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV29: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV29: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV29: {
        clouds: DynArray("ModelParticleCloudV29"),
        emitters: DynArray("ModelParticleEmitterV29")
      },
      ModelParticleCloudV29: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV29: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV29"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV29"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV29"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV29: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV29: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV29: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV29: {
        streaks: DynArray("ModelStreakV29"),
        anchors: DynArray("ModelStreakAnchorV29")
      },
      ModelStreakV29: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV29: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV29: {
        effectLights: DynArray("ModelEffectLightV29")
      },
      ModelEffectLightV29: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV29: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV29"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV29"),
        lod1Constraints: DynArray("ModelClothConstraintV29"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV29")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV29: {
        weights: DynArray("ModelClothBoneWeightV29")
      },
      ModelClothBoneWeightV29: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV29: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV29: {
        bone: Uint64,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV29"),
      meshes: RefArray("ModelMeshDataV29"),
      model: Pointer("ModelModelDataV29"),
      properties: DynArray("ModelPropertyDataV29"),
      cloudData: Pointer("ModelCloudDataV29"),
      obstacles: DynArray("ModelObstacleDataV29"),
      streakData: Pointer("ModelStreakDataV29"),
      lightData: Pointer("ModelLightDataV29"),
      clothData: DynArray("ModelClothDataV29"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV30",
    version: 30,
    definitions: {
      ModelMaterialDataV30: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV30"),
        constants: DynArray("ModelConstantDataV30"),
        matConstLinks: DynArray("ModelMatConstLinkV30"),
        uvTransLinks: DynArray("ModelUVTransLinkV30")
      },
      ModelTextureDataV30: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV30: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV30: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV30: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV30: {
        lods: DynArray("ModelMeshLodDataV30"),
        morphTargets: DynArray("ModelMeshMorphTargetV30"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV30: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV30: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV30: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV30"),
        InitialPlacement: "ModelTransformDataV30",
        MeshBindings: DynArray("ModelMeshBindingDataV30"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV30"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV30: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV30"),
        LODType: Uint32
      },
      ModelBoneDataV30: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV30",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV30: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV30: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV30: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV30: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV30: {
        clouds: DynArray("ModelParticleCloudV30"),
        emitters: DynArray("ModelParticleEmitterV30")
      },
      ModelParticleCloudV30: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV30: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV30"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV30"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV30"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV30: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV30: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV30: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV30: {
        streaks: DynArray("ModelStreakV30"),
        anchors: DynArray("ModelStreakAnchorV30")
      },
      ModelStreakV30: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        stretchDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV30: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32
      },
      ModelLightDataV30: {
        effectLights: DynArray("ModelEffectLightV30")
      },
      ModelEffectLightV30: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV30: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV30"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV30"),
        lod1Constraints: DynArray("ModelClothConstraintV30"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV30")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV30: {
        weights: DynArray("ModelClothBoneWeightV30")
      },
      ModelClothBoneWeightV30: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV30: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV30: {
        bone: Uint64,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV30"),
      meshes: RefArray("ModelMeshDataV30"),
      model: Pointer("ModelModelDataV30"),
      properties: DynArray("ModelPropertyDataV30"),
      cloudData: Pointer("ModelCloudDataV30"),
      obstacles: DynArray("ModelObstacleDataV30"),
      streakData: Pointer("ModelStreakDataV30"),
      lightData: Pointer("ModelLightDataV30"),
      clothData: DynArray("ModelClothDataV30"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV31",
    version: 31,
    definitions: {
      ModelMaterialDataV31: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV31"),
        constants: DynArray("ModelConstantDataV31"),
        matConstLinks: DynArray("ModelMatConstLinkV31"),
        uvTransLinks: DynArray("ModelUVTransLinkV31")
      },
      ModelTextureDataV31: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV31: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV31: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV31: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV31: {
        lods: DynArray("ModelMeshLodDataV31"),
        morphTargets: DynArray("ModelMeshMorphTargetV31"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV31: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV31: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV31: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV31"),
        InitialPlacement: "ModelTransformDataV31",
        MeshBindings: DynArray("ModelMeshBindingDataV31"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV31"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV31: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV31"),
        LODType: Uint32
      },
      ModelBoneDataV31: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV31",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV31: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV31: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV31: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV31: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV31: {
        clouds: DynArray("ModelParticleCloudV31"),
        emitters: DynArray("ModelParticleEmitterV31")
      },
      ModelParticleCloudV31: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV31: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV31"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV31"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV31"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV31: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV31: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV31: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV31: {
        streaks: DynArray("ModelStreakV31"),
        anchors: DynArray("ModelStreakAnchorV31")
      },
      ModelStreakV31: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV31: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV31: {
        effectLights: DynArray("ModelEffectLightV31")
      },
      ModelEffectLightV31: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV31: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV31"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV31"),
        lod1Constraints: DynArray("ModelClothConstraintV31"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV31")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV31: {
        weights: DynArray("ModelClothBoneWeightV31")
      },
      ModelClothBoneWeightV31: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV31: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV31: {
        bone: Uint64,
        type: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV31"),
      meshes: RefArray("ModelMeshDataV31"),
      model: Pointer("ModelModelDataV31"),
      properties: DynArray("ModelPropertyDataV31"),
      cloudData: Pointer("ModelCloudDataV31"),
      obstacles: DynArray("ModelObstacleDataV31"),
      streakData: Pointer("ModelStreakDataV31"),
      lightData: Pointer("ModelLightDataV31"),
      clothData: DynArray("ModelClothDataV31"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV32",
    version: 32,
    definitions: {
      ModelMaterialDataV32: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV32"),
        constants: DynArray("ModelConstantDataV32"),
        matConstLinks: DynArray("ModelMatConstLinkV32"),
        uvTransLinks: DynArray("ModelUVTransLinkV32")
      },
      ModelTextureDataV32: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV32: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV32: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV32: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV32: {
        lods: DynArray("ModelMeshLodDataV32"),
        morphTargets: DynArray("ModelMeshMorphTargetV32"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV32: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV32: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV32: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV32"),
        InitialPlacement: "ModelTransformDataV32",
        MeshBindings: DynArray("ModelMeshBindingDataV32"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV32"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV32: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV32"),
        LODType: Uint32
      },
      ModelBoneDataV32: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV32",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV32: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV32: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV32: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV32: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV32: {
        clouds: DynArray("ModelParticleCloudV32"),
        emitters: DynArray("ModelParticleEmitterV32")
      },
      ModelParticleCloudV32: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV32: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV32"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV32"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV32"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV32: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV32: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV32: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV32: {
        streaks: DynArray("ModelStreakV32"),
        anchors: DynArray("ModelStreakAnchorV32")
      },
      ModelStreakV32: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV32: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV32: {
        effectLights: DynArray("ModelEffectLightV32")
      },
      ModelEffectLightV32: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV32: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV32"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV32"),
        lod1Constraints: DynArray("ModelClothConstraintV32"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV32")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV32: {
        weights: DynArray("ModelClothBoneWeightV32")
      },
      ModelClothBoneWeightV32: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV32: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV32: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV32: {
        systems: DynArray("ModelLightningSystemV32"),
        bolts: DynArray("ModelLightningBoltV32"),
        nodes: DynArray("ModelLightningNodeV32")
      },
      ModelLightningSystemV32: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV32: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: Uint32,
        colorEnd: Uint32,
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV32: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        visBoneIndex: Uint32
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV32"),
      meshes: RefArray("ModelMeshDataV32"),
      model: Pointer("ModelModelDataV32"),
      properties: DynArray("ModelPropertyDataV32"),
      cloudData: Pointer("ModelCloudDataV32"),
      obstacles: DynArray("ModelObstacleDataV32"),
      streakData: Pointer("ModelStreakDataV32"),
      lightData: Pointer("ModelLightDataV32"),
      clothData: DynArray("ModelClothDataV32"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV32")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV33",
    version: 33,
    definitions: {
      ModelMaterialDataV33: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV33"),
        constants: DynArray("ModelConstantDataV33"),
        matConstLinks: DynArray("ModelMatConstLinkV33"),
        uvTransLinks: DynArray("ModelUVTransLinkV33")
      },
      ModelTextureDataV33: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV33: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV33: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV33: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV33: {
        lods: DynArray("ModelMeshLodDataV33"),
        morphTargets: DynArray("ModelMeshMorphTargetV33"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        visBoneIndices: DynArray(Uint32),
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV33: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV33: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV33: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV33"),
        InitialPlacement: "ModelTransformDataV33",
        MeshBindings: DynArray("ModelMeshBindingDataV33"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV33"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV33: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV33"),
        LODType: Uint32
      },
      ModelBoneDataV33: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV33",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV33: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV33: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV33: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV33: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV33: {
        clouds: DynArray("ModelParticleCloudV33"),
        emitters: DynArray("ModelParticleEmitterV33")
      },
      ModelParticleCloudV33: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV33: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV33"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV33"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV33"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        visBoneIndex: Uint32,
        windInfluence: Uint8
      },
      ModelParticleCurveV33: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV33: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV33: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8,
        visBoneIndex: Uint32
      },
      ModelStreakDataV33: {
        streaks: DynArray("ModelStreakV33"),
        anchors: DynArray("ModelStreakAnchorV33")
      },
      ModelStreakV33: {
        acceleration: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        visBoneIndex: Uint32,
        wind: Float32
      },
      ModelStreakAnchorV33: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV33: {
        effectLights: DynArray("ModelEffectLightV33")
      },
      ModelEffectLightV33: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32,
        visBoneIndex: Uint32
      },
      ModelClothDataV33: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV33"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV33"),
        lod1Constraints: DynArray("ModelClothConstraintV33"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV33")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV33: {
        weights: DynArray("ModelClothBoneWeightV33")
      },
      ModelClothBoneWeightV33: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV33: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV33: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV33: {
        systems: DynArray("ModelLightningSystemV33"),
        bolts: DynArray("ModelLightningBoltV33"),
        nodes: DynArray("ModelLightningNodeV33")
      },
      ModelLightningSystemV33: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV33: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: Uint32,
        colorEnd: Uint32,
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV33: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        visBoneIndex: Uint32
      },
      ModelBoneConstraintV33: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Uint8,
        drag: Uint8,
        ellipseRatio: Float32,
        gravity: Uint8,
        collisionRadius: Float32,
        wind: Uint8,
        angle: FixedArray(Float32, 2),
        angleStrength: Uint8,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Uint8,
        distanceInnerType: Uint8,
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Uint8,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Uint8,
        twistType: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV33"),
      meshes: RefArray("ModelMeshDataV33"),
      model: Pointer("ModelModelDataV33"),
      properties: DynArray("ModelPropertyDataV33"),
      cloudData: Pointer("ModelCloudDataV33"),
      obstacles: DynArray("ModelObstacleDataV33"),
      streakData: Pointer("ModelStreakDataV33"),
      lightData: Pointer("ModelLightDataV33"),
      clothData: DynArray("ModelClothDataV33"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV33"),
      boneConstraints: DynArray("ModelBoneConstraintV33")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV34",
    version: 34,
    definitions: {
      ModelMaterialDataV34: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV34"),
        constants: DynArray("ModelConstantDataV34"),
        matConstLinks: DynArray("ModelMatConstLinkV34"),
        uvTransLinks: DynArray("ModelUVTransLinkV34")
      },
      ModelTextureDataV34: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV34: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV34: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV34: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV34: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV34"),
        morphTargets: DynArray("ModelMeshMorphTargetV34"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV34: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV34: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV34: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV34"),
        InitialPlacement: "ModelTransformDataV34",
        MeshBindings: DynArray("ModelMeshBindingDataV34"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV34"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV34: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV34"),
        LODType: Uint32
      },
      ModelBoneDataV34: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV34",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV34: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV34: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV34: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV34: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV34: {
        clouds: DynArray("ModelParticleCloudV34"),
        emitters: DynArray("ModelParticleEmitterV34")
      },
      ModelParticleCloudV34: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV34: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV34"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV34"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV34"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV34: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV34: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV34: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV34: {
        streaks: DynArray("ModelStreakV34"),
        anchors: DynArray("ModelStreakAnchorV34")
      },
      ModelStreakV34: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV34: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV34: {
        effectLights: DynArray("ModelEffectLightV34")
      },
      ModelEffectLightV34: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV34: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV34"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV34"),
        lod1Constraints: DynArray("ModelClothConstraintV34"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV34")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV34: {
        weights: DynArray("ModelClothBoneWeightV34")
      },
      ModelClothBoneWeightV34: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV34: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV34: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV34: {
        systems: DynArray("ModelLightningSystemV34"),
        bolts: DynArray("ModelLightningBoltV34"),
        nodes: DynArray("ModelLightningNodeV34")
      },
      ModelLightningSystemV34: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV34: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: Uint32,
        colorEnd: Uint32,
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV34: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8
      },
      ModelBoneConstraintV34: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Uint8,
        drag: Uint8,
        ellipseRatio: Float32,
        gravity: Uint8,
        collisionRadius: Float32,
        wind: Uint8,
        angle: FixedArray(Float32, 2),
        angleStrength: Uint8,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Uint8,
        distanceInnerType: Uint8,
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Uint8,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Uint8,
        twistType: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV34"),
      meshes: RefArray("ModelMeshDataV34"),
      model: Pointer("ModelModelDataV34"),
      properties: DynArray("ModelPropertyDataV34"),
      cloudData: Pointer("ModelCloudDataV34"),
      obstacles: DynArray("ModelObstacleDataV34"),
      streakData: Pointer("ModelStreakDataV34"),
      lightData: Pointer("ModelLightDataV34"),
      clothData: DynArray("ModelClothDataV34"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV34"),
      boneConstraints: DynArray("ModelBoneConstraintV34")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV35",
    version: 35,
    definitions: {
      ModelMaterialDataV35: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV35"),
        constants: DynArray("ModelConstantDataV35"),
        matConstLinks: DynArray("ModelMatConstLinkV35"),
        uvTransLinks: DynArray("ModelUVTransLinkV35")
      },
      ModelTextureDataV35: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV35: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV35: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV35: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV35: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV35"),
        morphTargets: DynArray("ModelMeshMorphTargetV35"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV35: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV35: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV35: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV35"),
        InitialPlacement: "ModelTransformDataV35",
        MeshBindings: DynArray("ModelMeshBindingDataV35"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV35"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV35: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV35"),
        LODType: Uint32
      },
      ModelBoneDataV35: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV35",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV35: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV35: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV35: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV35: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV35: {
        clouds: DynArray("ModelParticleCloudV35"),
        emitters: DynArray("ModelParticleEmitterV35")
      },
      ModelParticleCloudV35: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV35: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV35"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV35"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV35"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV35: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV35: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV35: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV35: {
        streaks: DynArray("ModelStreakV35"),
        anchors: DynArray("ModelStreakAnchorV35")
      },
      ModelStreakV35: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV35: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV35: {
        effectLights: DynArray("ModelEffectLightV35")
      },
      ModelEffectLightV35: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV35: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV35"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV35"),
        lod1Constraints: DynArray("ModelClothConstraintV35"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV35")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV35: {
        weights: DynArray("ModelClothBoneWeightV35")
      },
      ModelClothBoneWeightV35: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV35: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV35: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV35: {
        systems: DynArray("ModelLightningSystemV35"),
        bolts: DynArray("ModelLightningBoltV35"),
        nodes: DynArray("ModelLightningNodeV35")
      },
      ModelLightningSystemV35: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV35: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV35: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV35: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Uint8,
        drag: Uint8,
        ellipseRatio: Float32,
        gravity: Uint8,
        collisionRadius: Float32,
        wind: Uint8,
        angle: FixedArray(Float32, 2),
        angleStrength: Uint8,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Uint8,
        distanceInnerType: Uint8,
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Uint8,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Uint8,
        twistType: Uint8
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV35"),
      meshes: RefArray("ModelMeshDataV35"),
      model: Pointer("ModelModelDataV35"),
      properties: DynArray("ModelPropertyDataV35"),
      cloudData: Pointer("ModelCloudDataV35"),
      obstacles: DynArray("ModelObstacleDataV35"),
      streakData: Pointer("ModelStreakDataV35"),
      lightData: Pointer("ModelLightDataV35"),
      clothData: DynArray("ModelClothDataV35"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV35"),
      boneConstraints: DynArray("ModelBoneConstraintV35")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV36",
    version: 36,
    definitions: {
      ModelMaterialDataV36: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV36"),
        constants: DynArray("ModelConstantDataV36"),
        matConstLinks: DynArray("ModelMatConstLinkV36"),
        uvTransLinks: DynArray("ModelUVTransLinkV36")
      },
      ModelTextureDataV36: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV36: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV36: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV36: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV36: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV36"),
        morphTargets: DynArray("ModelMeshMorphTargetV36"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV36: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV36: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV36: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV36"),
        InitialPlacement: "ModelTransformDataV36",
        MeshBindings: DynArray("ModelMeshBindingDataV36"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV36"),
        skeletonHash: DynArray(Uint8),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV36: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV36"),
        LODType: Uint32
      },
      ModelBoneDataV36: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV36",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV36: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV36: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV36: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV36: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV36: {
        clouds: DynArray("ModelParticleCloudV36"),
        emitters: DynArray("ModelParticleEmitterV36")
      },
      ModelParticleCloudV36: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV36: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV36"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV36"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV36"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV36: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV36: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV36: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV36: {
        streaks: DynArray("ModelStreakV36"),
        anchors: DynArray("ModelStreakAnchorV36")
      },
      ModelStreakV36: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV36: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV36: {
        effectLights: DynArray("ModelEffectLightV36")
      },
      ModelEffectLightV36: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV36: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV36"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV36"),
        lod1Constraints: DynArray("ModelClothConstraintV36"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV36")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV36: {
        weights: DynArray("ModelClothBoneWeightV36")
      },
      ModelClothBoneWeightV36: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV36: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV36: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV36: {
        systems: DynArray("ModelLightningSystemV36"),
        bolts: DynArray("ModelLightningBoltV36"),
        nodes: DynArray("ModelLightningNodeV36")
      },
      ModelLightningSystemV36: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV36: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV36: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV36: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV36"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV36: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV36"),
      meshes: RefArray("ModelMeshDataV36"),
      model: Pointer("ModelModelDataV36"),
      properties: DynArray("ModelPropertyDataV36"),
      cloudData: Pointer("ModelCloudDataV36"),
      obstacles: DynArray("ModelObstacleDataV36"),
      streakData: Pointer("ModelStreakDataV36"),
      lightData: Pointer("ModelLightDataV36"),
      clothData: DynArray("ModelClothDataV36"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV36"),
      boneConstraints: DynArray("ModelBoneConstraintV36")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV37",
    version: 37,
    definitions: {
      ModelMaterialDataV37: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV37"),
        constants: DynArray("ModelConstantDataV37"),
        matConstLinks: DynArray("ModelMatConstLinkV37"),
        uvTransLinks: DynArray("ModelUVTransLinkV37")
      },
      ModelTextureDataV37: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV37: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV37: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV37: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV37: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV37"),
        morphTargets: DynArray("ModelMeshMorphTargetV37"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV37: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV37: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV37: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV37"),
        InitialPlacement: "ModelTransformDataV37",
        MeshBindings: DynArray("ModelMeshBindingDataV37"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV37"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV37: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV37"),
        LODType: Uint32
      },
      ModelBoneDataV37: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV37",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV37: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV37: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV37: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV37: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV37: {
        clouds: DynArray("ModelParticleCloudV37"),
        emitters: DynArray("ModelParticleEmitterV37")
      },
      ModelParticleCloudV37: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV37: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV37"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV37"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV37"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV37: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV37: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV37: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV37: {
        streaks: DynArray("ModelStreakV37"),
        anchors: DynArray("ModelStreakAnchorV37")
      },
      ModelStreakV37: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV37: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV37: {
        effectLights: DynArray("ModelEffectLightV37")
      },
      ModelEffectLightV37: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV37: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV37"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV37"),
        lod1Constraints: DynArray("ModelClothConstraintV37"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV37")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV37: {
        weights: DynArray("ModelClothBoneWeightV37")
      },
      ModelClothBoneWeightV37: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV37: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV37: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV37: {
        systems: DynArray("ModelLightningSystemV37"),
        bolts: DynArray("ModelLightningBoltV37"),
        nodes: DynArray("ModelLightningNodeV37")
      },
      ModelLightningSystemV37: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV37: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV37: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV37: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV37"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV37: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV37"),
      meshes: RefArray("ModelMeshDataV37"),
      model: Pointer("ModelModelDataV37"),
      properties: DynArray("ModelPropertyDataV37"),
      cloudData: Pointer("ModelCloudDataV37"),
      obstacles: DynArray("ModelObstacleDataV37"),
      streakData: Pointer("ModelStreakDataV37"),
      lightData: Pointer("ModelLightDataV37"),
      clothData: DynArray("ModelClothDataV37"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV37"),
      boneConstraints: DynArray("ModelBoneConstraintV37")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV38",
    version: 38,
    definitions: {
      ModelMaterialDataV38: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV38"),
        constants: DynArray("ModelConstantDataV38"),
        matConstLinks: DynArray("ModelMatConstLinkV38"),
        uvTransLinks: DynArray("ModelUVTransLinkV38")
      },
      ModelTextureDataV38: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV38: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV38: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV38: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV38: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV38"),
        morphTargets: DynArray("ModelMeshMorphTargetV38"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV38: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV38: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV38: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV38"),
        InitialPlacement: "ModelTransformDataV38",
        MeshBindings: DynArray("ModelMeshBindingDataV38"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV38"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV38: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV38"),
        LODType: Uint32
      },
      ModelBoneDataV38: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV38",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV38: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV38: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV38: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV38: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV38: {
        clouds: DynArray("ModelParticleCloudV38"),
        emitters: DynArray("ModelParticleEmitterV38")
      },
      ModelParticleCloudV38: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV38: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV38"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV38"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV38"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV38: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV38: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV38: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV38: {
        streaks: DynArray("ModelStreakV38"),
        anchors: DynArray("ModelStreakAnchorV38")
      },
      ModelStreakV38: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV38: {
        bone: Uint64,
        color: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV38: {
        effectLights: DynArray("ModelEffectLightV38")
      },
      ModelEffectLightV38: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV38: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV38"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV38"),
        lod1Constraints: DynArray("ModelClothConstraintV38"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV38")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV38: {
        weights: DynArray("ModelClothBoneWeightV38")
      },
      ModelClothBoneWeightV38: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV38: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV38: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV38: {
        systems: DynArray("ModelLightningSystemV38"),
        bolts: DynArray("ModelLightningBoltV38"),
        nodes: DynArray("ModelLightningNodeV38")
      },
      ModelLightningSystemV38: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV38: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV38: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV38: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV38"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV38: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV38"),
      meshes: RefArray("ModelMeshDataV38"),
      model: Pointer("ModelModelDataV38"),
      properties: DynArray("ModelPropertyDataV38"),
      cloudData: Pointer("ModelCloudDataV38"),
      obstacles: DynArray("ModelObstacleDataV38"),
      streakData: Pointer("ModelStreakDataV38"),
      lightData: Pointer("ModelLightDataV38"),
      clothData: DynArray("ModelClothDataV38"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV38"),
      boneConstraints: DynArray("ModelBoneConstraintV38")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV39",
    version: 39,
    definitions: {
      ModelMaterialDataV39: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV39"),
        constants: DynArray("ModelConstantDataV39"),
        matConstLinks: DynArray("ModelMatConstLinkV39"),
        uvTransLinks: DynArray("ModelUVTransLinkV39")
      },
      ModelTextureDataV39: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV39: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV39: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV39: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV39: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV39"),
        morphTargets: DynArray("ModelMeshMorphTargetV39"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV39: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV39: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV39: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV39"),
        InitialPlacement: "ModelTransformDataV39",
        MeshBindings: DynArray("ModelMeshBindingDataV39"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV39"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV39: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV39"),
        LODType: Uint32
      },
      ModelBoneDataV39: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV39",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV39: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV39: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV39: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV39: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV39: {
        clouds: DynArray("ModelParticleCloudV39"),
        emitters: DynArray("ModelParticleEmitterV39")
      },
      ModelParticleCloudV39: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV39: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        opacityCurve: Pointer("ModelParticleCurveV39"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV39"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV39"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV39: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV39: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV39: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV39: {
        streaks: DynArray("ModelStreakV39"),
        anchors: DynArray("ModelStreakAnchorV39")
      },
      ModelStreakV39: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV39: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV39: {
        effectLights: DynArray("ModelEffectLightV39")
      },
      ModelEffectLightV39: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV39: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV39"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV39"),
        lod1Constraints: DynArray("ModelClothConstraintV39"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV39")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV39: {
        weights: DynArray("ModelClothBoneWeightV39")
      },
      ModelClothBoneWeightV39: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV39: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV39: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV39: {
        systems: DynArray("ModelLightningSystemV39"),
        bolts: DynArray("ModelLightningBoltV39"),
        nodes: DynArray("ModelLightningNodeV39")
      },
      ModelLightningSystemV39: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV39: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV39: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV39: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV39"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV39: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV39"),
      meshes: RefArray("ModelMeshDataV39"),
      model: Pointer("ModelModelDataV39"),
      properties: DynArray("ModelPropertyDataV39"),
      cloudData: Pointer("ModelCloudDataV39"),
      obstacles: DynArray("ModelObstacleDataV39"),
      streakData: Pointer("ModelStreakDataV39"),
      lightData: Pointer("ModelLightDataV39"),
      clothData: DynArray("ModelClothDataV39"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV39"),
      boneConstraints: DynArray("ModelBoneConstraintV39")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV40",
    version: 40,
    definitions: {
      ModelMaterialDataV40: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV40"),
        constants: DynArray("ModelConstantDataV40"),
        matConstLinks: DynArray("ModelMatConstLinkV40"),
        uvTransLinks: DynArray("ModelUVTransLinkV40")
      },
      ModelTextureDataV40: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV40: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV40: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV40: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV40: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV40"),
        morphTargets: DynArray("ModelMeshMorphTargetV40"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV40: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV40: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV40: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV40"),
        InitialPlacement: "ModelTransformDataV40",
        MeshBindings: DynArray("ModelMeshBindingDataV40"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV40"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV40: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV40"),
        LODType: Uint32
      },
      ModelBoneDataV40: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV40",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV40: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV40: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV40: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV40: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV40: {
        clouds: DynArray("ModelParticleCloudV40"),
        emitters: DynArray("ModelParticleEmitterV40")
      },
      ModelParticleCloudV40: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV40: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV40"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV40"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV40"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV40: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV40: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV40: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV40: {
        streaks: DynArray("ModelStreakV40"),
        anchors: DynArray("ModelStreakAnchorV40")
      },
      ModelStreakV40: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV40: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV40: {
        effectLights: DynArray("ModelEffectLightV40")
      },
      ModelEffectLightV40: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV40: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV40"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV40"),
        lod1Constraints: DynArray("ModelClothConstraintV40"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV40")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV40: {
        weights: DynArray("ModelClothBoneWeightV40")
      },
      ModelClothBoneWeightV40: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV40: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV40: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV40: {
        systems: DynArray("ModelLightningSystemV40"),
        bolts: DynArray("ModelLightningBoltV40"),
        nodes: DynArray("ModelLightningNodeV40")
      },
      ModelLightningSystemV40: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV40: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV40: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV40: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV40"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV40: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV40"),
      meshes: RefArray("ModelMeshDataV40"),
      model: Pointer("ModelModelDataV40"),
      properties: DynArray("ModelPropertyDataV40"),
      cloudData: Pointer("ModelCloudDataV40"),
      obstacles: DynArray("ModelObstacleDataV40"),
      streakData: Pointer("ModelStreakDataV40"),
      lightData: Pointer("ModelLightDataV40"),
      clothData: DynArray("ModelClothDataV40"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV40"),
      boneConstraints: DynArray("ModelBoneConstraintV40")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV41",
    version: 41,
    definitions: {
      ModelMaterialDataV41: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV41"),
        constants: DynArray("ModelConstantDataV41"),
        matConstLinks: DynArray("ModelMatConstLinkV41"),
        uvTransLinks: DynArray("ModelUVTransLinkV41")
      },
      ModelTextureDataV41: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV41: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV41: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV41: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV41: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV41"),
        morphTargets: DynArray("ModelMeshMorphTargetV41"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV41: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV41: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV41: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV41"),
        InitialPlacement: "ModelTransformDataV41",
        MeshBindings: DynArray("ModelMeshBindingDataV41"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV41"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV41: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV41"),
        LODType: Uint32
      },
      ModelBoneDataV41: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV41",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV41: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV41: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV41: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV41: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV41: {
        clouds: DynArray("ModelParticleCloudV41"),
        emitters: DynArray("ModelParticleEmitterV41")
      },
      ModelParticleCloudV41: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV41: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV41"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV41"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV41"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV41: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV41: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV41: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV41: {
        streaks: DynArray("ModelStreakV41"),
        anchors: DynArray("ModelStreakAnchorV41")
      },
      ModelStreakV41: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV41: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV41: {
        effectLights: DynArray("ModelEffectLightV41")
      },
      ModelEffectLightV41: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV41: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV41"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV41"),
        lod1Constraints: DynArray("ModelClothConstraintV41"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV41")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV41: {
        weights: DynArray("ModelClothBoneWeightV41")
      },
      ModelClothBoneWeightV41: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV41: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV41: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV41: {
        systems: DynArray("ModelLightningSystemV41"),
        bolts: DynArray("ModelLightningBoltV41"),
        nodes: DynArray("ModelLightningNodeV41")
      },
      ModelLightningSystemV41: {
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV41: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV41: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV41: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV41"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV41: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV41: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV41"),
      meshes: RefArray("ModelMeshDataV41"),
      model: Pointer("ModelModelDataV41"),
      properties: DynArray("ModelPropertyDataV41"),
      cloudData: Pointer("ModelCloudDataV41"),
      obstacles: DynArray("ModelObstacleDataV41"),
      streakData: Pointer("ModelStreakDataV41"),
      lightData: Pointer("ModelLightDataV41"),
      clothData: DynArray("ModelClothDataV41"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV41"),
      boneConstraints: DynArray("ModelBoneConstraintV41"),
      softBodyData: DynArray("ModelSoftBodyDataV41")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV42",
    version: 42,
    definitions: {
      ModelMaterialDataV42: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV42"),
        constants: DynArray("ModelConstantDataV42"),
        matConstLinks: DynArray("ModelMatConstLinkV42"),
        uvTransLinks: DynArray("ModelUVTransLinkV42")
      },
      ModelTextureDataV42: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV42: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV42: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV42: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV42: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV42"),
        morphTargets: DynArray("ModelMeshMorphTargetV42"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV42: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV42: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV42: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV42"),
        InitialPlacement: "ModelTransformDataV42",
        MeshBindings: DynArray("ModelMeshBindingDataV42"),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV42"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV42: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV42"),
        LODType: Uint32
      },
      ModelBoneDataV42: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV42",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV42: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV42: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV42: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV42: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV42: {
        clouds: DynArray("ModelParticleCloudV42"),
        emitters: DynArray("ModelParticleEmitterV42")
      },
      ModelParticleCloudV42: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV42: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV42"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV42"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV42"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV42: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV42: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV42: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV42: {
        streaks: DynArray("ModelStreakV42"),
        anchors: DynArray("ModelStreakAnchorV42")
      },
      ModelStreakV42: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV42: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV42: {
        effectLights: DynArray("ModelEffectLightV42")
      },
      ModelEffectLightV42: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV42: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV42"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV42"),
        lod1Constraints: DynArray("ModelClothConstraintV42"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV42")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV42: {
        weights: DynArray("ModelClothBoneWeightV42")
      },
      ModelClothBoneWeightV42: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV42: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV42: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV42: {
        systems: DynArray("ModelLightningSystemV42"),
        bolts: DynArray("ModelLightningBoltV42"),
        nodes: DynArray("ModelLightningNodeV42")
      },
      ModelLightningSystemV42: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV42: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV42: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV42: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV42"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV42: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV42: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV42"),
      meshes: RefArray("ModelMeshDataV42"),
      model: Pointer("ModelModelDataV42"),
      properties: DynArray("ModelPropertyDataV42"),
      cloudData: Pointer("ModelCloudDataV42"),
      obstacles: DynArray("ModelObstacleDataV42"),
      streakData: Pointer("ModelStreakDataV42"),
      lightData: Pointer("ModelLightDataV42"),
      clothData: DynArray("ModelClothDataV42"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV42"),
      boneConstraints: DynArray("ModelBoneConstraintV42"),
      softBodyData: DynArray("ModelSoftBodyDataV42")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV43",
    version: 43,
    definitions: {
      ModelMaterialDataV43: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV43"),
        constants: DynArray("ModelConstantDataV43"),
        matConstLinks: DynArray("ModelMatConstLinkV43"),
        uvTransLinks: DynArray("ModelUVTransLinkV43")
      },
      ModelTextureDataV43: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV43: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV43: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV43: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV43: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV43"),
        morphTargets: DynArray("ModelMeshMorphTargetV43"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV43: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV43: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV43: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV43"),
        InitialPlacement: "ModelTransformDataV43",
        MeshBindings: DynArray("ModelMeshBindingDataV43"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV43"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV43: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV43"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV43: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV43",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV43: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV43: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV43: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV43: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV43: {
        clouds: DynArray("ModelParticleCloudV43"),
        emitters: DynArray("ModelParticleEmitterV43")
      },
      ModelParticleCloudV43: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV43: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV43"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV43"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV43"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV43: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV43: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV43: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV43: {
        streaks: DynArray("ModelStreakV43"),
        anchors: DynArray("ModelStreakAnchorV43")
      },
      ModelStreakV43: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV43: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV43: {
        effectLights: DynArray("ModelEffectLightV43")
      },
      ModelEffectLightV43: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV43: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV43"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV43"),
        lod1Constraints: DynArray("ModelClothConstraintV43"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV43")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV43: {
        weights: DynArray("ModelClothBoneWeightV43")
      },
      ModelClothBoneWeightV43: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV43: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV43: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV43: {
        systems: DynArray("ModelLightningSystemV43"),
        bolts: DynArray("ModelLightningBoltV43"),
        nodes: DynArray("ModelLightningNodeV43")
      },
      ModelLightningSystemV43: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV43: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV43: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV43: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV43"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV43: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV43: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV43"),
      meshes: RefArray("ModelMeshDataV43"),
      model: Pointer("ModelModelDataV43"),
      properties: DynArray("ModelPropertyDataV43"),
      cloudData: Pointer("ModelCloudDataV43"),
      obstacles: DynArray("ModelObstacleDataV43"),
      streakData: Pointer("ModelStreakDataV43"),
      lightData: Pointer("ModelLightDataV43"),
      clothData: DynArray("ModelClothDataV43"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV43"),
      boneConstraints: DynArray("ModelBoneConstraintV43"),
      softBodyData: DynArray("ModelSoftBodyDataV43")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV44",
    version: 44,
    definitions: {
      ModelMaterialDataV44: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV44"),
        constants: DynArray("ModelConstantDataV44"),
        matConstLinks: DynArray("ModelMatConstLinkV44"),
        uvTransLinks: DynArray("ModelUVTransLinkV44")
      },
      ModelTextureDataV44: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV44: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV44: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV44: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMeshDataV44: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV44"),
        morphTargets: DynArray("ModelMeshMorphTargetV44"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV44: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV44: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV44: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV44"),
        InitialPlacement: "ModelTransformDataV44",
        MeshBindings: DynArray("ModelMeshBindingDataV44"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV44"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV44: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV44"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV44: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV44",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV44: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV44: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV44: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV44: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV44: {
        clouds: DynArray("ModelParticleCloudV44"),
        emitters: DynArray("ModelParticleEmitterV44")
      },
      ModelParticleCloudV44: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV44: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV44"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV44"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV44"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV44: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV44: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV44: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV44: {
        streaks: DynArray("ModelStreakV44"),
        anchors: DynArray("ModelStreakAnchorV44")
      },
      ModelStreakV44: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV44: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV44: {
        effectLights: DynArray("ModelEffectLightV44")
      },
      ModelEffectLightV44: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV44: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV44"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV44"),
        lod1Constraints: DynArray("ModelClothConstraintV44"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV44")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV44: {
        weights: DynArray("ModelClothBoneWeightV44")
      },
      ModelClothBoneWeightV44: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV44: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV44: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV44: {
        systems: DynArray("ModelLightningSystemV44"),
        bolts: DynArray("ModelLightningBoltV44"),
        nodes: DynArray("ModelLightningNodeV44")
      },
      ModelLightningSystemV44: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV44: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV44: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV44: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV44"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV44: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV44: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV44"),
      meshes: RefArray("ModelMeshDataV44"),
      model: Pointer("ModelModelDataV44"),
      properties: DynArray("ModelPropertyDataV44"),
      cloudData: Pointer("ModelCloudDataV44"),
      obstacles: DynArray("ModelObstacleDataV44"),
      streakData: Pointer("ModelStreakDataV44"),
      lightData: Pointer("ModelLightDataV44"),
      clothData: DynArray("ModelClothDataV44"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV44"),
      boneConstraints: DynArray("ModelBoneConstraintV44"),
      softBodyData: DynArray("ModelSoftBodyDataV44")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV45",
    version: 45,
    definitions: {
      ModelMaterialDataV45: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV45"),
        constants: DynArray("ModelConstantDataV45"),
        matConstLinks: DynArray("ModelMatConstLinkV45"),
        uvTransLinks: DynArray("ModelUVTransLinkV45"),
        texTransforms: DynArray("ModelMaterialTexTransformV45")
      },
      ModelTextureDataV45: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV45: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV45: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV45: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV45: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV45: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV45"),
        morphTargets: DynArray("ModelMeshMorphTargetV45"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV45: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV45: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV45: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV45"),
        InitialPlacement: "ModelTransformDataV45",
        MeshBindings: DynArray("ModelMeshBindingDataV45"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV45"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV45: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV45"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV45: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV45",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV45: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV45: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV45: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV45: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV45: {
        clouds: DynArray("ModelParticleCloudV45"),
        emitters: DynArray("ModelParticleEmitterV45")
      },
      ModelParticleCloudV45: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV45: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV45"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV45"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV45"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV45: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV45: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV45: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV45: {
        streaks: DynArray("ModelStreakV45"),
        anchors: DynArray("ModelStreakAnchorV45")
      },
      ModelStreakV45: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV45: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV45: {
        effectLights: DynArray("ModelEffectLightV45")
      },
      ModelEffectLightV45: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV45: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV45"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV45"),
        lod1Constraints: DynArray("ModelClothConstraintV45"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV45")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV45: {
        weights: DynArray("ModelClothBoneWeightV45")
      },
      ModelClothBoneWeightV45: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV45: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV45: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV45: {
        systems: DynArray("ModelLightningSystemV45"),
        bolts: DynArray("ModelLightningBoltV45"),
        nodes: DynArray("ModelLightningNodeV45")
      },
      ModelLightningSystemV45: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV45: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV45: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV45: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV45"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV45: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV45: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV45"),
      meshes: RefArray("ModelMeshDataV45"),
      model: Pointer("ModelModelDataV45"),
      properties: DynArray("ModelPropertyDataV45"),
      cloudData: Pointer("ModelCloudDataV45"),
      obstacles: DynArray("ModelObstacleDataV45"),
      streakData: Pointer("ModelStreakDataV45"),
      lightData: Pointer("ModelLightDataV45"),
      clothData: DynArray("ModelClothDataV45"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV45"),
      boneConstraints: DynArray("ModelBoneConstraintV45"),
      softBodyData: DynArray("ModelSoftBodyDataV45")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV46",
    version: 46,
    definitions: {
      ModelMaterialDataV46: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV46"),
        constants: DynArray("ModelConstantDataV46"),
        matConstLinks: DynArray("ModelMatConstLinkV46"),
        uvTransLinks: DynArray("ModelUVTransLinkV46"),
        texTransforms: DynArray("ModelMaterialTexTransformV46")
      },
      ModelTextureDataV46: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV46: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV46: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV46: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV46: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV46: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV46"),
        morphTargets: DynArray("ModelMeshMorphTargetV46"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV46: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV46: {
        positionIndices: DynArray(Uint16),
        positions: DynArray(FixedArray(Float32, 3)),
        normalIndices: DynArray(Uint16),
        normals: DynArray(FixedArray(Float32, 3)),
        meshName: CString
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV46: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV46"),
        InitialPlacement: "ModelTransformDataV46",
        MeshBindings: DynArray("ModelMeshBindingDataV46"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV46"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV46: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV46"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV46: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV46",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV46: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV46: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV46: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV46: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV46: {
        clouds: DynArray("ModelParticleCloudV46"),
        emitters: DynArray("ModelParticleEmitterV46")
      },
      ModelParticleCloudV46: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV46: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV46"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV46"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV46"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV46: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV46: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV46: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV46: {
        streaks: DynArray("ModelStreakV46"),
        anchors: DynArray("ModelStreakAnchorV46")
      },
      ModelStreakV46: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV46: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV46: {
        effectLights: DynArray("ModelEffectLightV46")
      },
      ModelEffectLightV46: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV46: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV46"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV46"),
        lod1Constraints: DynArray("ModelClothConstraintV46"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV46")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV46: {
        weights: DynArray("ModelClothBoneWeightV46")
      },
      ModelClothBoneWeightV46: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV46: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV46: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV46: {
        systems: DynArray("ModelLightningSystemV46"),
        bolts: DynArray("ModelLightningBoltV46"),
        nodes: DynArray("ModelLightningNodeV46")
      },
      ModelLightningSystemV46: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV46: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV46: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV46: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV46"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV46: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV46: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV46"),
      meshes: RefArray("ModelMeshDataV46"),
      model: Pointer("ModelModelDataV46"),
      properties: DynArray("ModelPropertyDataV46"),
      cloudData: Pointer("ModelCloudDataV46"),
      obstacles: DynArray("ModelObstacleDataV46"),
      streakData: Pointer("ModelStreakDataV46"),
      lightData: Pointer("ModelLightDataV46"),
      clothData: DynArray("ModelClothDataV46"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV46"),
      boneConstraints: DynArray("ModelBoneConstraintV46"),
      softBodyData: DynArray("ModelSoftBodyDataV46")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV47",
    version: 47,
    definitions: {
      ModelMaterialDataV47: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV47"),
        constants: DynArray("ModelConstantDataV47"),
        matConstLinks: DynArray("ModelMatConstLinkV47"),
        uvTransLinks: DynArray("ModelUVTransLinkV47"),
        texTransforms: DynArray("ModelMaterialTexTransformV47")
      },
      ModelTextureDataV47: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV47: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV47: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV47: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV47: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV47: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV47"),
        morphTargets: DynArray("ModelMeshMorphTargetV47"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3)
      },
      ModelMeshLodDataV47: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV47: {
        positions: DynArray("ModelMeshMorphVertV47"),
        normals: DynArray("ModelMeshMorphVertV47"),
        mesh: Uint64
      },
      ModelMeshMorphVertV47: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      ModelModelDataV47: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV47"),
        InitialPlacement: "ModelTransformDataV47",
        MeshBindings: DynArray("ModelMeshBindingDataV47"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV47"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV47: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV47"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV47: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV47",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV47: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV47: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV47: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV47: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV47: {
        clouds: DynArray("ModelParticleCloudV47"),
        emitters: DynArray("ModelParticleEmitterV47")
      },
      ModelParticleCloudV47: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV47: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV47"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV47"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV47"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV47: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV47: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV47: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV47: {
        streaks: DynArray("ModelStreakV47"),
        anchors: DynArray("ModelStreakAnchorV47")
      },
      ModelStreakV47: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV47: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV47: {
        effectLights: DynArray("ModelEffectLightV47")
      },
      ModelEffectLightV47: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV47: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV47"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV47"),
        lod1Constraints: DynArray("ModelClothConstraintV47"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV47")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV47: {
        weights: DynArray("ModelClothBoneWeightV47")
      },
      ModelClothBoneWeightV47: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV47: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV47: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV47: {
        systems: DynArray("ModelLightningSystemV47"),
        bolts: DynArray("ModelLightningBoltV47"),
        nodes: DynArray("ModelLightningNodeV47")
      },
      ModelLightningSystemV47: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV47: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV47: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV47: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV47"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV47: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV47: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV47"),
      meshes: RefArray("ModelMeshDataV47"),
      model: Pointer("ModelModelDataV47"),
      properties: DynArray("ModelPropertyDataV47"),
      cloudData: Pointer("ModelCloudDataV47"),
      obstacles: DynArray("ModelObstacleDataV47"),
      streakData: Pointer("ModelStreakDataV47"),
      lightData: Pointer("ModelLightDataV47"),
      clothData: DynArray("ModelClothDataV47"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV47"),
      boneConstraints: DynArray("ModelBoneConstraintV47"),
      softBodyData: DynArray("ModelSoftBodyDataV47")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV48",
    version: 48,
    definitions: {
      ModelMaterialDataV48: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV48"),
        constants: DynArray("ModelConstantDataV48"),
        matConstLinks: DynArray("ModelMatConstLinkV48"),
        uvTransLinks: DynArray("ModelUVTransLinkV48"),
        texTransforms: DynArray("ModelMaterialTexTransformV48")
      },
      ModelTextureDataV48: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV48: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV48: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV48: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV48: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV48: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV48"),
        morphTargets: DynArray("ModelMeshMorphTargetV48"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData")
      },
      ModelMeshLodDataV48: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV48: {
        positions: DynArray("ModelMeshMorphVertV48"),
        normals: DynArray("ModelMeshMorphVertV48"),
        mesh: Uint64
      },
      ModelMeshMorphVertV48: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV48: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV48"),
        InitialPlacement: "ModelTransformDataV48",
        MeshBindings: DynArray("ModelMeshBindingDataV48"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV48"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV48: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV48"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV48: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV48",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV48: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV48: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV48: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV48: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV48: {
        clouds: DynArray("ModelParticleCloudV48"),
        emitters: DynArray("ModelParticleEmitterV48")
      },
      ModelParticleCloudV48: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV48: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV48"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV48"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV48"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV48: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV48: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV48: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV48: {
        streaks: DynArray("ModelStreakV48"),
        anchors: DynArray("ModelStreakAnchorV48")
      },
      ModelStreakV48: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV48: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV48: {
        effectLights: DynArray("ModelEffectLightV48")
      },
      ModelEffectLightV48: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV48: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV48"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV48"),
        lod1Constraints: DynArray("ModelClothConstraintV48"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV48")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV48: {
        weights: DynArray("ModelClothBoneWeightV48")
      },
      ModelClothBoneWeightV48: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV48: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV48: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV48: {
        systems: DynArray("ModelLightningSystemV48"),
        bolts: DynArray("ModelLightningBoltV48"),
        nodes: DynArray("ModelLightningNodeV48")
      },
      ModelLightningSystemV48: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV48: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV48: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV48: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV48"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV48: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV48: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV48"),
      meshes: RefArray("ModelMeshDataV48"),
      model: Pointer("ModelModelDataV48"),
      properties: DynArray("ModelPropertyDataV48"),
      cloudData: Pointer("ModelCloudDataV48"),
      obstacles: DynArray("ModelObstacleDataV48"),
      streakData: Pointer("ModelStreakDataV48"),
      lightData: Pointer("ModelLightDataV48"),
      clothData: DynArray("ModelClothDataV48"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV48"),
      boneConstraints: DynArray("ModelBoneConstraintV48"),
      softBodyData: DynArray("ModelSoftBodyDataV48")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV49",
    version: 49,
    definitions: {
      ModelMaterialDataV49: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV49"),
        constants: DynArray("ModelConstantDataV49"),
        matConstLinks: DynArray("ModelMatConstLinkV49"),
        uvTransLinks: DynArray("ModelUVTransLinkV49"),
        texTransforms: DynArray("ModelMaterialTexTransformV49")
      },
      ModelTextureDataV49: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV49: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV49: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV49: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV49: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV49: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV49"),
        morphTargets: DynArray("ModelMeshMorphTargetV49"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData")
      },
      ModelMeshLodDataV49: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV49: {
        positions: DynArray("ModelMeshMorphVertV49"),
        normals: DynArray("ModelMeshMorphVertV49"),
        mesh: Uint64
      },
      ModelMeshMorphVertV49: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV49: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV49"),
        InitialPlacement: "ModelTransformDataV49",
        MeshBindings: DynArray("ModelMeshBindingDataV49"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV49"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV49: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV49"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV49: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV49",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV49: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV49: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV49: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV49: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV49: {
        clouds: DynArray("ModelParticleCloudV49"),
        emitters: DynArray("ModelParticleEmitterV49")
      },
      ModelParticleCloudV49: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV49: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV49"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV49"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV49"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV49: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV49: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV49: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV49: {
        streaks: DynArray("ModelStreakV49"),
        anchors: DynArray("ModelStreakAnchorV49")
      },
      ModelStreakV49: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV49: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV49: {
        effectLights: DynArray("ModelEffectLightV49")
      },
      ModelEffectLightV49: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV49: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV49"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV49"),
        lod1Constraints: DynArray("ModelClothConstraintV49"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV49")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV49: {
        weights: DynArray("ModelClothBoneWeightV49")
      },
      ModelClothBoneWeightV49: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV49: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV49: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV49: {
        systems: DynArray("ModelLightningSystemV49"),
        bolts: DynArray("ModelLightningBoltV49"),
        nodes: DynArray("ModelLightningNodeV49")
      },
      ModelLightningSystemV49: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV49: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV49: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV49: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV49"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV49: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV49: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV49: {
        bone: Uint64,
        offset: FixedArray(Float32, 3)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV49"),
      meshes: RefArray("ModelMeshDataV49"),
      model: Pointer("ModelModelDataV49"),
      properties: DynArray("ModelPropertyDataV49"),
      cloudData: Pointer("ModelCloudDataV49"),
      obstacles: DynArray("ModelObstacleDataV49"),
      streakData: Pointer("ModelStreakDataV49"),
      lightData: Pointer("ModelLightDataV49"),
      clothData: DynArray("ModelClothDataV49"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV49"),
      boneConstraints: DynArray("ModelBoneConstraintV49"),
      softBodyData: DynArray("ModelSoftBodyDataV49"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV49")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV50",
    version: 50,
    definitions: {
      ModelMaterialDataV50: {
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV50"),
        constants: DynArray("ModelConstantDataV50"),
        matConstLinks: DynArray("ModelMatConstLinkV50"),
        uvTransLinks: DynArray("ModelUVTransLinkV50"),
        texTransforms: DynArray("ModelMaterialTexTransformV50")
      },
      ModelTextureDataV50: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV50: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV50: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV50: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV50: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV50: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV50"),
        morphTargets: DynArray("ModelMeshMorphTargetV50"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData")
      },
      ModelMeshLodDataV50: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV50: {
        positions: DynArray("ModelMeshMorphVertV50"),
        normals: DynArray("ModelMeshMorphVertV50"),
        mesh: Uint64
      },
      ModelMeshMorphVertV50: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV50: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV50"),
        InitialPlacement: "ModelTransformDataV50",
        MeshBindings: DynArray("ModelMeshBindingDataV50"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV50"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV50: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV50"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV50: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV50",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV50: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV50: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV50: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV50: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV50: {
        clouds: DynArray("ModelParticleCloudV50"),
        emitters: DynArray("ModelParticleEmitterV50")
      },
      ModelParticleCloudV50: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV50: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV50"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV50"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV50"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV50: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV50: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV50: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV50: {
        streaks: DynArray("ModelStreakV50"),
        anchors: DynArray("ModelStreakAnchorV50")
      },
      ModelStreakV50: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV50: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV50: {
        effectLights: DynArray("ModelEffectLightV50")
      },
      ModelEffectLightV50: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV50: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV50"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV50"),
        lod1Constraints: DynArray("ModelClothConstraintV50"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV50")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV50: {
        weights: DynArray("ModelClothBoneWeightV50")
      },
      ModelClothBoneWeightV50: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV50: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV50: {
        bone: Uint64,
        type: Uint8
      },
      ModelLightningDataV50: {
        systems: DynArray("ModelLightningSystemV50"),
        bolts: DynArray("ModelLightningBoltV50"),
        nodes: DynArray("ModelLightningNodeV50")
      },
      ModelLightningSystemV50: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV50: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV50: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: Float32,
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV50: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV50"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV50: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV50: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV50: {
        bone: Uint64,
        offset: FixedArray(Float32, 3)
      }
    },
    root: {
      materials: RefArray("ModelMaterialDataV50"),
      meshes: RefArray("ModelMeshDataV50"),
      model: Pointer("ModelModelDataV50"),
      properties: DynArray("ModelPropertyDataV50"),
      cloudData: Pointer("ModelCloudDataV50"),
      obstacles: DynArray("ModelObstacleDataV50"),
      streakData: Pointer("ModelStreakDataV50"),
      lightData: Pointer("ModelLightDataV50"),
      clothData: DynArray("ModelClothDataV50"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV50"),
      boneConstraints: DynArray("ModelBoneConstraintV50"),
      softBodyData: DynArray("ModelSoftBodyDataV50"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV50")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV51",
    version: 51,
    definitions: {
      ModelPermutationDataV51: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV51")
      },
      ModelMaterialDataV51: {
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV51"),
        constants: DynArray("ModelConstantDataV51"),
        matConstLinks: DynArray("ModelMatConstLinkV51"),
        uvTransLinks: DynArray("ModelUVTransLinkV51"),
        texTransforms: DynArray("ModelMaterialTexTransformV51")
      },
      ModelTextureDataV51: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV51: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV51: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV51: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV51: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV51: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV51"),
        morphTargets: DynArray("ModelMeshMorphTargetV51"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV51: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV51: {
        positions: DynArray("ModelMeshMorphVertV51"),
        normals: DynArray("ModelMeshMorphVertV51"),
        mesh: Uint64
      },
      ModelMeshMorphVertV51: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV51: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV51"),
        InitialPlacement: "ModelTransformDataV51",
        MeshBindings: DynArray("ModelMeshBindingDataV51"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV51"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV51: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV51"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV51: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV51",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV51: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV51: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV51: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV51: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV51: {
        clouds: DynArray("ModelParticleCloudV51"),
        emitters: DynArray("ModelParticleEmitterV51")
      },
      ModelParticleCloudV51: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV51: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV51"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV51"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV51"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV51: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV51: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV51: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV51: {
        streaks: DynArray("ModelStreakV51"),
        anchors: DynArray("ModelStreakAnchorV51")
      },
      ModelStreakV51: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV51: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV51: {
        effectLights: DynArray("ModelEffectLightV51")
      },
      ModelEffectLightV51: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV51: {
        materialIndex: Uint32,
        flags: Uint8,
        gravity: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV51"),
        softLocks: DynArray(Uint8),
        lod0Constraints: DynArray("ModelClothConstraintV51"),
        lod1Constraints: DynArray("ModelClothConstraintV51"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV51")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV51: {
        weights: DynArray("ModelClothBoneWeightV51")
      },
      ModelClothBoneWeightV51: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothConstraintV51: {
        vertIndexA: Uint16,
        vertIndexB: Uint16,
        distance: Float32
      },
      ModelClothObstacleV51: {
        bone: Uint64,
        type: Uint8,
        depth: Float32,
        height: Float32,
        radius: Float32,
        width: Float32
      },
      ModelLightningDataV51: {
        systems: DynArray("ModelLightningSystemV51"),
        bolts: DynArray("ModelLightningBoltV51"),
        nodes: DynArray("ModelLightningNodeV51")
      },
      ModelLightningSystemV51: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV51: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV51: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV51: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV51"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV51: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV51: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV51: {
        bone: Uint64,
        offset: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV51"),
      meshes: RefArray("ModelMeshDataV51"),
      model: Pointer("ModelModelDataV51"),
      properties: DynArray("ModelPropertyDataV51"),
      cloudData: Pointer("ModelCloudDataV51"),
      obstacles: DynArray("ModelObstacleDataV51"),
      streakData: Pointer("ModelStreakDataV51"),
      lightData: Pointer("ModelLightDataV51"),
      clothData: DynArray("ModelClothDataV51"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV51"),
      boneConstraints: DynArray("ModelBoneConstraintV51"),
      softBodyData: DynArray("ModelSoftBodyDataV51"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV51")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV52",
    version: 52,
    definitions: {
      ModelPermutationDataV52: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV52")
      },
      ModelMaterialDataV52: {
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV52"),
        constants: DynArray("ModelConstantDataV52"),
        matConstLinks: DynArray("ModelMatConstLinkV52"),
        uvTransLinks: DynArray("ModelUVTransLinkV52"),
        texTransforms: DynArray("ModelMaterialTexTransformV52")
      },
      ModelTextureDataV52: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV52: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV52: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV52: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV52: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV52: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV52"),
        morphTargets: DynArray("ModelMeshMorphTargetV52"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV52: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV52: {
        positions: DynArray("ModelMeshMorphVertV52"),
        normals: DynArray("ModelMeshMorphVertV52"),
        mesh: Uint64
      },
      ModelMeshMorphVertV52: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV52: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV52"),
        InitialPlacement: "ModelTransformDataV52",
        MeshBindings: DynArray("ModelMeshBindingDataV52"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV52"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV52: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV52"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV52: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV52",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV52: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV52: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV52: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV52: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV52: {
        clouds: DynArray("ModelParticleCloudV52"),
        emitters: DynArray("ModelParticleEmitterV52")
      },
      ModelParticleCloudV52: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV52: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV52"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV52"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV52"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV52: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV52: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV52: {
        bone: Uint64,
        dragCoef: Float32,
        flags: Uint32,
        geoData: FixedArray(Float32, 3),
        gravityCoef: Float32,
        response: Uint8,
        type: Uint8
      },
      ModelStreakDataV52: {
        streaks: DynArray("ModelStreakV52"),
        anchors: DynArray("ModelStreakAnchorV52")
      },
      ModelStreakV52: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV52: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV52: {
        effectLights: DynArray("ModelEffectLightV52")
      },
      ModelEffectLightV52: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV52: {
        materialIndex: Uint32,
        flags: Uint8,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV52"),
        softLocks: DynArray("ModelClothSoftLockV52"),
        lod0Constraints: DynArray("ModelClothConstraintV52"),
        lod1Constraints: DynArray("ModelClothConstraintV52"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacles: DynArray("ModelClothObstacleV52")
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV52: {
        weights: DynArray("ModelClothBoneWeightV52")
      },
      ModelClothBoneWeightV52: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV52: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV52: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelClothObstacleV52: {
        bone: Uint64,
        type: Uint8,
        depth: Float32,
        height: Float32,
        radius: Float32,
        width: Float32
      },
      ModelLightningDataV52: {
        systems: DynArray("ModelLightningSystemV52"),
        bolts: DynArray("ModelLightningBoltV52"),
        nodes: DynArray("ModelLightningNodeV52")
      },
      ModelLightningSystemV52: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV52: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV52: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV52: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV52"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV52: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV52: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV52: {
        bone: Uint64,
        offset: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV52"),
      meshes: RefArray("ModelMeshDataV52"),
      model: Pointer("ModelModelDataV52"),
      properties: DynArray("ModelPropertyDataV52"),
      cloudData: Pointer("ModelCloudDataV52"),
      obstacles: DynArray("ModelObstacleDataV52"),
      streakData: Pointer("ModelStreakDataV52"),
      lightData: Pointer("ModelLightDataV52"),
      clothData: DynArray("ModelClothDataV52"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV52"),
      boneConstraints: DynArray("ModelBoneConstraintV52"),
      softBodyData: DynArray("ModelSoftBodyDataV52"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV52")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV53",
    version: 53,
    definitions: {
      ModelPermutationDataV53: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV53")
      },
      ModelMaterialDataV53: {
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        texCoordCount: Uint8,
        textures: DynArray("ModelTextureDataV53"),
        constants: DynArray("ModelConstantDataV53"),
        matConstLinks: DynArray("ModelMatConstLinkV53"),
        uvTransLinks: DynArray("ModelUVTransLinkV53"),
        texTransforms: DynArray("ModelMaterialTexTransformV53")
      },
      ModelTextureDataV53: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV53: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV53: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV53: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV53: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV53: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV53"),
        morphTargets: DynArray("ModelMeshMorphTargetV53"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV53: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV53: {
        positions: DynArray("ModelMeshMorphVertV53"),
        normals: DynArray("ModelMeshMorphVertV53"),
        mesh: Uint64
      },
      ModelMeshMorphVertV53: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV53: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV53"),
        InitialPlacement: "ModelTransformDataV53",
        MeshBindings: DynArray("ModelMeshBindingDataV53"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV53"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV53: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV53"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8)
      },
      ModelBoneDataV53: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV53",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV53: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelMeshBindingDataV53: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV53: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV53: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV53: {
        clouds: DynArray("ModelParticleCloudV53"),
        emitters: DynArray("ModelParticleEmitterV53")
      },
      ModelParticleCloudV53: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV53: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentType: Uint8,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV53"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV53"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV53"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnShape: Uint8,
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        windInfluence: Uint8
      },
      ModelParticleCurveV53: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV53: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelObstacleDataV53: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V53")
      },
      ModelMatrix43V53: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelStreakDataV53: {
        streaks: DynArray("ModelStreakV53"),
        anchors: DynArray("ModelStreakAnchorV53")
      },
      ModelStreakV53: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV53: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV53: {
        effectLights: DynArray("ModelEffectLightV53")
      },
      ModelEffectLightV53: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV53: {
        materialIndex: Uint32,
        flags: Uint8,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        rigidness: Uint8,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        lockCount: Uint16,
        groups: DynArray("ModelClothMeshGroupV53"),
        softLocks: DynArray("ModelClothSoftLockV53"),
        lod0Constraints: DynArray("ModelClothConstraintV53"),
        lod1Constraints: DynArray("ModelClothConstraintV53"),
        lod1VertexCount: Uint16,
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32)
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV53: {
        weights: DynArray("ModelClothBoneWeightV53")
      },
      ModelClothBoneWeightV53: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV53: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV53: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV53: {
        systems: DynArray("ModelLightningSystemV53"),
        bolts: DynArray("ModelLightningBoltV53"),
        nodes: DynArray("ModelLightningNodeV53")
      },
      ModelLightningSystemV53: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV53: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV53: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV53: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV53"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV53: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV53: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV53: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV53"),
      meshes: RefArray("ModelMeshDataV53"),
      model: Pointer("ModelModelDataV53"),
      properties: DynArray("ModelPropertyDataV53"),
      cloudData: Pointer("ModelCloudDataV53"),
      obstacles: DynArray("ModelObstacleDataV53"),
      streakData: Pointer("ModelStreakDataV53"),
      lightData: Pointer("ModelLightDataV53"),
      clothData: DynArray("ModelClothDataV53"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV53"),
      boneConstraints: DynArray("ModelBoneConstraintV53"),
      softBodyData: DynArray("ModelSoftBodyDataV53"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV53")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV54",
    version: 54,
    definitions: {
      ModelPermutationDataV54: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV54")
      },
      ModelMaterialDataV54: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV54"),
        constants: DynArray("ModelConstantDataV54"),
        matConstLinks: DynArray("ModelMatConstLinkV54"),
        uvTransLinks: DynArray("ModelUVTransLinkV54"),
        texTransforms: DynArray("ModelMaterialTexTransformV54"),
        texCoordCount: Uint8
      },
      ModelTextureDataV54: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV54: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV54: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV54: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV54: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV54: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV54"),
        morphTargets: DynArray("ModelMeshMorphTargetV54"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV54: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV54: {
        positions: DynArray("ModelMeshMorphVertV54"),
        normals: DynArray("ModelMeshMorphVertV54"),
        mesh: Uint64
      },
      ModelMeshMorphVertV54: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV54: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV54"),
        InitialPlacement: "ModelTransformDataV54",
        MeshBindings: DynArray("ModelMeshBindingDataV54"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV54"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV54: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV54"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV54")
      },
      ModelBoneDataV54: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV54",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV54: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV54: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV54: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV54: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV54: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV54: {
        clouds: DynArray("ModelParticleCloudV54"),
        emitters: DynArray("ModelParticleEmitterV54")
      },
      ModelParticleCloudV54: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV54: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV54"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV54"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV54"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V54"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV54: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV54: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V54: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV54: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V54")
      },
      ModelStreakDataV54: {
        streaks: DynArray("ModelStreakV54"),
        anchors: DynArray("ModelStreakAnchorV54")
      },
      ModelStreakV54: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV54: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV54: {
        effectLights: DynArray("ModelEffectLightV54")
      },
      ModelEffectLightV54: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV54: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV54"),
        softLocks: DynArray("ModelClothSoftLockV54"),
        lod0Constraints: DynArray("ModelClothConstraintV54"),
        lod1Constraints: DynArray("ModelClothConstraintV54"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV54: {
        weights: DynArray("ModelClothBoneWeightV54")
      },
      ModelClothBoneWeightV54: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV54: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV54: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV54: {
        systems: DynArray("ModelLightningSystemV54"),
        bolts: DynArray("ModelLightningBoltV54"),
        nodes: DynArray("ModelLightningNodeV54")
      },
      ModelLightningSystemV54: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV54: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV54: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV54: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV54"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV54: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV54: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV54: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV54"),
      meshes: RefArray("ModelMeshDataV54"),
      model: Pointer("ModelModelDataV54"),
      properties: DynArray("ModelPropertyDataV54"),
      cloudData: Pointer("ModelCloudDataV54"),
      obstacles: DynArray("ModelObstacleDataV54"),
      streakData: Pointer("ModelStreakDataV54"),
      lightData: Pointer("ModelLightDataV54"),
      clothData: DynArray("ModelClothDataV54"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV54"),
      boneConstraints: DynArray("ModelBoneConstraintV54"),
      softBodyData: DynArray("ModelSoftBodyDataV54"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV54")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV55",
    version: 55,
    definitions: {
      ModelPermutationDataV55: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV55")
      },
      ModelMaterialDataV55: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV55"),
        constants: DynArray("ModelConstantDataV55"),
        matConstLinks: DynArray("ModelMatConstLinkV55"),
        uvTransLinks: DynArray("ModelUVTransLinkV55"),
        texTransforms: DynArray("ModelMaterialTexTransformV55"),
        texCoordCount: Uint8
      },
      ModelTextureDataV55: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV55: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV55: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV55: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV55: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV55: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV55"),
        morphTargets: DynArray("ModelMeshMorphTargetV55"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV55: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV55: {
        positions: DynArray("ModelMeshMorphVertV55"),
        normals: DynArray("ModelMeshMorphVertV55"),
        mesh: Uint64
      },
      ModelMeshMorphVertV55: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV55: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV55"),
        InitialPlacement: "ModelTransformDataV55",
        MeshBindings: DynArray("ModelMeshBindingDataV55"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV55"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV55: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV55"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV55")
      },
      ModelBoneDataV55: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV55",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV55: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV55: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV55: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV55: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV55: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV55: {
        clouds: DynArray("ModelParticleCloudV55"),
        emitters: DynArray("ModelParticleEmitterV55")
      },
      ModelParticleCloudV55: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV55: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV55"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV55"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV55"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V55"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV55: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV55: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V55: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV55: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V55")
      },
      ModelStreakDataV55: {
        streaks: DynArray("ModelStreakV55"),
        anchors: DynArray("ModelStreakAnchorV55")
      },
      ModelStreakV55: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV55: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV55: {
        effectLights: DynArray("ModelEffectLightV55")
      },
      ModelEffectLightV55: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV55: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV55"),
        softLocks: DynArray("ModelClothSoftLockV55"),
        lod0Constraints: DynArray("ModelClothConstraintV55"),
        lod1Constraints: DynArray("ModelClothConstraintV55"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV55: {
        weights: DynArray("ModelClothBoneWeightV55")
      },
      ModelClothBoneWeightV55: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV55: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV55: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV55: {
        systems: DynArray("ModelLightningSystemV55"),
        bolts: DynArray("ModelLightningBoltV55"),
        nodes: DynArray("ModelLightningNodeV55")
      },
      ModelLightningSystemV55: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV55: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV55: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV55: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV55"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV55: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV55: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV55: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV55"),
      meshes: RefArray("ModelMeshDataV55"),
      model: Pointer("ModelModelDataV55"),
      properties: DynArray("ModelPropertyDataV55"),
      cloudData: Pointer("ModelCloudDataV55"),
      obstacles: DynArray("ModelObstacleDataV55"),
      streakData: Pointer("ModelStreakDataV55"),
      lightData: Pointer("ModelLightDataV55"),
      clothData: DynArray("ModelClothDataV55"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV55"),
      boneConstraints: DynArray("ModelBoneConstraintV55"),
      softBodyData: DynArray("ModelSoftBodyDataV55"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV55")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV56",
    version: 56,
    definitions: {
      ModelPermutationDataV56: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV56")
      },
      ModelMaterialDataV56: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV56"),
        constants: DynArray("ModelConstantDataV56"),
        matConstLinks: DynArray("ModelMatConstLinkV56"),
        uvTransLinks: DynArray("ModelUVTransLinkV56"),
        texTransforms: DynArray("ModelMaterialTexTransformV56"),
        texCoordCount: Uint8
      },
      ModelTextureDataV56: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV56: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV56: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV56: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV56: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV56: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV56"),
        morphTargets: DynArray("ModelMeshMorphTargetV56"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV56: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV56: {
        positions: DynArray("ModelMeshMorphVertV56"),
        normals: DynArray("ModelMeshMorphVertV56"),
        mesh: Uint64
      },
      ModelMeshMorphVertV56: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV56: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV56"),
        InitialPlacement: "ModelTransformDataV56",
        MeshBindings: DynArray("ModelMeshBindingDataV56"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV56"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV56: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV56"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV56")
      },
      ModelBoneDataV56: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV56",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV56: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV56: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV56: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV56: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV56: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV56: {
        clouds: DynArray("ModelParticleCloudV56"),
        emitters: DynArray("ModelParticleEmitterV56")
      },
      ModelParticleCloudV56: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV56: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV56"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV56"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV56"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V56"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV56: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV56: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V56: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV56: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V56")
      },
      ModelStreakDataV56: {
        streaks: DynArray("ModelStreakV56"),
        anchors: DynArray("ModelStreakAnchorV56")
      },
      ModelStreakV56: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV56: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV56: {
        effectLights: DynArray("ModelEffectLightV56")
      },
      ModelEffectLightV56: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV56: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV56"),
        softLocks: DynArray("ModelClothSoftLockV56"),
        lod0Constraints: DynArray("ModelClothConstraintV56"),
        lod1Constraints: DynArray("ModelClothConstraintV56"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV56: {
        weights: DynArray("ModelClothBoneWeightV56")
      },
      ModelClothBoneWeightV56: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV56: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV56: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV56: {
        systems: DynArray("ModelLightningSystemV56"),
        bolts: DynArray("ModelLightningBoltV56"),
        nodes: DynArray("ModelLightningNodeV56")
      },
      ModelLightningSystemV56: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV56: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV56: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV56: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV56"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV56: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV56: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV56: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV56"),
      meshes: RefArray("ModelMeshDataV56"),
      model: Pointer("ModelModelDataV56"),
      properties: DynArray("ModelPropertyDataV56"),
      cloudData: Pointer("ModelCloudDataV56"),
      obstacles: DynArray("ModelObstacleDataV56"),
      streakData: Pointer("ModelStreakDataV56"),
      lightData: Pointer("ModelLightDataV56"),
      clothData: DynArray("ModelClothDataV56"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV56"),
      boneConstraints: DynArray("ModelBoneConstraintV56"),
      softBodyData: DynArray("ModelSoftBodyDataV56"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV56"),
      modelReference: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV57",
    version: 57,
    definitions: {
      ModelPermutationDataV57: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV57")
      },
      ModelMaterialDataV57: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV57"),
        constants: DynArray("ModelConstantDataV57"),
        matConstLinks: DynArray("ModelMatConstLinkV57"),
        uvTransLinks: DynArray("ModelUVTransLinkV57"),
        texTransforms: DynArray("ModelMaterialTexTransformV57"),
        texCoordCount: Uint8
      },
      ModelTextureDataV57: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV57: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV57: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV57: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV57: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV57: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV57"),
        morphTargets: DynArray("ModelMeshMorphTargetV57"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV57: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV57: {
        positions: DynArray("ModelMeshMorphVertV57"),
        normals: DynArray("ModelMeshMorphVertV57"),
        mesh: Uint64
      },
      ModelMeshMorphVertV57: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV57: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV57"),
        InitialPlacement: "ModelTransformDataV57",
        MeshBindings: DynArray("ModelMeshBindingDataV57"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV57"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV57: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV57"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV57")
      },
      ModelBoneDataV57: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV57",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV57: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV57: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV57: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV57: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV57: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV57: {
        clouds: DynArray("ModelParticleCloudV57"),
        emitters: DynArray("ModelParticleEmitterV57")
      },
      ModelParticleCloudV57: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV57: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV57"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV57"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV57"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V57"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV57: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV57: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V57: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV57: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V57")
      },
      ModelStreakDataV57: {
        streaks: DynArray("ModelStreakV57"),
        anchors: DynArray("ModelStreakAnchorV57")
      },
      ModelStreakV57: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV57: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV57: {
        effectLights: DynArray("ModelEffectLightV57")
      },
      ModelEffectLightV57: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV57: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV57"),
        softLocks: DynArray("ModelClothSoftLockV57"),
        lod0Constraints: DynArray("ModelClothConstraintV57"),
        lod1Constraints: DynArray("ModelClothConstraintV57"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV57: {
        weights: DynArray("ModelClothBoneWeightV57")
      },
      ModelClothBoneWeightV57: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV57: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV57: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV57: {
        systems: DynArray("ModelLightningSystemV57"),
        bolts: DynArray("ModelLightningBoltV57"),
        nodes: DynArray("ModelLightningNodeV57")
      },
      ModelLightningSystemV57: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV57: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        fps: Float32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        period: Float32,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thickness: Float32,
        thicknessPreset: Uint8,
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV57: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV57: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV57"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV57: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV57: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV57: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelFixedOffsetDataV57: {
        name: Uint64,
        parentBone: Uint64,
        translation: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV57"),
      meshes: RefArray("ModelMeshDataV57"),
      model: Pointer("ModelModelDataV57"),
      properties: DynArray("ModelPropertyDataV57"),
      cloudData: Pointer("ModelCloudDataV57"),
      obstacles: DynArray("ModelObstacleDataV57"),
      streakData: Pointer("ModelStreakDataV57"),
      lightData: Pointer("ModelLightDataV57"),
      clothData: DynArray("ModelClothDataV57"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV57"),
      boneConstraints: DynArray("ModelBoneConstraintV57"),
      softBodyData: DynArray("ModelSoftBodyDataV57"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV57"),
      fixedOffsetData: DynArray("ModelFixedOffsetDataV57"),
      modelReference: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV58",
    version: 58,
    definitions: {
      ModelPermutationDataV58: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV58")
      },
      ModelMaterialDataV58: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV58"),
        constants: DynArray("ModelConstantDataV58"),
        matConstLinks: DynArray("ModelMatConstLinkV58"),
        uvTransLinks: DynArray("ModelUVTransLinkV58"),
        texTransforms: DynArray("ModelMaterialTexTransformV58"),
        texCoordCount: Uint8
      },
      ModelTextureDataV58: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV58: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV58: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV58: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV58: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV58: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV58"),
        morphTargets: DynArray("ModelMeshMorphTargetV58"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV58: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV58: {
        positions: DynArray("ModelMeshMorphVertV58"),
        normals: DynArray("ModelMeshMorphVertV58"),
        mesh: Uint64
      },
      ModelMeshMorphVertV58: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV58: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV58"),
        InitialPlacement: "ModelTransformDataV58",
        MeshBindings: DynArray("ModelMeshBindingDataV58"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV58"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV58: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV58"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV58")
      },
      ModelBoneDataV58: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV58",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV58: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV58: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV58: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV58: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV58: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV58: {
        clouds: DynArray("ModelParticleCloudV58"),
        emitters: DynArray("ModelParticleEmitterV58")
      },
      ModelParticleCloudV58: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV58: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV58"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV58"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV58"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V58"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV58: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV58: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V58: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV58: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V58")
      },
      ModelStreakDataV58: {
        streaks: DynArray("ModelStreakV58"),
        anchors: DynArray("ModelStreakAnchorV58")
      },
      ModelStreakV58: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV58: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV58: {
        effectLights: DynArray("ModelEffectLightV58")
      },
      ModelEffectLightV58: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV58: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV58"),
        softLocks: DynArray("ModelClothSoftLockV58"),
        lod0Constraints: DynArray("ModelClothConstraintV58"),
        lod1Constraints: DynArray("ModelClothConstraintV58"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV58: {
        weights: DynArray("ModelClothBoneWeightV58")
      },
      ModelClothBoneWeightV58: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV58: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV58: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV58: {
        systems: DynArray("ModelLightningSystemV58"),
        bolts: DynArray("ModelLightningBoltV58"),
        nodes: DynArray("ModelLightningNodeV58")
      },
      ModelLightningSystemV58: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV58: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV58"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV58: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV58: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV58"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV58: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV58: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV58: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelFixedOffsetDataV58: {
        name: Uint64,
        parentBone: Uint64,
        translation: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV58"),
      meshes: RefArray("ModelMeshDataV58"),
      model: Pointer("ModelModelDataV58"),
      properties: DynArray("ModelPropertyDataV58"),
      cloudData: Pointer("ModelCloudDataV58"),
      obstacles: DynArray("ModelObstacleDataV58"),
      streakData: Pointer("ModelStreakDataV58"),
      lightData: Pointer("ModelLightDataV58"),
      clothData: DynArray("ModelClothDataV58"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV58"),
      boneConstraints: DynArray("ModelBoneConstraintV58"),
      softBodyData: DynArray("ModelSoftBodyDataV58"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV58"),
      fixedOffsetData: DynArray("ModelFixedOffsetDataV58"),
      modelReference: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV59",
    version: 59,
    definitions: {
      ModelPermutationDataV59: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV59")
      },
      ModelMaterialDataV59: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV59"),
        constants: DynArray("ModelConstantDataV59"),
        matConstLinks: DynArray("ModelMatConstLinkV59"),
        uvTransLinks: DynArray("ModelUVTransLinkV59"),
        texTransforms: DynArray("ModelMaterialTexTransformV59"),
        texCoordCount: Uint8
      },
      ModelTextureDataV59: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV59: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV59: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV59: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV59: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV59: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV59"),
        morphTargets: DynArray("ModelMeshMorphTargetV59"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV59: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV59: {
        positions: DynArray("ModelMeshMorphVertV59"),
        normals: DynArray("ModelMeshMorphVertV59"),
        mesh: Uint64
      },
      ModelMeshMorphVertV59: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV59: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV59"),
        InitialPlacement: "ModelTransformDataV59",
        MeshBindings: DynArray("ModelMeshBindingDataV59"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV59"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV59: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV59"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV59")
      },
      ModelBoneDataV59: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV59",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV59: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV59: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV59: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV59: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV59: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV59: {
        clouds: DynArray("ModelParticleCloudV59"),
        emitters: DynArray("ModelParticleEmitterV59")
      },
      ModelParticleCloudV59: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV59: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV59"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV59"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV59"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V59"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV59: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV59: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V59: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV59: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V59")
      },
      ModelStreakDataV59: {
        streaks: DynArray("ModelStreakV59"),
        anchors: DynArray("ModelStreakAnchorV59")
      },
      ModelStreakV59: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV59: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV59: {
        effectLights: DynArray("ModelEffectLightV59")
      },
      ModelEffectLightV59: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV59: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV59"),
        softLocks: DynArray("ModelClothSoftLockV59"),
        lod0Constraints: DynArray("ModelClothConstraintV59"),
        lod1Constraints: DynArray("ModelClothConstraintV59"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV59: {
        weights: DynArray("ModelClothBoneWeightV59")
      },
      ModelClothBoneWeightV59: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothSoftLockV59: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV59: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV59: {
        systems: DynArray("ModelLightningSystemV59"),
        bolts: DynArray("ModelLightningBoltV59"),
        nodes: DynArray("ModelLightningNodeV59")
      },
      ModelLightningSystemV59: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV59: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV59"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV59: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV59: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV59"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV59: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV59: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV59: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelFixedOffsetDataV59: {
        name: Uint64,
        parentBone: Uint64,
        translation: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV59"),
      meshes: RefArray("ModelMeshDataV59"),
      model: Pointer("ModelModelDataV59"),
      properties: DynArray("ModelPropertyDataV59"),
      cloudData: Pointer("ModelCloudDataV59"),
      obstacles: DynArray("ModelObstacleDataV59"),
      streakData: Pointer("ModelStreakDataV59"),
      lightData: Pointer("ModelLightDataV59"),
      clothData: DynArray("ModelClothDataV59"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV59"),
      boneConstraints: DynArray("ModelBoneConstraintV59"),
      softBodyData: DynArray("ModelSoftBodyDataV59"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV59"),
      fixedOffsetData: DynArray("ModelFixedOffsetDataV59"),
      modelReference: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV60",
    version: 60,
    definitions: {
      ModelPermutationDataV60: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV60")
      },
      ModelMaterialDataV60: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV60"),
        constants: DynArray("ModelConstantDataV60"),
        matConstLinks: DynArray("ModelMatConstLinkV60"),
        uvTransLinks: DynArray("ModelUVTransLinkV60"),
        texTransforms: DynArray("ModelMaterialTexTransformV60"),
        texCoordCount: Uint8
      },
      ModelTextureDataV60: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV60: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV60: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV60: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV60: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV60: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV60"),
        morphTargets: DynArray("ModelMeshMorphTargetV60"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV60: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV60: {
        positions: DynArray("ModelMeshMorphVertV60"),
        normals: DynArray("ModelMeshMorphVertV60"),
        mesh: Uint64
      },
      ModelMeshMorphVertV60: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV60: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV60"),
        InitialPlacement: "ModelTransformDataV60",
        MeshBindings: DynArray("ModelMeshBindingDataV60"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV60"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV60: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV60"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV60")
      },
      ModelBoneDataV60: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV60",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV60: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV60: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV60: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV60: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV60: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV60: {
        clouds: DynArray("ModelParticleCloudV60"),
        emitters: DynArray("ModelParticleEmitterV60")
      },
      ModelParticleCloudV60: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV60: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV60"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV60"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV60"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V60"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV60: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV60: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V60: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV60: {
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V60")
      },
      ModelStreakDataV60: {
        streaks: DynArray("ModelStreakV60"),
        anchors: DynArray("ModelStreakAnchorV60")
      },
      ModelStreakV60: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV60: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV60: {
        effectLights: DynArray("ModelEffectLightV60")
      },
      ModelEffectLightV60: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV60: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV60"),
        groupBindings: DynArray("ModelClothGroupBindingV60"),
        softLocks: DynArray("ModelClothSoftLockV60"),
        lod0Constraints: DynArray("ModelClothConstraintV60"),
        lod1Constraints: DynArray("ModelClothConstraintV60"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV60: {
        weights: DynArray("ModelClothBoneWeightV60")
      },
      ModelClothBoneWeightV60: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothGroupBindingV60: {
        strippedToken: Uint64,
        boneName: CString,
        OBBMin: FixedArray(Float32, 3),
        OBBMax: FixedArray(Float32, 3)
      },
      ModelClothSoftLockV60: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV60: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelLightningDataV60: {
        systems: DynArray("ModelLightningSystemV60"),
        bolts: DynArray("ModelLightningBoltV60"),
        nodes: DynArray("ModelLightningNodeV60")
      },
      ModelLightningSystemV60: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV60: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV60"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV60: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV60: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV60"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV60: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV60: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV60: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelFixedOffsetDataV60: {
        name: Uint64,
        parentBone: Uint64,
        translation: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV60"),
      meshes: RefArray("ModelMeshDataV60"),
      model: Pointer("ModelModelDataV60"),
      properties: DynArray("ModelPropertyDataV60"),
      cloudData: Pointer("ModelCloudDataV60"),
      obstacles: DynArray("ModelObstacleDataV60"),
      streakData: Pointer("ModelStreakDataV60"),
      lightData: Pointer("ModelLightDataV60"),
      clothData: DynArray("ModelClothDataV60"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV60"),
      boneConstraints: DynArray("ModelBoneConstraintV60"),
      softBodyData: DynArray("ModelSoftBodyDataV60"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV60"),
      fixedOffsetData: DynArray("ModelFixedOffsetDataV60"),
      modelReference: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV61",
    version: 61,
    definitions: {
      ModelPermutationDataV61: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV61")
      },
      ModelMaterialDataV61: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV61"),
        constants: DynArray("ModelConstantDataV61"),
        matConstLinks: DynArray("ModelMatConstLinkV61"),
        uvTransLinks: DynArray("ModelUVTransLinkV61"),
        texTransforms: DynArray("ModelMaterialTexTransformV61"),
        texCoordCount: Uint8
      },
      ModelTextureDataV61: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV61: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV61: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV61: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV61: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV61: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV61"),
        morphTargets: DynArray("ModelMeshMorphTargetV61"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV61: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV61: {
        positions: DynArray("ModelMeshMorphVertV61"),
        normals: DynArray("ModelMeshMorphVertV61"),
        mesh: Uint64
      },
      ModelMeshMorphVertV61: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelModelDataV61: {
        Name: CString,
        Skeleton: Pointer("ModelSkeletonDataV61"),
        InitialPlacement: "ModelTransformDataV61",
        MeshBindings: DynArray("ModelMeshBindingDataV61"),
        ExtendedData: Pointer(Uint8),
        boneFlags: DynArray(Uint32),
        emitterBones: DynArray(Uint32),
        trackMasks: DynArray("ModelTrackMaskV61"),
        center: FixedArray(Float32, 3),
        radius: Float32
      },
      ModelSkeletonDataV61: {
        Name: CString,
        Bones: DynArray("ModelBoneDataV61"),
        LODType: Uint32,
        ExtendedData: Pointer(Uint8),
        boneSymmetries: DynArray("ModelBoneSymmetryV61")
      },
      ModelBoneDataV61: {
        Name: CString,
        ParentIndex: Uint32,
        LocalTransform: "ModelTransformDataV61",
        InverseWorld4x4: FixedArray(FixedArray(Float32, 4), 4),
        LODError: Float32,
        ExtendedData: Pointer(Uint8)
      },
      ModelTransformDataV61: {
        Flags: Uint32,
        Position: FixedArray(Float32, 3),
        Orientation: FixedArray(Float32, 4),
        ScaleShear: FixedArray(FixedArray(Float32, 3), 3)
      },
      ModelBoneSymmetryV61: {
        boneLeft: Uint64,
        boneRight: Uint64
      },
      ModelMeshBindingDataV61: {
        Mesh: Pointer(Uint8)
      },
      ModelTrackMaskV61: {
        trackMask: "PackGrannyTrackMaskType",
        token: Uint64
      },
      PackGrannyTrackMaskType: {
        trackMask: DynArray(Uint8)
      },
      ModelPropertyDataV61: {
        id: Uint64,
        type: Uint32,
        mergeIndex: Uint32,
        time: Float32,
        val: Uint64,
        strVal: Filename()
      },
      ModelCloudDataV61: {
        clouds: DynArray("ModelParticleCloudV61"),
        emitters: DynArray("ModelParticleEmitterV61")
      },
      ModelParticleCloudV61: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV61: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        affinity: Uint32,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV61"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV61"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV61"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V61"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV61: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV61: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V61: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV61: {
        affinity: Uint32,
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V61")
      },
      ModelStreakDataV61: {
        streaks: DynArray("ModelStreakV61"),
        anchors: DynArray("ModelStreakAnchorV61")
      },
      ModelStreakV61: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV61: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV61: {
        effectLights: DynArray("ModelEffectLightV61")
      },
      ModelEffectLightV61: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV61: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV61"),
        groupBindings: DynArray("ModelClothGroupBindingV61"),
        softLocks: DynArray("ModelClothSoftLockV61"),
        lod0Constraints: DynArray("ModelClothConstraintV61"),
        lod1Constraints: DynArray("ModelClothConstraintV61"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV61: {
        weights: DynArray("ModelClothBoneWeightV61")
      },
      ModelClothBoneWeightV61: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothGroupBindingV61: {
        strippedToken: Uint64,
        boneName: CString,
        OBBMin: FixedArray(Float32, 3),
        OBBMax: FixedArray(Float32, 3)
      },
      ModelClothSoftLockV61: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV61: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelWindDataV61: {
        effectWind: DynArray("ModelEffectWindV61")
      },
      ModelEffectWindV61: {
        bone: Uint64,
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelLightningDataV61: {
        systems: DynArray("ModelLightningSystemV61"),
        bolts: DynArray("ModelLightningBoltV61"),
        nodes: DynArray("ModelLightningNodeV61")
      },
      ModelLightningSystemV61: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV61: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV61"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV61: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelBoneConstraintV61: {
        token: Uint64,
        flags: Uint16,
        twistOffset: Float32,
        animBlend: Float32,
        drag: Float32,
        ellipseRatio: Float32,
        gravity: Float32,
        collisionRadius: Float32,
        wind: Float32,
        angle: FixedArray(Float32, 2),
        angleStrength: Float32,
        angleType: Uint8,
        distanceInner: FixedArray(Float32, 2),
        distanceInnerStrength: Float32,
        distanceInnerType: Uint8,
        links: DynArray("ModelBoneConstraintLinkV61"),
        distanceOuter: FixedArray(Float32, 2),
        distanceOuterStrength: Float32,
        distanceOuterType: Uint8,
        twist: FixedArray(Float32, 2),
        twistStrength: Float32,
        twistType: Uint8
      },
      ModelBoneConstraintLinkV61: {
        angle: Float32,
        azimuth: Float32,
        distance: FixedArray(Float32, 2),
        token: Uint64
      },
      ModelSoftBodyDataV61: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV61: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelFixedOffsetDataV61: {
        name: Uint64,
        parentBone: Uint64,
        translation: FixedArray(Float32, 3)
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV61"),
      meshes: RefArray("ModelMeshDataV61"),
      model: Pointer("ModelModelDataV61"),
      properties: DynArray("ModelPropertyDataV61"),
      cloudData: Pointer("ModelCloudDataV61"),
      obstacles: DynArray("ModelObstacleDataV61"),
      streakData: Pointer("ModelStreakDataV61"),
      lightData: Pointer("ModelLightDataV61"),
      clothData: DynArray("ModelClothDataV61"),
      windData: Pointer("ModelWindDataV61"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV61"),
      boneConstraints: DynArray("ModelBoneConstraintV61"),
      softBodyData: DynArray("ModelSoftBodyDataV61"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV61"),
      fixedOffsetData: DynArray("ModelFixedOffsetDataV61"),
      modelReference: Filename()
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV62",
    version: 62,
    definitions: {
      ModelPermutationDataV62: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV62")
      },
      ModelMaterialDataV62: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV62"),
        constants: DynArray("ModelConstantDataV62"),
        matConstLinks: DynArray("ModelMatConstLinkV62"),
        uvTransLinks: DynArray("ModelUVTransLinkV62"),
        texTransforms: DynArray("ModelMaterialTexTransformV62"),
        texCoordCount: Uint8
      },
      ModelTextureDataV62: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV62: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV62: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV62: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV62: {
        random: Uint8,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV62: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV62"),
        morphTargets: DynArray("ModelMeshMorphTargetV62"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV62: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV62: {
        positions: DynArray("ModelMeshMorphVertV62"),
        normals: DynArray("ModelMeshMorphVertV62"),
        mesh: Uint64
      },
      ModelMeshMorphVertV62: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelCloudDataV62: {
        clouds: DynArray("ModelParticleCloudV62"),
        emitters: DynArray("ModelParticleEmitterV62")
      },
      ModelParticleCloudV62: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV62: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        affinity: Uint32,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV62"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV62"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV62"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V62"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV62: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV62: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V62: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV62: {
        affinity: Uint32,
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V62")
      },
      ModelStreakDataV62: {
        streaks: DynArray("ModelStreakV62"),
        anchors: DynArray("ModelStreakAnchorV62")
      },
      ModelStreakV62: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV62: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV62: {
        effectLights: DynArray("ModelEffectLightV62")
      },
      ModelEffectLightV62: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV62: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV62"),
        groupBindings: DynArray("ModelClothGroupBindingV62"),
        softLocks: DynArray("ModelClothSoftLockV62"),
        lod0Constraints: DynArray("ModelClothConstraintV62"),
        lod1Constraints: DynArray("ModelClothConstraintV62"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8,
        translateWeight: Float32
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV62: {
        weights: DynArray("ModelClothBoneWeightV62")
      },
      ModelClothBoneWeightV62: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothGroupBindingV62: {
        strippedToken: Uint64,
        boneName: CString,
        OBBMin: FixedArray(Float32, 3),
        OBBMax: FixedArray(Float32, 3)
      },
      ModelClothSoftLockV62: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV62: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelWindDataV62: {
        effectWind: DynArray("ModelEffectWindV62")
      },
      ModelEffectWindV62: {
        bone: Uint64,
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelLightningDataV62: {
        systems: DynArray("ModelLightningSystemV62"),
        bolts: DynArray("ModelLightningBoltV62"),
        nodes: DynArray("ModelLightningNodeV62")
      },
      ModelLightningSystemV62: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV62: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV62"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV62: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelSoftBodyDataV62: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV62: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelBoundingSphereV62: {
        center: FixedArray(Float32, 3),
        radius: Float32
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV62"),
      meshes: RefArray("ModelMeshDataV62"),
      cloudData: Pointer("ModelCloudDataV62"),
      obstacles: DynArray("ModelObstacleDataV62"),
      streakData: Pointer("ModelStreakDataV62"),
      lightData: Pointer("ModelLightDataV62"),
      clothData: DynArray("ModelClothDataV62"),
      windData: Pointer("ModelWindDataV62"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV62"),
      softBodyData: DynArray("ModelSoftBodyDataV62"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV62"),
      boundingSphere: Pointer("ModelBoundingSphereV62")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV63",
    version: 63,
    definitions: {
      ModelPermutationDataV63: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV63")
      },
      ModelMaterialDataV63: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV63"),
        constants: DynArray("ModelConstantDataV63"),
        matConstLinks: DynArray("ModelMatConstLinkV63"),
        uvTransLinks: DynArray("ModelUVTransLinkV63"),
        texTransforms: DynArray("ModelMaterialTexTransformV63"),
        texCoordCount: Uint8
      },
      ModelTextureDataV63: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV63: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV63: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV63: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV63: {
        flags: Uint32,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2)
      },
      ModelMeshDataV63: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV63"),
        morphTargets: DynArray("ModelMeshMorphTargetV63"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV63: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV63: {
        positions: DynArray("ModelMeshMorphVertV63"),
        normals: DynArray("ModelMeshMorphVertV63"),
        mesh: Uint64
      },
      ModelMeshMorphVertV63: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelCloudDataV63: {
        clouds: DynArray("ModelParticleCloudV63"),
        emitters: DynArray("ModelParticleEmitterV63")
      },
      ModelParticleCloudV63: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV63: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        affinity: Uint32,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV63"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV63"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV63"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V63"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV63: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV63: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V63: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV63: {
        affinity: Uint32,
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V63")
      },
      ModelStreakDataV63: {
        streaks: DynArray("ModelStreakV63"),
        anchors: DynArray("ModelStreakAnchorV63")
      },
      ModelStreakV63: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV63: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV63: {
        effectLights: DynArray("ModelEffectLightV63")
      },
      ModelEffectLightV63: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV63: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV63"),
        groupBindings: DynArray("ModelClothGroupBindingV63"),
        softLocks: DynArray("ModelClothSoftLockV63"),
        lod0Constraints: DynArray("ModelClothConstraintV63"),
        lod1Constraints: DynArray("ModelClothConstraintV63"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8,
        translateWeight: Float32
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV63: {
        weights: DynArray("ModelClothBoneWeightV63")
      },
      ModelClothBoneWeightV63: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothGroupBindingV63: {
        strippedToken: Uint64,
        boneName: CString,
        OBBMin: FixedArray(Float32, 3),
        OBBMax: FixedArray(Float32, 3)
      },
      ModelClothSoftLockV63: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV63: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelWindDataV63: {
        effectWind: DynArray("ModelEffectWindV63")
      },
      ModelEffectWindV63: {
        bone: Uint64,
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelLightningDataV63: {
        systems: DynArray("ModelLightningSystemV63"),
        bolts: DynArray("ModelLightningBoltV63"),
        nodes: DynArray("ModelLightningNodeV63")
      },
      ModelLightningSystemV63: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV63: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV63"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV63: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelSoftBodyDataV63: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV63: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelBoundingSphereV63: {
        center: FixedArray(Float32, 3),
        radius: Float32
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV63"),
      meshes: RefArray("ModelMeshDataV63"),
      cloudData: Pointer("ModelCloudDataV63"),
      obstacles: DynArray("ModelObstacleDataV63"),
      streakData: Pointer("ModelStreakDataV63"),
      lightData: Pointer("ModelLightDataV63"),
      clothData: DynArray("ModelClothDataV63"),
      windData: Pointer("ModelWindDataV63"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV63"),
      softBodyData: DynArray("ModelSoftBodyDataV63"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV63"),
      boundingSphere: Pointer("ModelBoundingSphereV63")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV64",
    version: 64,
    definitions: {
      ModelPermutationDataV64: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV64")
      },
      ModelMaterialDataV64: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV64"),
        constants: DynArray("ModelConstantDataV64"),
        matConstLinks: DynArray("ModelMatConstLinkV64"),
        uvTransLinks: DynArray("ModelUVTransLinkV64"),
        texTransforms: DynArray("ModelMaterialTexTransformV64"),
        texCoordCount: Uint8
      },
      ModelTextureDataV64: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV64: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV64: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV64: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV64: {
        flags: Uint32,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2),
        scrollFreq: FixedArray(Float32, 2),
        scale: FixedArray(Float32, 2),
        scaleFreq: FixedArray(Float32, 2),
        rotate: Float32
      },
      ModelMeshDataV64: {
        visBone: Uint64,
        lods: DynArray("ModelMeshLodDataV64"),
        morphTargets: DynArray("ModelMeshMorphTargetV64"),
        mesh: "PackGrannyMeshType",
        flags: Uint32,
        seamVertIndices: DynArray(Uint32),
        meshName: Uint64,
        minBound: FixedArray(Float32, 3),
        maxBound: FixedArray(Float32, 3),
        bounds: DynArray("GrBoundData"),
        materialIndex: Uint32,
        materialName: CString
      },
      ModelMeshLodDataV64: {
        indices: DynArray(Uint16)
      },
      ModelMeshMorphTargetV64: {
        positions: DynArray("ModelMeshMorphVertV64"),
        normals: DynArray("ModelMeshMorphVertV64"),
        mesh: Uint64
      },
      ModelMeshMorphVertV64: {
        index: Uint16,
        vector: FixedArray(Float32, 3)
      },
      PackGrannyMeshType: {
        mesh: DynArray(Uint8)
      },
      GrBoundData: {
        center: FixedArray(Float32, 3),
        boxExtent: FixedArray(Float32, 3),
        sphereRadius: Float32
      },
      ModelCloudDataV64: {
        clouds: DynArray("ModelParticleCloudV64"),
        emitters: DynArray("ModelParticleEmitterV64")
      },
      ModelParticleCloudV64: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV64: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        affinity: Uint32,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV64"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV64"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV64"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V64"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV64: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV64: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V64: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV64: {
        affinity: Uint32,
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V64")
      },
      ModelStreakDataV64: {
        streaks: DynArray("ModelStreakV64"),
        anchors: DynArray("ModelStreakAnchorV64")
      },
      ModelStreakV64: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV64: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV64: {
        effectLights: DynArray("ModelEffectLightV64")
      },
      ModelEffectLightV64: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV64: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV64"),
        groupBindings: DynArray("ModelClothGroupBindingV64"),
        softLocks: DynArray("ModelClothSoftLockV64"),
        lod0Constraints: DynArray("ModelClothConstraintV64"),
        lod1Constraints: DynArray("ModelClothConstraintV64"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8,
        translateWeight: Float32,
        visBone: Uint64
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV64: {
        weights: DynArray("ModelClothBoneWeightV64")
      },
      ModelClothBoneWeightV64: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothGroupBindingV64: {
        strippedToken: Uint64,
        boneName: CString,
        OBBMin: FixedArray(Float32, 3),
        OBBMax: FixedArray(Float32, 3)
      },
      ModelClothSoftLockV64: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV64: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelWindDataV64: {
        effectWind: DynArray("ModelEffectWindV64")
      },
      ModelEffectWindV64: {
        bone: Uint64,
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelLightningDataV64: {
        systems: DynArray("ModelLightningSystemV64"),
        bolts: DynArray("ModelLightningBoltV64"),
        nodes: DynArray("ModelLightningNodeV64")
      },
      ModelLightningSystemV64: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV64: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV64"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV64: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelSoftBodyDataV64: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV64: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelBoundingSphereV64: {
        center: FixedArray(Float32, 3),
        radius: Float32
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV64"),
      meshes: RefArray("ModelMeshDataV64"),
      cloudData: Pointer("ModelCloudDataV64"),
      obstacles: DynArray("ModelObstacleDataV64"),
      streakData: Pointer("ModelStreakDataV64"),
      lightData: Pointer("ModelLightDataV64"),
      clothData: DynArray("ModelClothDataV64"),
      windData: Pointer("ModelWindDataV64"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV64"),
      softBodyData: DynArray("ModelSoftBodyDataV64"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV64"),
      boundingSphere: Pointer("ModelBoundingSphereV64")
    }
  },
  {
    chunkName: "MODL",
    name: "ModelFileDataV65",
    version: 65,
    definitions: {
      ModelPermutationDataV65: {
        token: Uint64,
        materials: RefArray("ModelMaterialDataV65")
      },
      ModelMaterialDataV65: {
        token: Uint64,
        materialId: Uint32,
        filename: Filename(),
        materialFlags: Uint32,
        sortOrder: Uint32,
        textures: DynArray("ModelTextureDataV65"),
        constants: DynArray("ModelConstantDataV65"),
        matConstLinks: DynArray("ModelMatConstLinkV65"),
        uvTransLinks: DynArray("ModelUVTransLinkV65"),
        texTransforms: DynArray("ModelMaterialTexTransformV65"),
        texCoordCount: Uint8
      },
      ModelTextureDataV65: {
        filename: Filename(),
        textureFlags: Uint32,
        token: Uint64,
        blitId: Uint64,
        uvAnimId: Uint32,
        uvPSInputIndex: Uint8
      },
      ModelConstantDataV65: {
        name: Uint32,
        value: FixedArray(Float32, 4),
        constantFlags: Uint32
      },
      ModelMatConstLinkV65: {
        linkToken: Uint64,
        constantToken: Uint32
      },
      ModelUVTransLinkV65: {
        linkToken: Uint64,
        uvAnimId: Uint32,
        type: Uint8
      },
      ModelMaterialTexTransformV65: {
        flags: Uint32,
        uvIndex: Uint8,
        columns: Uint8,
        rows: Uint8,
        count: Uint16,
        fps: Float32,
        scroll: FixedArray(Float32, 2),
        scrollFreq: FixedArray(Float32, 2),
        scale: FixedArray(Float32, 2),
        scaleFreq: FixedArray(Float32, 2),
        rotate: Float32
      },
      ModelCloudDataV65: {
        clouds: DynArray("ModelParticleCloudV65"),
        emitters: DynArray("ModelParticleEmitterV65")
      },
      ModelParticleCloudV65: {
        acceleration: FixedArray(Float32, 3),
        bone: Uint64,
        drag: Float32,
        emitterIndices: DynArray(Uint32),
        fvf: Uint32,
        flags: Uint32,
        materialIndex: Uint32,
        obstacleIndices: DynArray(Uint32),
        velocity: FixedArray(Float32, 3)
      },
      ModelParticleEmitterV65: {
        acceleration: FixedArray(FixedArray(Float32, 2), 4),
        accelerationDistRange: FixedArray(Float32, 2),
        accelerationDistSpeed: FixedArray(Float32, 2),
        affinity: Uint32,
        alignmentDir: FixedArray(Float32, 3),
        bone: Uint64,
        colorBegin: FixedArray(Float32, 4),
        colorEnd: FixedArray(Float32, 4),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        drag: Float32,
        emitterFlags: Uint32,
        offset: Float32,
        opacityCurve: Pointer("ModelParticleCurveV65"),
        opacityCurvePreset: Uint32,
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV65"),
        lifetime: FixedArray(Float32, 2),
        rotationChange: FixedArray(Float32, 2),
        rotationDrag: Float32,
        rotationInitial: FixedArray(Float32, 2),
        scaleChange: FixedArray(FixedArray(Float32, 2), 2),
        scaleInitial: FixedArray(FixedArray(Float32, 2), 2),
        scaleCurve: Pointer("ModelParticleCurveV65"),
        scaleCurvePreset: Uint32,
        velocity: FixedArray(FixedArray(Float32, 2), 4),
        velocityDistRange: FixedArray(Float32, 2),
        velocityDistSpeed: FixedArray(Float32, 2),
        velocityInherit: FixedArray(Float32, 2),
        spawnGroupSize: FixedArray(Float32, 2),
        spawnPeriod: Float32,
        spawnProbability: Float32,
        spawnRadius: FixedArray(Float32, 2),
        spawnWindEmit: FixedArray(Float32, 2),
        spawnWindSpeed: FixedArray(Float32, 2),
        texCoordRect: FixedArray(Float32, 4),
        transform: Pointer("ModelMatrix43V65"),
        windInfluence: Uint8,
        alignmentType: Uint8,
        spawnShape: Uint8
      },
      ModelParticleCurveV65: {
        curveType: Uint8,
        keys: DynArray(FixedArray(Float32, 2))
      },
      ModelParticleFlipbookV65: {
        columns: Uint8,
        count: Uint8,
        fps: Float32,
        rows: Uint8,
        start: Uint8
      },
      ModelMatrix43V65: {
        x: FixedArray(Float32, 4),
        y: FixedArray(Float32, 4),
        z: FixedArray(Float32, 4)
      },
      ModelObstacleDataV65: {
        affinity: Uint32,
        bone: Uint64,
        type: Uint8,
        response: Uint8,
        flags: Uint32,
        dragCoef: Float32,
        gravityCoef: Float32,
        length: Float32,
        width: Float32,
        height: Float32,
        radius: Float32,
        transform: Pointer("ModelMatrix43V65")
      },
      ModelStreakDataV65: {
        streaks: DynArray("ModelStreakV65"),
        anchors: DynArray("ModelStreakAnchorV65")
      },
      ModelStreakV65: {
        acceleration: FixedArray(Float32, 3),
        velocity: FixedArray(Float32, 3),
        anchorIndices: DynArray(Uint32),
        bone: Uint64,
        flags: Uint32,
        jitter: Float32,
        materialIndex: Uint32,
        noise: Float32,
        spawnDist: Float32,
        texScale: Float32,
        wind: Float32
      },
      ModelStreakAnchorV65: {
        bone: Uint64,
        colorStart: Uint32,
        colorEnd: Uint32,
        falloff: Float32,
        lifetime: Float32,
        flags: Uint32,
        texV: Float32
      },
      ModelLightDataV65: {
        effectLights: DynArray("ModelEffectLightV65")
      },
      ModelEffectLightV65: {
        bone: Uint64,
        color: FixedArray(Uint8, 3),
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelClothDataV65: {
        materialIndex: Uint32,
        drag: Float32,
        gravity: Float32,
        compressibility: Float32,
        slack: Float32,
        stretchiness: Float32,
        weight: Float32,
        wind: Float32,
        mesh: "PackVertexType",
        indices: DynArray(Uint16),
        groups: DynArray("ModelClothMeshGroupV65"),
        groupBindings: DynArray("ModelClothGroupBindingV65"),
        softLocks: DynArray("ModelClothSoftLockV65"),
        lod0Constraints: DynArray("ModelClothConstraintV65"),
        lod1Constraints: DynArray("ModelClothConstraintV65"),
        lod1Indices: DynArray(Uint16),
        barycentricCoords: DynArray(FixedArray(Float32, 3)),
        barycentricIndices: DynArray(Uint16),
        obstacleIndices: DynArray(Uint32),
        lockCount: Uint16,
        lockedNormals: DynArray(Uint32),
        lockedTanegents: DynArray(Uint32),
        lockedBitangents: DynArray(Uint32),
        lod1VertexCount: Uint16,
        flags: Uint8,
        rigidness: Uint8,
        translateWeight: Float32,
        visBone: Uint64
      },
      PackVertexType: {
        fvf: Uint32,
        vertices: DynArray(Uint8)
      },
      ModelClothMeshGroupV65: {
        weights: DynArray("ModelClothBoneWeightV65")
      },
      ModelClothBoneWeightV65: {
        token: Uint64,
        weight: Uint8
      },
      ModelClothGroupBindingV65: {
        strippedToken: Uint64,
        boneName: CString,
        OBBMin: FixedArray(Float32, 3),
        OBBMax: FixedArray(Float32, 3)
      },
      ModelClothSoftLockV65: {
        weight: Uint8,
        vertIndex: Uint16
      },
      ModelClothConstraintV65: {
        distance: Uint16,
        relationship: Uint16,
        vertIndexA: Uint16,
        vertIndexB: Uint16
      },
      ModelWindDataV65: {
        effectWind: DynArray("ModelEffectWindV65")
      },
      ModelEffectWindV65: {
        bone: Uint64,
        farDistance: Float32,
        intensity: Float32,
        nearDistance: Float32
      },
      ModelLightningDataV65: {
        systems: DynArray("ModelLightningSystemV65"),
        bolts: DynArray("ModelLightningBoltV65"),
        nodes: DynArray("ModelLightningNodeV65")
      },
      ModelLightningSystemV65: {
        bone: Uint64,
        boltIndices: DynArray(Uint16),
        flags: Uint32,
        fvf: Uint32,
        materialIndex: Uint32
      },
      ModelLightningBoltV65: {
        bone: Uint64,
        nodeIndices: DynArray(Uint16),
        colorBegin: FixedArray(Uint32, 3),
        colorEnd: FixedArray(Uint32, 3),
        colorPeriod: Float32,
        colorFalloff: FixedArray(Float32, 2),
        flags: Uint32,
        flipbook: Pointer("ModelParticleFlipbookV65"),
        fps: Float32,
        frequency: Float32,
        groupMax: Uint32,
        groupMin: Uint32,
        probability: Float32,
        lifetime: FixedArray(Float32, 2),
        numSegments: Uint16,
        opacity: FixedArray(Float32, 2),
        opacityPreset: Uint8,
        texOffset: Float32,
        texRange: FixedArray(Float32, 2),
        texScale: Float32,
        texSpeed: Float32,
        thicknessPreset: Uint8,
        thicknessRange: FixedArray(Float32, 2),
        type: Uint8,
        variance: Float32,
        variancePreset: Uint8,
        noise: Float32
      },
      ModelLightningNodeV65: {
        bone: Uint64,
        childrenIndices: DynArray(Uint16),
        flags: Uint32,
        probability: Float32,
        radius: FixedArray(Float32, 2),
        shape: Uint8,
        updatePos: Float32
      },
      ModelSoftBodyDataV65: {
        materialIndex: Uint32,
        flags: Uint32,
        vertexFvf: Uint32,
        vertBytes: DynArray(Uint8),
        indices: DynArray(Uint16),
        bones: DynArray(Uint64)
      },
      ModelBoneOffsetDataV65: {
        bone: Uint64,
        translation: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 4),
        boneInverseOffset: FixedArray(FixedArray(Float32, 4), 3)
      },
      ModelBoundingSphereV65: {
        center: FixedArray(Float32, 3),
        radius: Float32
      }
    },
    root: {
      permutations: DynArray("ModelPermutationDataV65"),
      cloudData: Pointer("ModelCloudDataV65"),
      obstacles: DynArray("ModelObstacleDataV65"),
      streakData: Pointer("ModelStreakDataV65"),
      lightData: Pointer("ModelLightDataV65"),
      clothData: DynArray("ModelClothDataV65"),
      windData: Pointer("ModelWindDataV65"),
      actionOffsetNames: DynArray(Uint64),
      actionOffsets: DynArray(FixedArray(Float32, 3)),
      lodOverride: FixedArray(Float32, 2),
      soundScript: Filename(),
      lightningData: Pointer("ModelLightningDataV65"),
      softBodyData: DynArray("ModelSoftBodyDataV65"),
      boneOffsetData: DynArray("ModelBoneOffsetDataV65"),
      boundingSphere: Pointer("ModelBoundingSphereV65")
    }
  }
]