import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

const options = { pretty: true }; // В Продакшн-режимі зазвичай рекомендується вимикати, щоб мінімізувати розмір файлів
const locals = { name: "My Pug" };

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
});
