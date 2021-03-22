import Products from "./providers/Products";

const stores = {};

export async function initializeStores() {
	// burada store'ları "store" objesine ekle
	stores.products = new Products(stores);

	for (const name of Object.keys(stores)) {
		if (!stores[name].isReady) {
			stores[name].isReady = true;
			await stores[name].setup();
		}
	}

	return stores;
}

export function getStores() {
	return stores;
}
