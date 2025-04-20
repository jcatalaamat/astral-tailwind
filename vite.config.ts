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
    // Add a custom plugin to handle image imports
    {
      name: 'handle-image-imports',
      load(id) {
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
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif']
})
