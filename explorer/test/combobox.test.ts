import { test, expect, vi } from "vitest";
import { Combobox } from "../src/components/combobox.js";

const options = [
  { id: "a", label: "Alpha" },
  { id: "b", label: "Beta" },
  { id: "c", label: "Gamma" },
];

test("destroy() removes the document-level listener and the root element", () => {
  const addSpy = vi.spyOn(document, "addEventListener");
  const removeSpy = vi.spyOn(document, "removeEventListener");

  const combo = new Combobox({ placeholder: "Pick" });
  document.body.appendChild(combo.root);

  const pointerAdds = addSpy.mock.calls.filter(([type]) => type === "pointerdown");
  expect(pointerAdds.length).toBe(1);

  combo.destroy();

  const pointerRemoves = removeSpy.mock.calls.filter(([type]) => type === "pointerdown");
  expect(pointerRemoves.length).toBe(1);
  expect(combo.root.isConnected).toBe(false);

  addSpy.mockRestore();
  removeSpy.mockRestore();
});

test("keyboard navigation commits the active option", () => {
  const onChange = vi.fn();
  const combo = new Combobox({ placeholder: "Pick", onChange });
  document.body.appendChild(combo.root);
  combo.setOptions(options);

  combo.focus();
  const input = combo.root.querySelector<HTMLInputElement>(".combo-input")!;
  input.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
  input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(combo.getValue()).not.toBeNull();

  combo.destroy();
});
