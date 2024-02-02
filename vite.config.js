import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    adonisjs({
      entrypoints: ['resources/layouts/app.tsx'],
      reload: ['resources/views/**/*.edge'],
    }),

    react(),
  ],
})
