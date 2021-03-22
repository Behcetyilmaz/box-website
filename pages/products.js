import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import CardItem from "../components/Products/CardItem";
import ProductsMenu from "../components/Products/ProductsMenu";
import styles from "../styles/Products.module.css";

@inject("products")
@observer
export default class Products extends Component {
	componentDidMount() {
		const { products } = this.props;
		products.getProductsCall.execute("get_products");
	}

	render() {
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
}
