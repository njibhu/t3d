const chunkMapping: { [key: string]: string } = {
  AmatGrV0: "GRMT",
  AmatDx9MaterialV0: "DX9S",
  AmatToolParamsV0: "TOOL",
  AmatGfxMaterial: "BGFX",
  PackShaderCacheV0: "CDHS",
  PagedImageTableDataV0: "PGTB",
  PagedImageEmbeddedPagesDataV0: "DATA",
  TextPackManifest: "TXTM",
  TextPackPasswords: "TXTP",
  TextPackVoices: "TXTV",
  TextPackVariants: "VARI",
  ScriptFileDataV0: "AMSP",
  BankFileDataV0: "BKCK",
  BankIndexDataV0: "BIDX",
  WaveformDataV0: "ASND",
  SceneDataV0: "CSCN",
  PackMapCollideV6: "HAVK",
  PackMapAreasV0: "AREA",
  MapAudio: "AUDI",
  PackMapBlock: "BLOC",
  PackMapCoarseNavGraphV0: "CG15",
  PackMapCubeMapV0: "CUBE",
  PackMapLayers: "LAYE",
  PackMapLights: "LGHT",
  PackMapNavMeshV0: "NM15",
  PackMapNavMeshExternalV0: "NMEX",
  MapOcclusionTome: "OCTM",
  MapParam: "PARM",
  PackMapPhysicsV1: "PHYS",
  PackMapPhysicsNavMeshV0: "PNVM",
  PackMapPropV3: "PRP2",
  PackMapResourceMapV0: "RESO",
  PackMapRivers: "RIVE",
  PackMapToolFsV0: "TLFS",
  PackMapShadowV0: "SHAD",
  PackMapShadowExtV1: "SHEX",
  MapShore: "SHOR",
  MapSurfaces: "SURF",
  PackMapZonesV12: "ZON2",
  MapTerrainImg: "TRNI",
  PackMapWaterV0: "WATR",
  MapEditData: "EDIT",
  PackMapDecalsV1: "DCAL",
  MapPackage: "PACK",
  PackMapNavMeshChunkV0: "NM15_2",
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
  SceneFilePhysicsV0: "PHYS_2",
  SceneFileAnimationV0: "ANIM_2",
  SceneFileGameV0: "GAME_2",
  SceneFileSkeletonV0: "SKEL_2",
  PackAssetManifestV0: "MFST",
  PackAssetRootManifestV0: "ARMF",
  KeyTableData: "TKAC",
  CollideNavMesh: "MAIN",
  CollideNavMeshChunk: "MAIN_2",
  CollideModelManifest: "MAIN_3",
  PackAnimMachinesV0: "MACH",
  PackAnimFallbacksV0: "FALL",
  PackAnimSequencesV0: "SEQN",
  PackAnimConfigV0: "CNFG",
  PackCompositeV0: "COMP",
  PackContent: "MAIN_4",
  PackMapMetadata: "MAIN_5",
  PackEmoteAnimationsV0: "ANIM_3",
  PackEulaV0: "EULA",
  ContentPortalManifestV0: "MFST_2",
  PackMapEnvironmentV29: "ENV",
  MapMission: "MSN",
  MapObstacles: "OBS",
  MapOcclusions: "OCC",
  MapLegacy: "SND",
  PackMapTerrainV10: "TRN",
  MapExpansionProperties: "EXP",
};

// Check for duplicate chunks
const checkMap: Map<string, boolean> = new Map();
for (const key in chunkMapping) {
  const mapping = chunkMapping[key].toUpperCase();
  if (checkMap.has(mapping)) {
    throw new Error(`Duplicate value for ${key}`);
  } else {
    checkMap.set(mapping, true);
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
