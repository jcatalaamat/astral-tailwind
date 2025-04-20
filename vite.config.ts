import { defineConfig } from 'vite'
import { one } from 'one/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/astral-tailwind/',
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
    // Plugin to mock React Navigation and handle image imports
    {
      name: 'mock-react-navigation',
      resolveId(id) {
        // Intercept React Navigation imports
        if (id.includes('@react-navigation')) {
          return resolve(__dirname, 'empty-module.js');
        }
        // Handle any specific modules that need mocking
        if (id.endsWith('useBackButton')) {
          return resolve(__dirname, 'empty-module.js');
        }
      },
      load(id) {
        // Handle image imports
        if (id.endsWith('.png') || id.endsWith('.jpg') || id.endsWith('.svg')) {
          return 'export default "";'
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      external: [
        '@react-navigation/core',
        '@react-navigation/native',
        '@react-navigation/elements',
        '@react-navigation/native-stack',
        '@react-navigation/routers',
        '@react-navigation/stack',
        'react-native-screens',
        'react-native-safe-area-context'
      ]
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif']
})
