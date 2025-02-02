export default function (...args: (string | undefined | boolean)[]): string {
	return args.filter(Boolean).join(" ");
}
