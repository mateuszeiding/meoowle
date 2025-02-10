import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./config/scss/index.scss";
import "./config/js/!export.ts";
import { ContextProvider } from "./context/Provider.context.tsx";
import Router from "./routes/router.tsx";

const root = document.getElementById("root");

if (!root) {
	throw Error("Element with id 'root' does NOT exists.");
}

createRoot(root).render(
	<StrictMode>
		<ContextProvider>
			<Router />
		</ContextProvider>
	</StrictMode>,
);
