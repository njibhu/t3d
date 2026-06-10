import { formatRangeValue } from "./format.js";

export interface RangeRef {
  input: HTMLInputElement;
  value: HTMLSpanElement;
}

export function buildSection(title: string): HTMLElement {
  const section = document.createElement("section");
  section.className = "settings-section";
  const heading = document.createElement("h2");
  heading.textContent = title;
  section.appendChild(heading);
  return section;
}

export function wrapSettingRow(labelText: string, control: HTMLElement): HTMLDivElement {
  const row = document.createElement("div");
  row.className = "setting-row";
  const label = document.createElement("span");
  label.className = "field-label";
  label.textContent = labelText;
  row.append(label, control);
  return row;
}

/** Wrap a control (e.g. a combobox root) in a labelled `.field`. */
export function fieldWithLabel(labelText: string, control: HTMLElement): HTMLLabelElement {
  const field = document.createElement("label");
  field.className = "field";
  const label = document.createElement("span");
  label.className = "field-label";
  label.textContent = labelText;
  field.append(label, control);
  return field;
}

export function buildRange(
  labelText: string,
  min: number,
  max: number,
  step: number,
  value: number,
  onInput: (value: number) => void
): { row: HTMLDivElement; ref: RangeRef } {
  const row = document.createElement("div");
  row.className = "range-row";

  const label = document.createElement("label");
  label.className = "range-label";
  label.textContent = labelText;
  row.appendChild(label);

  const valueEl = document.createElement("span");
  valueEl.className = "range-value";
  row.appendChild(valueEl);

  const input = document.createElement("input");
  input.type = "range";
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);
  input.addEventListener("input", () => {
    const next = input.valueAsNumber;
    valueEl.textContent = formatRangeValue(next, step);
    onInput(next);
  });
  row.appendChild(input);

  valueEl.textContent = formatRangeValue(value, step);
  return { row, ref: { input, value: valueEl } };
}
