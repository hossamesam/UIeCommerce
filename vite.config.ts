import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/UIeCommerce/', // استبدل REPO_NAME باسم الريبو على GitHub
  plugins: [
    tailwindcss()],
})
