import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://santiR22.github.io/rick-and-morty-rest-api/",
  plugins: [react()],
});
