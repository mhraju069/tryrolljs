import { useWindowDimensions } from 'react-native'

type Breakpoint = 'base' | 'md' | 'sm' | 'lg' | 'xl' | '2xl'

const breakpoints: Record<Breakpoint, number> = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
  '2xl': 1536,
}

type UseBreakpointValueParam = Partial<Record<Breakpoint, any>>

export function useBreakpointValue(values: UseBreakpointValueParam) {
  const windowWidth = useWindowDimensions().width
  const breakpointsOrder: Breakpoint[] = ['base', 'md', 'sm', 'lg', 'xl', '2xl']

  for (const breakpoint of breakpointsOrder) {
    if (windowWidth < breakpoints[breakpoint] && values[breakpoint]) {
      return values[breakpoint]
    }
  }

  return values.base
}
