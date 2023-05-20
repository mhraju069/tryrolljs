export type FilterOption<F extends string> = {
  title: string
  value: F
}

export interface FiltersProps<F extends string = string> {
  options: FilterOption<F>[]
  onChange: (filter: FilterOption<F>) => void
  value?: string
}
