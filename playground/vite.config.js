import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ComponentsTotal from "/Users/zego/source-code/unplugin-vue-components/src/index";

const Components = ComponentsTotal.vite;
console.log("ttt");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   dts: true,
    // }),
  ],
});
