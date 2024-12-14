import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import pugPlugin from "vite-plugin-pug";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [pugPlugin(), ViteImageOptimizer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/assets"),
    },
  },
});
