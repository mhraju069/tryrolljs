import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow'

export default defineConfig({
  server: {
    port: 3000,
  },
  define: {
    global: 'window',
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.js', '.ts'],
    },
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: [
      '.web.ts',
      '.web.tsx',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
    ],
  },
  plugins: [react(), flowPlugin()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
