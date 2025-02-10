declare global {
	interface String {
		convertKebabToText(): string;
	}
}
String.prototype.convertKebabToText = function () {
	return this.split("-")
		.map((s) => s.toCapitalized())
		.join(" ");
};

export {};
