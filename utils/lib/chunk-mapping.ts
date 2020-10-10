const chunkMapping: { [key: string]: string } = {
  AmatGrV0: "GRMT",
  AmatDx9MaterialV0: "DX9S",
  AmatToolParamsV0: "TOOL",
  AmatGfxMaterial: "BGFX",
  PackShaderCacheV0: "CDHS",
  PagedImageTableDataV0: "PGTB",
  PagedImageEmbeddedPagesDataV0: "DATA",
  TextPackManifest: "txtm",
  TextPackPasswords: "txtp",
  TextPackVoices: "txtv",
  TextPackVariants: "vari",
  ScriptFileDataV0: "AMSP",
  BankFileDataV0: "BKCK",
  BankIndexDataV0: "BIDX",
  WaveformDataV0: "ASND",
  SceneDataV0: "CSCN",
  PackMapCollideV6: "havk",
  PackMapAreasV0: "area",
  MapAudio: "audi",
  PackMapBlock: "bloc",
  PackMapCoarseNavGraphV0: "cg15",
  PackMapCubeMapV0: "cube",
  PackMapLayers: "laye",
  PackMapLights: "lght",
  PackMapNavMeshV0: "nm15",
  PackMapNavMeshExternalV0: "nmex",
  MapOcclusionTome: "octm",
  MapParam: "parm",
  PackMapPhysicsV1: "phys",
  PackMapPhysicsNavMeshV0: "pnvm",
  PackMapPropV3: "prp2",
  PackMapResourceMapV0: "reso",
  PackMapRivers: "rive",
  PackMapToolFsV0: "tlfs",
  PackMapShadowV0: "shad",
  PackMapShadowExtV1: "shex",
  MapShore: "shor",
  MapSurfaces: "surf1",
  PackMapZonesV12: "zon2",
  MapTerrainImg: "trni",
  PackMapWaterV0: "watr",
  MapEditData: "edit",
  PackMapDecalsV1: "dcal",
  MapPackage: "pack",
  PackMapNavMeshChunkV0: "nm15_2",
  ModelFileDataV0: "MODL",
  ModelFileAnimationV0: "ANIM",
  ModelFileCollisionV0: "COLL",
  ModelFileGr2sV0: "GR2S",
  ModelFileToolV0: "TOOL_2",
  ModelFileRootMotionV0: "ROOT",
  ModelFileGame: "GAME",
  ModelFileIcon: "ICON",
  ModelFileSkeletonV0: "SKEL",
  ModelFileProperties: "PRPS",
  ModelFileGeometryV0: "GEOM",
  ModelFileExpansionV0: "EXPA",
  SceneFilePhysicsV0: "PHYS",
  SceneFileAnimationV0: "ANIM_2",
  SceneFileGameV0: "GAME_2",
  SceneFileSkeletonV0: "SKEL_2",
  PackAssetManifestV0: "MFST",
  PackAssetRootManifestV0: "ARMF",
  KeyTableData: "TKAC",
  CollideNavMesh: "main",
  CollideNavMeshChunk: "main_2",
  CollideModelManifest: "main_3",
  PackAnimMachinesV0: "mach",
  PackAnimFallbacksV0: "fall",
  PackAnimSequencesV0: "seqn",
  PackAnimConfigV0: "cnfg",
  PackCompositeV0: "comp",
  PackContent: "Main",
  PackMapMetadata: "Main_2",
  PackEmoteAnimationsV0: "anim",
  PackEulaV0: "eula",
  ContentPortalManifestV0: "mfst",
};

// Check for duplicate chunks
const checkMap: Map<string, boolean> = new Map();
for (const key in chunkMapping) {
  if (checkMap.has(chunkMapping[key])) {
    throw new Error(`Duplicate value for ${key}`);
  } else {
    checkMap.set(chunkMapping[key], true);
  }
}

export function getNameForChunk(
  chunkVersions: {
    name: string;
    version: number;
  }[],
  chunkName: string
): string | undefined {
  const firstRoot = chunkVersions.sort((a, b) => a.version - b.version)[0];
  if (!firstRoot) {
    throw new Error(`Couldn't get first version of chunk ${chunkName}`);
  }

  if (!chunkMapping[firstRoot.name.replace(/'/g, "")]) {
    console.error(`No mapping found for ${chunkName} ${firstRoot.name}`);
    return undefined;
  } else {
    return chunkMapping[firstRoot.name.replace(/'/g, "")];
  }
}
