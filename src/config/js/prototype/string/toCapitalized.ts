declare global {
	interface String {
		toCapitalized(): string;
	}
}

String.prototype.toCapitalized = function () {
	return this[0].toUpperCase() + this.slice(1, this.length);
};

export {};
