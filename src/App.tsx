import { RadioInput, SwitchInput } from "@Form";
import { SideMenu } from "@Nav";

export default function App() {
	return (
		<main className="grid-main">
			<aside className="grid-menu">
				<SideMenu />
			</aside>
			<section className="grid-container">
				<div className="row">
					<div className="col-12">
						<RadioInput />
						<SwitchInput />
					</div>
				</div>
			</section>
		</main>
	);
}
