/**
 * Ensures that block, where it's declared, will be never reached.
 * Use to make exhaustive switch statements.
 * @param _x Value to check for. Use enum or union here.
 * @param error Error to throw in case it was reached
 */
export const assertNever = (_x: never, error: Error): never => {
  throw error
}
