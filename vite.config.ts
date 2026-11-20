import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  base: "/Web-Droid/",
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  build: {
    target: "esnext",
  },
});
