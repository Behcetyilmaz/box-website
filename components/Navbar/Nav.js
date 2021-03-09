import React from "react";
import styles from "../../styles/Nav.module.css";
import NavAnimation from "./NavAnimation";

function Nav() {
	const [clicked, setClicked] = React.useState(false);
	const navItemRef = React.createRef();

	const burgerOnClick = () => {
		//Toggle Nav
		setClicked(!clicked);
	};

	return (
		<div className={styles.container}>
			<div className={styles.logoWrapper}>
				<h4>Box Bunny</h4>
			</div>
			<NavAnimation show={clicked} />
			{/* <ul className={`${styles.navLink} ${clicked ? styles.navActive : ""}`}>
				{MenuItems.map((item, index) => {
					return (
						<animated.li className={styles.navItem} key={index} style={props}>
							<Link href={item.url}>{item.title}</Link>
						</animated.li>
					);
				})}
			</ul> */}
			<div
				className={`${styles.burger} ${clicked ? styles.toggle : ""}`}
				onClick={burgerOnClick}
			>
				<div className={styles.line1}></div>
				<div className={styles.line2}></div>
				<div className={styles.line3}></div>
			</div>
		</div>
	);
}

export default Nav;
