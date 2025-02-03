import type { InputHTMLAttributes } from "react";
import "./index.scss";
import { cls } from "@Util";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	theme?: Theme;
	thirdDimension?: boolean;
};

export default function (props: Props) {
	return (
		<div
			className={cls("form-switch", props.thirdDimension && "third-dimension")}
		>
			<input
				{...props}
				type="checkbox"
				className={cls("form-check-input", `theme-${props.theme ?? "default"}`)}
			/>
		</div>
	);
}
