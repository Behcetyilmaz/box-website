import React from "react";
import styles from "../../styles/Nav.module.css";
import NavAnimation from "./NavAnimation";

function Nav() {
	const [clicked, setClicked] = React.useState(false);

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
