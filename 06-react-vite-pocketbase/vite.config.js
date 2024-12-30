import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/learn-html-css/06-react-vite-pocketbase/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "output.css") {
            return "output.css"; // 특정 CSS 파일 이름 고정
          }
          return "[name].[ext]";
        },
      },
    },
  },
});
