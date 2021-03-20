import axios from "axios";
import React from "react";
import { Card, Icon } from "semantic-ui-react";
import styles from "../../styles/Products.module.css";
const CardItem = () => {
	React.useEffect(() => {
		getProducts();
	}, []);

	const extra = (
		<a>
			<Icon name="user" />
			16 Friends
		</a>
	);

	const [product, setProduct] = React.useState([]);

	const getProducts = async () => {
		await axios.get("http://localhost:8080/api/products").then((res) => {
			if (res.data) {
				setProduct(res.data.products);
			}
		});
	};

	return product.map((item, index) => {
		return (
			<Card
				onClick={() => alert("detaya gidecek...")}
				className={styles.cardItem}
				image={item.productImage}
				header={item.productName}
				meta="Friend"
				description={item.productDescription}
				extra={extra}
				key={index}
			/>
		);
	});
};

export default CardItem;
