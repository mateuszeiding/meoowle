import { cls } from "@Util";

export default function () {
	return (
		<nav className="d-flex flex-column g-row-6">
			<button
				type="button"
				className={cls(
					"btn btn-link btn-justified",
					"tx-uppercase align-self-end",
				)}
			>
				Settings
			</button>
			<button
				type="button"
				className={cls(
					"btn btn-link theme-blue btn-justified",
					"tx-uppercase align-self-end",
				)}
			>
				Settings
			</button>
			<button
				type="button"
				className={cls(
					"btn btn-link theme-green btn-justified",
					"tx-uppercase align-self-end",
				)}
			>
				Settings
			</button>
			<button
				type="button"
				className={cls(
					"btn btn-link theme-red btn-justified",
					"tx-uppercase align-self-end",
				)}
			>
				Settings
			</button>
		</nav>
	);
}
