import type { ChangeEvent } from "react";

type Props = {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ onChange }: Props) {
	return (
		<div className="form-switch">
			<input type="checkbox" className="form-check-input" onChange={onChange} />
		</div>
	);
}
