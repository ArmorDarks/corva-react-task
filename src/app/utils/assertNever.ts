/**
 * Ensures that block, where it's declared, will be never reached.
 * Use to make exhaustive switch statements.
 * @param x Value to check for. Use enum or union here.
 */
export const assertNever = (x: never): never => x
