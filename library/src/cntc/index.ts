/**
 * `cntc` (PackContent) parsing utilities.
 *
 * This module collects the parsing structures we are confident about: the
 * record layout of the `Main` chunk, known content-type descriptions, and the
 * certain decoding of type 35 ("Items") entries. Use it as the home for new,
 * well-established `cntc` type knowledge.
 */
export * from "./content";
export * from "./schema";
export * from "./fields";
export * from "./resolver";
export * from "./schemas/items";
export * from "./schemas/maps";
export * from "./schemas/registry";
export * from "./schemas/type-ids";
