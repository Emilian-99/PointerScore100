import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        impressum: resolve(__dirname, "pages/impressum.html"),
        datenschutz: resolve(__dirname, "pages/datenschutz.html"),
        kontakt: resolve(__dirname, "pages/kontakt.html"),
      },
    },
  },
  server: { port: 4173 },
  preview: { port: 4173 },
});
