import { createElement } from 'react'

function Component({ children }) {
  return createElement('div', {}, children ?? 'test')
}

module.exports = Component
