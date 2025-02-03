import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@Form": path.resolve(__dirname, "./src/lib/Form/!Form.import.ts"),
			"@Buttons": path.resolve(
				__dirname,
				"./src/lib/Buttons/!Buttons.import.ts",
			),
			"@Util": path.resolve(__dirname, "./src/lib/Util/!Util.import.ts"),
			"@Nav": path.resolve(__dirname, "./src/lib/Nav/!Nav.import.ts"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use '/src/config/scss/variables/variables.scss' as *;
				`,
			},
		},
	},
});
