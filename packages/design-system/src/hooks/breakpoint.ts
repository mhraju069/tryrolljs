import { useWindowDimensions } from 'react-native'

type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const breakpoints: Record<Breakpoint, number> = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
  '2xl': 1536,
}

type UseBreakpointValueParam = Partial<Record<Breakpoint, any>>

export const useBreakpointValue = (values: UseBreakpointValueParam) => {
  const { width } = useWindowDimensions()
  const breakpointOrder: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'base']

  for (const breakpoint of breakpointOrder) {
    if (width >= breakpoints[breakpoint]) {
      for (
        let i = breakpointOrder.indexOf(breakpoint);
        i < breakpointOrder.length;
        i++
      ) {
        const checkBreakpoint = breakpointOrder[i]
        if (values[checkBreakpoint] !== undefined) {
          return values[checkBreakpoint]
        }
      }
    }
  }

  return values.base
}
