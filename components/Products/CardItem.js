import axios from "axios";
import React from "react";
import { Card, Icon } from "semantic-ui-react";

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

	const getProducts = () => {
		axios.get("http://localhost:4000/products").then((res) => {
			if (res.data.length > 0) {
				setProduct(res.data);
			}
		});
	};

	return product.map((item, index) => {
		return (
			<Card
				image={item.productImage}
				header={item.productName}
				meta="Friend"
				description={item.productDes}
				extra={extra}
				key={index}
			/>
		);
	});
};

export default CardItem;
