import { ControllerType, ExplorerPreferences, Theme } from "../types";

export const PERSIST_KEYS = {
  theme: "t3d-explorer:theme",
  leftPaneWidth: "t3d-explorer:leftPaneW",
  movementSpeed: "t3d-explorer:movementSpeed",
  fog: "t3d-explorer:fog",
  antialias: "t3d-explorer:aa",
  cameraType: "t3d-explorer:cameraType",
} as const;

export const DEFAULT_PREFERENCES: ExplorerPreferences = {
  theme: null,
  movementSpeed: 10000,
  fog: 25000,
  antialias: true,
  cameraType: "fly",
};

export function loadPreferences(): ExplorerPreferences {
  return {
    theme: readTheme(PERSIST_KEYS.theme),
    movementSpeed: readNumber(PERSIST_KEYS.movementSpeed, DEFAULT_PREFERENCES.movementSpeed),
    fog: readNumber(PERSIST_KEYS.fog, DEFAULT_PREFERENCES.fog),
    antialias: readBoolean(PERSIST_KEYS.antialias, DEFAULT_PREFERENCES.antialias),
    cameraType: readCameraType(PERSIST_KEYS.cameraType, DEFAULT_PREFERENCES.cameraType),
  };
}

export function savePreferences(prefs: ExplorerPreferences): void {
  writeNullableString(PERSIST_KEYS.theme, prefs.theme);
  localStorage.setItem(PERSIST_KEYS.movementSpeed, String(prefs.movementSpeed));
  localStorage.setItem(PERSIST_KEYS.fog, String(prefs.fog));
  localStorage.setItem(PERSIST_KEYS.antialias, String(prefs.antialias));
  localStorage.setItem(PERSIST_KEYS.cameraType, prefs.cameraType);
}

function readNumber(key: string, fallback: number): number {
  const raw = parseInt(localStorage.getItem(key) ?? "", 10);
  return Number.isFinite(raw) ? raw : fallback;
}

function readBoolean(key: string, fallback: boolean): boolean {
  const raw = localStorage.getItem(key);
  if (raw === "true") return true;
  if (raw === "false") return false;
  return fallback;
}

function readTheme(key: string): Theme | null {
  const raw = localStorage.getItem(key);
  return raw === "light" || raw === "dark" ? raw : null;
}

function readCameraType(key: string, fallback: ControllerType): ControllerType {
  const raw = localStorage.getItem(key);
  return raw === "fly" || raw === "orbital" ? raw : fallback;
}

function writeNullableString(key: string, value: string | null): void {
  if (value === null) localStorage.removeItem(key);
  else localStorage.setItem(key, value);
}
