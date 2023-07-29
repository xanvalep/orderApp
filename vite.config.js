import {defineConfig} from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
        reactRefresh(),
    ],
    build: {
        outDir: "build",
    },
});