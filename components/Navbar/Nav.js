import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Nav.module.css";
import { MenuItems } from "./MenuItems";

/*const NavSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".navLink");

	burger.addEventListener("click", () => {
		nav.classList.toggle({styles.nav-active});
	});
};*/

function Nav() {
	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, delay: 3000 },
	};

	const [clicked, setClicked] = React.useState(false);
	const navItemRef = React.createRef();

	const burgerOnClick = () => {
		//Toggle Nav
		setClicked(!clicked);

		//Animate Links

		/*
		const navItemRefCur = navItemRef.current;
		navItemRefCur.key.forEach((element) => {
			console.log(element);
		});

		navItemRefCur.classList.toggle(styles.burger);
		*/
	};

	return (
		<div className={styles.container}>
			<div className={styles.logoWrapper}>
				<h4>Box Bunny</h4>
			</div>
			<ul className={`${styles.navLink} ${clicked ? styles.navActive : ""}`}>
				{MenuItems.map((item, index) => {
					return (
						<motion.li
							initial="hidden"
							animate="visible"
							variants={variants}
							className={styles.navItem}
							key={index}
							ref={navItemRef}
						>
							<Link href={item.url}>{item.title}</Link>
						</motion.li>
					);
				})}
			</ul>
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
