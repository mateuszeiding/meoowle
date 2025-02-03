import { cls } from "@Util";
import "./index.scss";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	theme?: Theme;
};

export default function ({ ...props }: Props) {
	return (
		<button
			{...props}
			className={cls(
				"btn btn-link btn-justified",
				"tx-uppercase align-self-end",
				`theme-${props.theme ?? "default"}`,
			)}
		>
			{props.children}
		</button>
	);
}
