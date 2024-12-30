import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/learn-html-css/06-react-vite-pocketbase/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
 
});