import { test, expect } from "vitest";
import { buildCategoryOptions, buildMapOptions, filterComboboxOptions } from "../src/store/map-catalog.js";

const maps = [
  { name: "Plains of Ashford", category: "Ascalon", baseId: 188591, categoryIndex: 1 },
  { name: "Black Citadel", category: "Ascalon", baseId: 196585, categoryIndex: 1 },
  { name: "Queensdale", category: "Kryta", baseId: 192711, categoryIndex: 2 },
];

test("buildCategoryOptions sorts by category index and counts entries", () => {
  const options = buildCategoryOptions(maps);
  expect(options.map((option) => [option.id, option.meta])).toEqual([
    ["Ascalon", "2 maps"],
    ["Kryta", "1 map"],
  ]);
});

test("map options support text and baseId search", () => {
  const options = buildMapOptions(maps, "Ascalon");
  const byName = filterComboboxOptions(options, "citadel");
  const byId = filterComboboxOptions(options, "188591");

  expect(byName.map((option) => option.label)).toEqual(["Black Citadel"]);
  expect(byId.map((option) => option.label)).toEqual(["Plains of Ashford"]);
});
