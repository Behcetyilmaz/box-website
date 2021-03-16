import React from "react";
import styles from "../../styles/Nav.module.css";
import NavAnimation from "./NavAnimation";
import NavbarHorizantal from "./NavbarHorizantal";

function Nav() {
	const [clicked, setClicked] = React.useState(false);

	const burgerOnClick = () => {
		//Toggle Nav
		setClicked(!clicked);
	};

	return (
		<nav>
			<div className={styles.logoWrapper}>
				<h4>Box Bunny</h4>
			</div>

			<NavbarHorizantal />

			<div
				className={`${styles.burger} ${clicked ? styles.toggle : ""}`}
				onClick={burgerOnClick}
			>
				<div className={styles.line1}></div>
				<div className={styles.line2}></div>
				<div className={styles.line3}></div>
			</div>

			<NavAnimation
				show={clicked}
				toggle={() => {
					setClicked(!clicked);
				}}
			/>
		</nav>
	);
}

export default Nav;
