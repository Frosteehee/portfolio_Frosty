import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: '/portfolio_Frosty/', // Spécifie le chemin de base pour le déploiement sur GitHub Pages
  plugins: [react()],
})
