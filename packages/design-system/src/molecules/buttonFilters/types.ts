export type ButtonFilterOption<F extends string> = {
  title: string
  value: F
}

export interface ButtonFiltersProps<F extends string = string> {
  options: ButtonFilterOption<F>[]
  onChange: (filter: ButtonFilterOption<F>) => void
  value?: string
}
