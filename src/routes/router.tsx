import {
	createBrowserRouter,
	RouterProvider,
	type RouteObject,
} from "react-router-dom";
import App from "../App";
import ToggleSwitchRoute from "./root/elements/form/ToggleSwitch.route";
import RadioButtonRoute from "./root/elements/form/RadioButton.route";

export const routerObj: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "elements",
				children: [
					{
						path: "form",
						children: [
							{
								path: "toggle-switch",
								element: <ToggleSwitchRoute />,
							},
							{
								path: "radio-button",
								element: <RadioButtonRoute />,
							},
							{
								path: "text-input",
							},
							{
								path: "textarea",
							},
						],
					},
				],
			},
		],
	},
];

export default function Router() {
	const router = createBrowserRouter(routerObj);

	return <RouterProvider router={router} />;
}
