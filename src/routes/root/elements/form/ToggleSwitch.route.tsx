import { SwitchInput } from "@Form";

export default function () {
	return (
		<div className="d-flex flex-column g-row-6">
			<div className="col-12 d-flex flex-row g-col-5">
				<SwitchInput theme="blue" />
				<SwitchInput theme="blue" thirdDimension />
			</div>
			<div className="col-12 d-flex flex-row g-col-5">
				<SwitchInput theme="green" />
				<SwitchInput theme="green" thirdDimension />
			</div>
			<div className="col-12 d-flex flex-row g-col-5">
				<SwitchInput theme="red" />
				<SwitchInput theme="red" thirdDimension />
			</div>
			<div className="col-12 d-flex flex-row g-col-5">
				<SwitchInput />
				<SwitchInput thirdDimension />
			</div>
		</div>
	);
}
