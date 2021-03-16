import React from "react";
import { Menu } from "semantic-ui-react";

export default function ProductsMenu() {
	const [activeItem, setActiveItem] = React.useState("enterprise");

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
	};

	return (
		<div style={{ position: "fixed" }}>
			<Menu vertical>
				<Menu.Item>
					<Menu.Header>Products</Menu.Header>

					<Menu.Menu>
						<Menu.Item
							name="enterprise"
							active={activeItem === "enterprise"}
							onClick={handleItemClick}
						/>
						<Menu.Item
							name="consumer"
							active={activeItem === "consumer"}
							onClick={handleItemClick}
						/>
					</Menu.Menu>
				</Menu.Item>

				<Menu.Item>
					<Menu.Header>CMS Solutions</Menu.Header>

					<Menu.Menu>
						<Menu.Item
							name="rails"
							active={activeItem === "rails"}
							onClick={handleItemClick}
						/>
						<Menu.Item
							name="python"
							active={activeItem === "python"}
							onClick={handleItemClick}
						/>
						<Menu.Item
							name="php"
							active={activeItem === "php"}
							onClick={handleItemClick}
						/>
					</Menu.Menu>
				</Menu.Item>

				<Menu.Item>
					<Menu.Header>Hosting</Menu.Header>

					<Menu.Menu>
						<Menu.Item
							name="shared"
							active={activeItem === "shared"}
							onClick={handleItemClick}
						/>
						<Menu.Item
							name="dedicated"
							active={activeItem === "dedicated"}
							onClick={handleItemClick}
						/>
					</Menu.Menu>
				</Menu.Item>

				<Menu.Item>
					<Menu.Header>Support</Menu.Header>

					<Menu.Menu>
						<Menu.Item
							name="email"
							active={activeItem === "email"}
							onClick={handleItemClick}
						>
							E-mail Support
						</Menu.Item>

						<Menu.Item
							name="faq"
							active={activeItem === "faq"}
							onClick={handleItemClick}
						>
							FAQs
						</Menu.Item>
					</Menu.Menu>
				</Menu.Item>
			</Menu>
		</div>
	);
}
