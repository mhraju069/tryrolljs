declare module '*.svg' {
  import { FunctionComponent } from 'react'
  type Props = { color?: string }
  const Component: FunctionComponent<Props>
  export default Component
}

declare module '*.ttf' {
  const content: string
  export default content
}
