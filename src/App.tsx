import { SideMenu } from "@Nav";
import { Outlet } from "react-router-dom";

export default function App() {
	return (
		<main className="grid-main">
			<aside className="grid-menu">
				<SideMenu />
			</aside>
			<section className="grid-container">
				<div className="row">
					<div className="col-12">
						<Outlet />
					</div>
				</div>
			</section>
		</main>
	);
}
