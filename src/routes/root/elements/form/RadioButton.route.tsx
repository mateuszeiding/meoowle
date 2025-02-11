import { RadioButton } from "@Form";

export default function () {
	return (
		<div className="d-flex flex-column g-row-6">
			<fieldset className="col-12 d-flex flex-row g-col-5">
				<RadioButton theme="blue" name="blue" />
				<RadioButton theme="blue" name="blue" thirdDimension />
			</fieldset>
			<fieldset className="col-12 d-flex flex-row g-col-5">
				<RadioButton theme="green" name="green" />
				<RadioButton theme="green" name="green" thirdDimension />
			</fieldset>
			<fieldset className="col-12 d-flex flex-row g-col-5">
				<RadioButton theme="red" name="red" />
				<RadioButton theme="red" name="red" thirdDimension />
			</fieldset>
			<fieldset className="col-12 d-flex flex-row g-col-5">
				<RadioButton name="default" />
				<RadioButton name="default" thirdDimension />
			</fieldset>
		</div>
	);
}
