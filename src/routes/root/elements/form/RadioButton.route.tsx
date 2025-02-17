import { RadioButton } from "@Form";

export default function () {
	return (
		<div className="d-flex flex-row g-5">
			<div className="d-flex flex-column g-row-6">
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton theme="blue" name="blue" />
					<RadioButton theme="blue" name="blue" />
				</fieldset>
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton theme="green" name="green" />
					<RadioButton theme="green" name="green" />
				</fieldset>
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton theme="red" name="red" />
					<RadioButton theme="red" name="red" />
				</fieldset>
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton name="default" />
					<RadioButton name="default" />
				</fieldset>
			</div>
			<div className="d-flex flex-column g-row-6">
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton theme="blue" name="blue3d" thirdDimension />
					<RadioButton theme="blue" name="blue3d" thirdDimension />
				</fieldset>
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton theme="green" name="green3d" thirdDimension />
					<RadioButton theme="green" name="green3d" thirdDimension />
				</fieldset>
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton theme="red" name="red3d" thirdDimension />
					<RadioButton theme="red" name="red3d" thirdDimension />
				</fieldset>
				<fieldset className="col-12 d-flex flex-row g-col-5">
					<RadioButton name="default3d" thirdDimension />
					<RadioButton name="default3d" thirdDimension />
				</fieldset>
			</div>
		</div>
	);
}
