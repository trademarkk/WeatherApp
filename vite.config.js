import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 8080, // Change to a different port, like 8080 or 5000
    hmr: {
      overlay: false, // отключает overlay с ошибками
    },
  },
});
