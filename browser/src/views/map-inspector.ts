import * as THREE from "three";

export type MapInspectSourceKind = "prop" | "zone" | "collision";

export interface MapInspectTextureRef {
  fileId: number;
  label: string;
}

export interface MapInspectObjectMetadata {
  inspectable: boolean;
  sourceKind: MapInspectSourceKind;
  objectLabel?: string;
  modelId?: number;
  materialFileId?: number;
  materialName?: string;
  materialFlags?: number;
  meshFlags?: number;
  meshName?: string;
  numUv?: number;
  textureRefs?: MapInspectTextureRef[];
  collisionIndex?: number;
  instanceCount?: number;
}

export interface MapInspectSelection {
  object: THREE.Object3D;
  metadata: MapInspectObjectMetadata;
  instanceId: number | null;
  instanceCount: number;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: THREE.Vector3;
  boundingSphereRadius: number | null;
}

export type MapInspectUserData = {
  t3dInspect?: MapInspectObjectMetadata;
};

export function readInspectMetadata(object: THREE.Object3D): MapInspectObjectMetadata | null {
  const userData = object.userData as MapInspectUserData;
  return userData.t3dInspect?.inspectable ? userData.t3dInspect : null;
}

export function cloneSelectionPreview(selection: MapInspectSelection): THREE.Object3D | null {
  const object = selection.object;
  if (object instanceof THREE.InstancedMesh) {
    const mesh = new THREE.Mesh(object.geometry, object.material);
    mesh.name = selection.metadata.meshName || selection.metadata.materialName || selection.metadata.objectLabel || "";
    (mesh as any).boundingSphere = (object as any).boundingSphere ?? object.geometry.boundingSphere ?? undefined;
    return mesh;
  }

  if (object instanceof THREE.Mesh) {
    const mesh = new THREE.Mesh(object.geometry, object.material);
    mesh.name = object.name;
    (mesh as any).boundingSphere = (object as any).boundingSphere ?? object.geometry.boundingSphere ?? undefined;
    return mesh;
  }

  return null;
}
