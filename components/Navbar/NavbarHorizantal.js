import Link from "next/link";
import React from "react";
import styles from "../../styles/Nav.module.css";
import { MenuItems } from "./MenuItems";

function NavbarHorizantal() {
	return (
		<ul className={styles.navLinkHorizantal}>
			{MenuItems.map((item) => {
				return (
					<li className={styles.navItemHorizantal} key={item.title}>
						<Link href={item.url}>{item.title}</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default NavbarHorizantal;
