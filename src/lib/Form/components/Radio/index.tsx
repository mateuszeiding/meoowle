import type { InputHTMLAttributes } from "react";
import "./index.scss";
import { cls } from "@Util";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	theme?: Theme;
	thirdDimension?: boolean;
};

export default function (props: Props) {
	return (
		<input
			{...props}
			type="radio"
			className={cls(
				"form-check-input",
				`theme-${props.theme ?? "default"}`,
				props.thirdDimension && "third-dimension",
				props.className,
			)}
		/>
	);
}
