import { inject, observer } from "mobx-react";
import React from "react";
import { Card, Icon } from "semantic-ui-react";
import styles from "../../styles/Products.module.css";
const CardItem = inject("products")(
	observer((props) => {
		const extra = (
			<span>
				<Icon name="user" />
				16 Friends
			</span>
		);

		const [product, setProduct] = React.useState([]);

		return props.products.products.map((item, index) => {
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
	})
);

export default CardItem;
