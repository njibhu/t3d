import { test, expect, vi } from "vitest";
import { computed, effect, signal } from "../src/store/reactive.js";

test("signal.set notifies effects only when the value changes", () => {
  const count = signal(0);
  const runs = vi.fn();
  effect(() => {
    count.get();
    runs();
  });
  expect(runs).toHaveBeenCalledTimes(1); // immediate run

  count.set(1);
  expect(runs).toHaveBeenCalledTimes(2);

  count.set(1); // identical value, no notification
  expect(runs).toHaveBeenCalledTimes(2);
});

test("effect disposer stops further reactions", () => {
  const value = signal("a");
  const seen: string[] = [];
  const dispose = effect(() => seen.push(value.get()));

  value.set("b");
  dispose();
  value.set("c");

  expect(seen).toEqual(["a", "b"]);
});

test("computed re-derives from its dependencies", () => {
  const first = signal(2);
  const second = signal(3);
  const sum = computed(() => first.get() + second.get());

  expect(sum.get()).toBe(5);
  first.set(10);
  expect(sum.get()).toBe(13);
});

test("peek reads without subscribing", () => {
  const value = signal(1);
  const runs = vi.fn();
  effect(() => {
    value.peek();
    runs();
  });
  value.set(2);
  expect(runs).toHaveBeenCalledTimes(1); // peek did not establish a dependency
});
