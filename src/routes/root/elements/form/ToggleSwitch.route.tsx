import { ToggleSwitch } from "@Form";

export default function () {
	return (
		<div className="d-flex flex-column g-row-6">
			<div className="col-12 d-flex flex-row g-col-5">
				<ToggleSwitch theme="blue" />
				<ToggleSwitch theme="blue" thirdDimension />
			</div>
			<div className="col-12 d-flex flex-row g-col-5">
				<ToggleSwitch theme="green" />
				<ToggleSwitch theme="green" thirdDimension />
			</div>
			<div className="col-12 d-flex flex-row g-col-5">
				<ToggleSwitch theme="red" />
				<ToggleSwitch theme="red" thirdDimension />
			</div>
			<div className="col-12 d-flex flex-row g-col-5">
				<ToggleSwitch />
				<ToggleSwitch thirdDimension />
			</div>
		</div>
	);
}
