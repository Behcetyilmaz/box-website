import axios from "axios";
import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

export default function ProductsMenu() {
	const [activeItem, setActiveItem] = useState("40x40");
	const [data, setData] = useState([]);
	const [subData, setSubData] = useState([]);
	const [loading, setLoading] = useState(false);
	// Send req
	useEffect(() => {
		getData();
		getSubData();
	}, []);

	// Get Categories
	const getData = async () => {
		setLoading(!loading);

		let res = await axios.get("http://localhost:8080/api/categories");
		if (res) {
			await setData(res.data.productCategories);
		}
	};

	// Get Sub-Categories

	const getSubData = async () => {
		setLoading(!loading);

		let res = await axios.get("http://localhost:8080/api/sub-categories");
		if (res) {
			await setSubData(res.data.productSubCategories);
		}
	};

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<div style={{ position: "fixed" }}>
			<Menu vertical>
				{data.map((item, index) => {
					const subDataFilter = subData.filter(
						(event, index) => event.categoryId === item._id
					);
					return (
						<Menu.Item key={index}>
							<Menu.Header>{item.categoryName}</Menu.Header>
							<Menu.Menu>
								{subDataFilter.map((sub, subIndex) => {
									return (
										<Menu.Item
											key={subIndex}
											name={sub.subCategoryName}
											active={activeItem === sub.subCategoryName}
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
