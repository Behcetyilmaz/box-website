import { Provider } from "mobx-react";
import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import { initializeStores } from "../stores/Configure.store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	const [stores, setStores] = useState(null);
	useEffect(() => {
		loadStores();
	}, []);
	const loadStores = async () => {
		const stores = await initializeStores();
		await setStores(stores);
		setLoading(false);
	};

	return loading ? (
		<div>Loading</div>
	) : (
		<Provider {...stores}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
