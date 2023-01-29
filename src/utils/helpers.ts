export const noop = () => {
  // @typescript-eslint/no-empty-function
}

export function roundTo(value: number, precision = 0) {
  const p = Math.pow(10, Math.max(0, precision))
  return Math.round(value * p + Number.EPSILON) / p
}
