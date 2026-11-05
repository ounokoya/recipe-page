import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base : le site est servi par GitHub Pages sous /recipe-page/
export default defineConfig({ base: '/recipe-page/', plugins: [tailwindcss()] })
