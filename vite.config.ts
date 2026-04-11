import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/sky-fitness-pro/",
  define: {
    "process.env.BASE_URL": JSON.stringify("/sky-fitness-pro/"),
  },
  plugins: [react()],
})
