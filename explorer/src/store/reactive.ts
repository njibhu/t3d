/**
 * Minimal reactive primitive — signals, computed values, and effects.
 *
 * This is the single source of truth mechanism the UI binds to, replacing the old
 * "mutate state then manually call render()" pattern. It is intentionally tiny
 * (no framework): reads inside an `effect`/`computed` are tracked automatically and
 * re-run when any dependency changes.
 */

interface ReactiveEffect {
  run: () => void;
  deps: Set<Set<ReactiveEffect>>;
  active: boolean;
}

let activeEffect: ReactiveEffect | null = null;

function unlink(effect: ReactiveEffect): void {
  for (const dep of effect.deps) {
    dep.delete(effect);
  }
  effect.deps.clear();
}

export interface ReadonlySignal<T> {
  get(): T;
  peek(): T;
  subscribe(listener: (value: T) => void): () => void;
}

export class Signal<T> implements ReadonlySignal<T> {
  private value: T;
  private readonly subscribers = new Set<ReactiveEffect>();

  constructor(initial: T) {
    this.value = initial;
  }

  /** Read the value and register the current effect (if any) as a dependency. */
  get(): T {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
      activeEffect.deps.add(this.subscribers);
    }
    return this.value;
  }

  /** Read the value without establishing a dependency. */
  peek(): T {
    return this.value;
  }

  set(next: T): void {
    if (Object.is(next, this.value)) return;
    this.value = next;
    // Copy first: effects may re-subscribe while we iterate.
    for (const effect of [...this.subscribers]) {
      effect.run();
    }
  }

  update(fn: (prev: T) => T): void {
    this.set(fn(this.value));
  }

  /** Convenience subscription: fires immediately and on every change. Returns an unsubscribe. */
  subscribe(listener: (value: T) => void): () => void {
    return effect(() => listener(this.get()));
  }
}

export function signal<T>(initial: T): Signal<T> {
  return new Signal(initial);
}

/** Run `fn` now and re-run whenever any signal it reads changes. Returns a disposer. */
export function effect(fn: () => void): () => void {
  const reactiveEffect: ReactiveEffect = {
    deps: new Set(),
    active: true,
    run(): void {
      if (!reactiveEffect.active) return;
      unlink(reactiveEffect);
      const previous = activeEffect;
      activeEffect = reactiveEffect;
      try {
        fn();
      } finally {
        activeEffect = previous;
      }
    },
  };
  reactiveEffect.run();
  return () => {
    reactiveEffect.active = false;
    unlink(reactiveEffect);
  };
}

/** A derived, read-only signal that recomputes when its dependencies change. */
export function computed<T>(fn: () => T): ReadonlySignal<T> {
  const derived = new Signal<T>(undefined as T);
  effect(() => derived.set(fn()));
  return derived;
}
