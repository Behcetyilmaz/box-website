import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

export default function ProductsMenu() {
	const [activeItem, setActiveItem] = useState("40x40");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	// Send req
	useEffect(() => {
		getData();
	}, []);

	// Load Data
	const getData = async () => {
		setLoading(!loading);

		let res = await axios.get("http://localhost:4000/categories");
		if (res) {
			await setData(res.data);
		}
	};

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<div style={{ position: "fixed" }}>
			<Menu vertical>
				{data.map((item, index) => {
					return (
						<Menu.Item key={index}>
							<Menu.Header>{item.name}</Menu.Header>
							<Menu.Menu>
								{item.subCategories?.map((sub, subIndex) => {
									return (
										<Menu.Item
											key={subIndex}
											name={sub.name}
											active={activeItem === sub.name}
											onClick={handleItemClick}
										/>
									);
								})}
							</Menu.Menu>
						</Menu.Item>
					);
				})}
			</Menu>
		</div>
	);
}
