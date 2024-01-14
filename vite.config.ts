import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: "./auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./assets"),
      "@ui": path.resolve(__dirname, "./components/ui"),
      "@utils": path.resolve(__dirname, "./utils"),
    },
  },
});
