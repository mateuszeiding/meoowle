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
					</div>

					<div className="col-12">
						<SwitchInput theme="blue" />
						<SwitchInput theme="blue" thirdDimension />
					</div>
					<div className="col-12">
						<SwitchInput theme="green" />
						<SwitchInput theme="green" thirdDimension />
					</div>
					<div className="col-12">
						<SwitchInput theme="red" />
						<SwitchInput theme="red" thirdDimension />
					</div>
					<div className="col-12">
						<SwitchInput />
						<SwitchInput thirdDimension />
					</div>
				</div>
			</section>
		</main>
	);
}
