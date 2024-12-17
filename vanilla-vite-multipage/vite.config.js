import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import pugPlugin from "vite-plugin-pug";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [
    pugPlugin({
      pretty: true, // Для зручного читання HTML
      locals: {}, // Передача змінних у Pug
    }),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/assets/"),
    },
  },
});
