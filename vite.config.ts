import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@Form": path.resolve(__dirname, "./src/lib/Form/!Form.import.ts"),
		},
	},
});
