import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        login: path.resolve(__dirname, "./login/index.html"),
        about: path.resolve(__dirname, "./about/index.html"),
        contact: path.resolve(__dirname, "./contact/index.html"),
      },
    },
  },
});
