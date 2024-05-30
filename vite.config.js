import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/portfolio_Frosty" : "/", // Spécifie le chemin de base pour le déploiement sur GitHub Pages
  plugins: [react()],
})
