import { useRef, type InputHTMLAttributes } from "react";
import "./index.scss";
import { cls } from "@Util";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	theme?: Theme;
	thirdDimension?: boolean;
};

export default function (props: Props) {
	const ref = useRef<HTMLInputElement | null>(null);
	return (
		<div
			className={cls("form-switch", props.thirdDimension && "third-dimension")}
		>
			<input
				{...props}
				aria-checked={ref.current?.checked}
				ref={ref}
				type="checkbox"
				role="switch"
				className={cls("form-check-input", `theme-${props.theme ?? "default"}`)}
			/>
		</div>
	);
}
