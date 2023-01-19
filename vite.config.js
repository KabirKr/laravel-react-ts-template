import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        host: "127.0.0.1",
        port: 3000,
    },
    plugins: [
        laravel({
            input: "resources/client/index.tsx",
            refresh: true,
        }),
        react(),
    ],
});
