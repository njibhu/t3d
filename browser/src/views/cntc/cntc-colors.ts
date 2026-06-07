/**
 * Presentation-only colour palette for CNTC decoded fields. The library decides
 * *which* fields exist and in *what order*; the browser simply colours them in
 * that order so a field's hex-dump highlight always matches its swatch in the
 * decoded panel. No parsing knowledge lives here.
 *
 * Colours are light so the annotated hex bytes (dark text) stay readable.
 */
const PALETTE = [
  "#d8ecff",
  "#f4d8ff",
  "#d8ffe1",
  "#ffe7d6",
  "#ffe1ea",
  "#e1f0ff",
  "#fff2d8",
  "#e6e0ff",
  "#fff0c9",
  "#dff7d6",
  "#ffe2b8",
  "#f3d8e8",
  "#ffd9d9",
  "#d8fff4",
  "#ffd6f5",
  "#d6f0ff",
];

/** Colour for the field at the given position in the library's field list. */
export function cntcFieldColor(index: number): string {
  return PALETTE[index % PALETTE.length];
}
