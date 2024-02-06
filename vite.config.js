import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "MiniGL",
      // the proper extensions will be added
      fileName: "mini-gl",
      formats: ["es", "cjs", "umd", "iife"],
    },
    rollupOptions: {
      external: ["gl-matrix"],
      output: {
        globals: {
          "gl-matrix": "glMatrix",
        },
      },
    },
  },
});
