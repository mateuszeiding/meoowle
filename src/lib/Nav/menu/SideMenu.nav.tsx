import { ButtonRetro3D } from "@Buttons";
import { useMemo, useRef, useState } from "react";
import { NavLink, type RouteObject, useLocation } from "react-router-dom";
import { routerObj } from "./../../../routes/router";

export default function () {
	const [theme, setTheme] = useState<Theme>("default");
	const location = useLocation();
	const rootPath = useRef("");

	const currentRoutes = useMemo(() => {
		rootPath.current = "";
		const routeDepth = location.pathname
			.split("/")
			.filter((s) => s.length).length;

		let obj: RouteObject | undefined = routerObj[0];

		for (let i = 0; i < routeDepth; i++) {
			obj = obj?.children?.[0];

			rootPath.current = `${rootPath.current}/${obj?.path}`;
		}

		return obj?.children?.map((ch) => ch.path) ?? [];
	}, [location.pathname]);

	function* changeTheme(): Generator<Theme> {
		const values: Theme[] = ["blue", "green", "red", "default"];
		while (true) {
			yield* values;
		}
	}

	const themeGenRef = useRef(changeTheme());

	return (
		<nav className="d-flex flex-column g-row-6">
			<NavLink style={{ textDecoration: "none" }} to={`${rootPath.current}/..`}>
				<ButtonRetro3D
					theme={theme}
					disabled={location.pathname === "/"}
					onClick={() => setTheme(themeGenRef.current.next().value)}
				>
					←
				</ButtonRetro3D>
			</NavLink>
			{Array.from({ length: 8 }).map((_, i) => (
				<NavLink
					style={{ textDecoration: "none" }}
					key={currentRoutes[i] ?? window.crypto.randomUUID()}
					to={
						currentRoutes.length > i
							? `${rootPath.current}/${currentRoutes[i]}`
							: {}
					}
				>
					<ButtonRetro3D
						theme={theme}
						disabled={i >= currentRoutes.length}
						onClick={() => setTheme(themeGenRef.current.next().value)}
					>
						{currentRoutes[i]?.convertKebabToText() ?? undefined}
					</ButtonRetro3D>
				</NavLink>
			))}
		</nav>
	);
}
