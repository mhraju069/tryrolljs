declare module '*.svg' {
  import { FunctionComponent } from 'react'
  import { SvgProps } from 'react-native-svg'
  const Component: FunctionComponent<SvgProps>
  export default Component
}

declare module '*.ttf' {
  const content: string
  export default content
}
