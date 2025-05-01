// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Export with tailwind config directly here:
export default defineConfig({
  plugins: [react(),tailwindcss()],
  
})
