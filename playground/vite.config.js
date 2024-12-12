import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import myPlugin from "../src/index";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), myPlugin()],
});
