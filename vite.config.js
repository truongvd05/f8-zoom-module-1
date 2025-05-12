import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";
import { register } from "module";

export default defineConfig({
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/index.html"),
            },
        },
    },
    plugins: [ViteEjsPlugin()],
});
