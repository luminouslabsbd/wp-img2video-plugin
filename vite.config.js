import {defineConfig} from 'vite';
import React from "@vitejs/plugin-react"
export default defineConfig({
    plugins: [
        React(),
    ],
    build:{
        outDir: 'build',
        rollupOptions: {
            input: './src/index.jsx',
            output: {
                entryFileNames: 'index.js',
                assetFileNames: (assetInfo) => {
                    // Check if the file is CSS and rename it to index.css
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'index.css';
                    }
                    return '[name].[ext]';
                },
            },
        }
    }
})