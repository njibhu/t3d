export type MovementAction = "forward" | "backward" | "left" | "right" | "up" | "down";

/** Non-movement actions that can also be rebound (handled outside the fly controller). */
export type ActionKey = "togglePhysics";

/** Every rebindable action — movement plus standalone actions. */
export type BindableAction = MovementAction | ActionKey;

export type Keybindings = Record<BindableAction, string>;

export const MOVEMENT_ACTIONS: MovementAction[] = ["forward", "backward", "left", "right", "up", "down"];

export const ACTION_KEYS: ActionKey[] = ["togglePhysics"];

/** All rebindable actions, used for the duplicate-key swap so no two actions share a key. */
export const BINDABLE_ACTIONS: BindableAction[] = [...MOVEMENT_ACTIONS, ...ACTION_KEYS];

export const MOVEMENT_ACTION_LABELS: Record<MovementAction, string> = {
  forward: "Move forward",
  backward: "Move backward",
  left: "Strafe left",
  right: "Strafe right",
  up: "Move up / jump",
  down: "Move down",
};

export const ACTION_LABELS: Record<ActionKey, string> = {
  togglePhysics: "Toggle physics",
};

export const DEFAULT_KEYBINDINGS: Keybindings = {
  forward: "KeyW",
  backward: "KeyS",
  left: "KeyA",
  right: "KeyD",
  up: "Space",
  down: "ShiftLeft",
  togglePhysics: "KeyP",
};

const STORAGE_KEY = "t3d-explorer-keybindings";

/** Load persisted bindings, falling back to defaults for any missing/invalid action. */
export function loadKeybindings(): Keybindings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_KEYBINDINGS };
    const parsed = JSON.parse(raw) as Partial<Record<BindableAction, unknown>>;
    const result = { ...DEFAULT_KEYBINDINGS };
    for (const action of BINDABLE_ACTIONS) {
      const code = parsed[action];
      if (typeof code === "string" && code) result[action] = code;
    }
    return result;
  } catch {
    return { ...DEFAULT_KEYBINDINGS };
  }
}

export function saveKeybindings(bindings: Keybindings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bindings));
  } catch {
    // Persistence is best-effort (e.g. private mode); the in-memory bindings still apply.
  }
}

/**
 * Assign `code` to `action`. If another action already uses `code`, the two swap keys so
 * every action stays bound to exactly one key.
 */
export function assignKeybinding(bindings: Keybindings, action: BindableAction, code: string): Keybindings {
  const next = { ...bindings };
  const previous = next[action];
  for (const other of BINDABLE_ACTIONS) {
    if (other !== action && next[other] === code) {
      next[other] = previous;
    }
  }
  next[action] = code;
  return next;
}

/** Human-readable label for a KeyboardEvent.code (e.g. "KeyW" -> "W", "ShiftLeft" -> "Left Shift"). */
export function formatKeyCode(code: string): string {
  if (code.startsWith("Key")) return code.slice(3);
  if (code.startsWith("Digit")) return code.slice(5);
  if (code.startsWith("Numpad")) return `Num ${code.slice(6)}`;
  if (code.startsWith("Arrow")) {
    const arrows: Record<string, string> = { ArrowUp: "↑", ArrowDown: "↓", ArrowLeft: "←", ArrowRight: "→" };
    return arrows[code] ?? code;
  }
  const named: Record<string, string> = {
    Space: "Space",
    ShiftLeft: "Left Shift",
    ShiftRight: "Right Shift",
    ControlLeft: "Left Ctrl",
    ControlRight: "Right Ctrl",
    AltLeft: "Left Alt",
    AltRight: "Right Alt",
    Tab: "Tab",
    Enter: "Enter",
  };
  return named[code] ?? code;
}
