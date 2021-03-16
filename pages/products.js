import React from "react";
import CardItem from "../components/Products/CardItem";
import ProductsMenu from "../components/Products/ProductsMenu";
import styles from "../styles/Products.module.css";

export default function products() {
	return (
		<div className={styles.productsContainer}>
			<div className={styles.menuWrapper}>
				<ProductsMenu />
			</div>
			<div className={styles.cardWrapper}>
				<CardItem />
			</div>
		</div>
	);
}
