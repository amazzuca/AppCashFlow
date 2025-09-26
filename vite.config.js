import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Reemplaza 'mi-app-flujo-de-caja' con el nombre de tu repo.
  base: '/AppCashFlow/', 
  plugins: [
    react(),
  ],
  // El bloque 'css' se ha eliminado para que no entre en conflicto
  // con el archivo postcss.config.js
})

