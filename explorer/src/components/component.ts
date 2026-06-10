import type { ReadonlySignal } from "../store/reactive.js";
import { effect } from "../store/reactive.js";

type Disposer = () => void;

/**
 * Base class giving every UI component a uniform lifecycle and teardown contract.
 *
 * Components register their event listeners, signal bindings, and child components
 * through the helpers below so that a single `destroy()` cleans everything up. This
 * is what prevents leaks like global `document` listeners outliving their component.
 */
export abstract class Component<E extends HTMLElement = HTMLElement> {
  abstract readonly root: E;

  private readonly disposers: Disposer[] = [];
  private destroyed = false;

  /** Register an arbitrary teardown callback. */
  protected onDispose(disposer: Disposer): void {
    this.disposers.push(disposer);
  }

  /** Add a DOM event listener that is automatically removed on destroy(). */
  protected listen<T extends EventTarget, K extends string>(
    target: T,
    type: K,
    handler: (event: Event) => void,
    options?: AddEventListenerOptions | boolean
  ): void {
    target.addEventListener(type, handler, options);
    this.disposers.push(() => target.removeEventListener(type, handler, options));
  }

  /** Bind a signal to a callback; runs immediately and unsubscribes on destroy(). */
  protected bind<T>(source: ReadonlySignal<T>, run: (value: T) => void): void {
    this.disposers.push(effect(() => run(source.get())));
  }

  /** Take ownership of a child component so it is destroyed with this one. */
  protected own<C extends Component>(child: C): C {
    this.disposers.push(() => child.destroy());
    return child;
  }

  /** Tear down listeners, bindings, and children, then remove the root from the DOM. */
  destroy(): void {
    if (this.destroyed) return;
    this.destroyed = true;
    while (this.disposers.length) {
      this.disposers.pop()?.();
    }
    this.root.remove();
  }
}
