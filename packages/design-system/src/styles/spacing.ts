export type SpacingValue =
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 128
  | 'auto'

export const spacingValues: SpacingValue[] = [
  4,
  8,
  12,
  16,
  20,
  24,
  32,
  40,
  48,
  56,
  64,
  128,
  'auto',
]

export const spacing = spacingValues.reduce(
  (acc, spacingValue) => ({
    ...acc,
    [spacingValue]: spacingValue,
  }),
  {} as Record<SpacingValue, SpacingValue>,
)
