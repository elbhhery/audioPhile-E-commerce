import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/audioPhile-E-commerce/",
  plugins: [tailwindcss(), react()],
});
