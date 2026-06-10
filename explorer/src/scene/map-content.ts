import * as THREE from "three";
import T3D, {
  EnvironmentRenderer,
  FileParser,
  HavokRenderer,
  type LocalReader,
  PropertiesRenderer,
  TerrainRenderer,
  ZoneRenderer,
} from "t3d-lib";
import type { Light, Object3D } from "three";
import type { LayerKey } from "../types.js";
import { CLEAR_COLOR, disposeObjectTree, materialsOf, type MapBounds } from "./three-utils.js";
import type { SceneLighting } from "./scene-lighting.js";

type SceneLayerRecord = Record<LayerKey, Object3D[]>;
type SceneFlagRecord = Record<LayerKey, boolean>;

const LAYER_RENDERERS = {
  zone: ZoneRenderer,
  props: PropertiesRenderer,
  collisions: HavokRenderer,
} as const;

/** The T3D renderer classes driven through `T3D.runRenderer`. */
type RendererClass =
  | typeof ZoneRenderer
  | typeof PropertiesRenderer
  | typeof HavokRenderer
  | typeof TerrainRenderer
  | typeof EnvironmentRenderer;

interface EnvironmentVariant {
  id: string;
  label: string;
}

/**
 * Cross-concern hooks the content loader needs from the scene orchestrator. These are the
 * camera / renderer / physics touch-points that are not the content's to own.
 */
export interface MapContentHost {
  readonly scene: THREE.Scene;
  readonly skyScene: THREE.Scene;
  readonly lighting: SceneLighting;
  /** Frame the camera (and adjust fog) for a freshly loaded map. */
  frameBounds(bounds: MapBounds): void;
  /** Apply the environment's haze color to the renderer clear color and scene fog. */
  applyEnvironmentColors(clearColor: THREE.Color): void;
  /** Restore the default clear/fog color when a map is torn down. */
  resetEnvironmentColors(): void;
  /** Hand the collision meshes to the physics controller (or [] when cleared). */
  setCollisionMeshes(meshes: Object3D[]): void;
  /** Called before teardown begins (e.g. to release pointer lock). */
  onMapWillCleanup(): void;
  /** Called after content state is cleared (e.g. to reset physics and notify listeners). */
  onMapCleared(): void;
}

/**
 * Owns everything tied to a loaded map: the archive reader/parser, the T3D render context,
 * terrain / sky / layer meshes, environment variants, and their disposal. It drives the
 * T3D renderers and reports outward (camera framing, collision meshes, environment colors)
 * through {@link MapContentHost}.
 */
export class MapContent {
  private reader: LocalReader | null = null;
  private mapFile: FileParser | null = null;
  private context: Record<string, unknown> | null = null;
  private currentMapId: number | null = null;

  private readonly terrainObjects: Object3D[] = [];
  /** Terrain tiles (excluding water) used as the ground surface for physics traversal. */
  private readonly groundMeshes: Object3D[] = [];
  private readonly skyObjects: Object3D[] = [];
  private readonly layerObjects: SceneLayerRecord = { zone: [], props: [], collisions: [] };
  private readonly layerLoaded: SceneFlagRecord = { zone: false, props: false, collisions: false };
  private readonly layerVisible: SceneFlagRecord = { zone: false, props: false, collisions: false };

  private collisionMeshes: Object3D[] = [];
  private environmentOptions: EnvironmentVariant[] = [];
  private activeEnvironmentId: string | null = null;
  private collisionOpacity = 1;

  constructor(private readonly host: MapContentHost) {}

  getContext(): Record<string, unknown> | null {
    return this.context;
  }

  getCurrentMapId(): number | null {
    return this.currentMapId;
  }

  getEnvironmentOptions(): EnvironmentVariant[] {
    return this.environmentOptions;
  }

  getActiveEnvironmentId(): string | null {
    return this.activeEnvironmentId;
  }

  hasLayerLoaded(key: LayerKey): boolean {
    return this.layerLoaded[key];
  }

  isLayerVisible(key: LayerKey): boolean {
    return this.layerVisible[key];
  }

  hasCollisionsLoaded(): boolean {
    return this.layerLoaded.collisions;
  }

  async loadBaseMap(reader: LocalReader, mapId: number): Promise<void> {
    this.cleanup();
    this.reader = reader;
    this.currentMapId = mapId;
    const buffer = await this.readMapBuffer(reader, mapId);
    this.mapFile = new FileParser(buffer);
    this.context = {};

    await this.runRenderer(EnvironmentRenderer, {});
    await this.runRenderer(TerrainRenderer, {});
    this.applyBaseContext();
  }

  async ensureLayerVisible(key: LayerKey): Promise<void> {
    if (!this.reader || !this.mapFile || !this.context) {
      throw new Error("Load a map before enabling layers.");
    }
    if (!this.layerLoaded[key]) {
      const rendererClass = LAYER_RENDERERS[key];
      const settings: Record<string, unknown> =
        key === "collisions" ? { visible: true, opacity: this.collisionOpacity } : { visible: true };
      await this.runRenderer(rendererClass, settings);
      const meshes = T3D.getContextValue<Object3D[]>(this.context, rendererClass, "meshes", []);
      this.layerObjects[key] = meshes;
      this.layerLoaded[key] = true;
      for (const mesh of meshes) {
        mesh.visible = true;
        this.host.scene.add(mesh);
      }
      if (key === "collisions") {
        this.collisionMeshes = meshes;
        this.updatePhysicsCollision();
        this.applyCollisionOpacity();
      }
    }

    this.layerVisible[key] = true;
    for (const mesh of this.layerObjects[key]) {
      mesh.visible = true;
    }
  }

  setLayerVisible(key: LayerKey, visible: boolean): void {
    this.layerVisible[key] = visible;
    for (const mesh of this.layerObjects[key]) {
      mesh.visible = visible;
    }
  }

  setEnvironmentVariant(id: string | null): void {
    if (!this.context) return;
    const variant = T3D.setEnvironmentVariant(this.context, id);
    this.activeEnvironmentId = variant?.id ?? null;
    this.applyEnvironmentFromContext();
  }

  cleanup(): void {
    this.host.onMapWillCleanup();

    for (const mesh of this.terrainObjects) {
      this.host.scene.remove(mesh);
      disposeObjectTree(mesh);
    }
    this.terrainObjects.length = 0;
    this.groundMeshes.length = 0;

    for (const key of Object.keys(this.layerObjects) as LayerKey[]) {
      for (const mesh of this.layerObjects[key]) {
        this.host.scene.remove(mesh);
        disposeObjectTree(mesh);
      }
      this.layerObjects[key] = [];
      this.layerLoaded[key] = false;
      this.layerVisible[key] = false;
    }

    for (const skyObject of this.skyObjects) {
      this.host.skyScene.remove(skyObject);
    }
    this.skyObjects.length = 0;

    if (this.context) {
      T3D.disposeEnvironmentResources(this.context);
    }

    this.collisionMeshes = [];
    this.context = null;
    this.mapFile = null;
    this.currentMapId = null;
    this.environmentOptions = [];
    this.activeEnvironmentId = null;

    this.host.setCollisionMeshes([]);
    this.host.onMapCleared();
    this.host.resetEnvironmentColors();
    this.host.lighting.refresh([]);
  }

  private async runRenderer(rendererClass: RendererClass, settings: Record<string, unknown>): Promise<void> {
    const reader = this.reader;
    const mapFile = this.mapFile;
    const context = this.context;
    if (!reader || !mapFile || !context) {
      throw new Error("Map state is not ready.");
    }
    await new Promise<void>((resolve) => {
      T3D.runRenderer(rendererClass, reader, { ...settings, mapFile }, context, resolve);
    });
  }

  private async readMapBuffer(reader: LocalReader, mapId: number): Promise<ArrayBuffer> {
    return await new Promise<ArrayBuffer>((resolve, reject) => {
      reader.loadFile(mapId, (buffer) => {
        if (!buffer) {
          reject(new Error(`Failed to load map ${mapId}.`));
          return;
        }
        resolve(buffer);
      });
    });
  }

  private applyBaseContext(): void {
    if (!this.context) return;

    for (const mesh of T3D.getContextValue<Object3D[]>(this.context, TerrainRenderer, "terrainTiles", [])) {
      this.host.scene.add(mesh);
      this.terrainObjects.push(mesh);
      this.groundMeshes.push(mesh);
    }
    const water = T3D.getContextValue<Object3D | null>(this.context, TerrainRenderer, "water", null);
    if (water) {
      this.host.scene.add(water);
      this.terrainObjects.push(water);
    }
    // The terrain is the walkable ground, so it must collide even before the Havok layer loads.
    this.updatePhysicsCollision();

    const bounds = T3D.getContextValue<MapBounds | null>(this.context, TerrainRenderer, "bounds", null);
    if (bounds) {
      this.host.frameBounds(bounds);
    }

    this.environmentOptions = T3D.getContextValue<EnvironmentVariant[]>(
      this.context,
      EnvironmentRenderer,
      "variants",
      []
    ).map((variant) => ({
      id: variant.id,
      label: variant.label,
    }));
    this.activeEnvironmentId = T3D.getContextValue<string | null>(
      this.context,
      EnvironmentRenderer,
      "activeVariantId",
      null
    );
    this.applyEnvironmentFromContext();
    this.host.lighting.reapply();
  }

  private applyEnvironmentFromContext(): void {
    if (!this.context) return;

    for (const skyObject of this.skyObjects) {
      this.host.skyScene.remove(skyObject);
    }
    this.skyObjects.length = 0;

    const skyBox = T3D.getContextValue<Object3D | null>(this.context, EnvironmentRenderer, "skyBox", null);
    if (skyBox) {
      this.host.skyScene.add(skyBox);
      this.skyObjects.push(skyBox);
    }

    const hazeBgr = T3D.getContextValue<number[] | null>(this.context, EnvironmentRenderer, "hazeColor", null);
    const clearColor = new THREE.Color(CLEAR_COLOR);
    if (hazeBgr) {
      clearColor.setRGB(hazeBgr[2] / 255, hazeBgr[1] / 255, hazeBgr[0] / 255);
    }
    this.host.applyEnvironmentColors(clearColor);

    const lights = T3D.getContextValue<Light[]>(this.context, EnvironmentRenderer, "lights", []);
    this.host.lighting.refresh(lights);
  }

  /** Physics collides with the terrain ground plus the Havok collision layer (once loaded). */
  private updatePhysicsCollision(): void {
    this.host.setCollisionMeshes([...this.groundMeshes, ...this.collisionMeshes]);
  }

  private applyCollisionOpacity(): void {
    const transparent = this.collisionOpacity < 1;
    for (const mesh of this.collisionMeshes) {
      for (const entry of materialsOf(mesh)) {
        entry.opacity = this.collisionOpacity;
        entry.transparent = transparent;
        entry.depthWrite = !transparent;
        entry.needsUpdate = true;
      }
    }
  }
}
