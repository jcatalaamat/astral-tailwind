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
        '@react-navigation/native'
      ]
    }
  }
})
