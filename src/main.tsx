import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./config/scss/index.scss";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
	throw Error("Element with id 'root' does NOT exists.");
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
