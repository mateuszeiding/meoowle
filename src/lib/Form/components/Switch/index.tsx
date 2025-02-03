import type { InputHTMLAttributes } from "react";
import "./index.scss";
import { cls } from "@Util";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	theme?: Theme;
};

export default function (props: Props) {
	return (
		<div className="form-switch">
			<input
				{...props}
				type="checkbox"
				className={cls("form-check-input", `theme-${props.theme ?? "default"}`)}
			/>
		</div>
	);
}
