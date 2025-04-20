import { defineConfig } from 'vite'
import { one } from 'one/vite'

export default defineConfig({
  base: '/astral-tailwind/',
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
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
  }
})
