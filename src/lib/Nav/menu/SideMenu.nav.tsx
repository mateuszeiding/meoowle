import { ButtonRetro3D } from "@Buttons";

export default function () {
	return (
		<nav className="d-flex flex-column g-row-6">
			<ButtonRetro3D>Default</ButtonRetro3D>
			<ButtonRetro3D theme="blue">Blue</ButtonRetro3D>
			<ButtonRetro3D theme="green">Green</ButtonRetro3D>
			<ButtonRetro3D theme="red">Red</ButtonRetro3D>
		</nav>
	);
}
