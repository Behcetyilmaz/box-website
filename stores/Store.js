import { create } from "mobx-persist";

const hydrate = create({
	jsonify: false,
});

export default class Store {
	isReady = false;

	constructor(stores) {
		Object.defineProperty(this, "stores", { value: stores, writable: true });
	}

	get stores() {
		return null;
	}

	get hydrate() {
		return hydrate;
	}

	async setup() {}
}
