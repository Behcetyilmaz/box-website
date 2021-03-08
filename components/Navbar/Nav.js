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
	const variants = {
		visible: (custom) => {
			return {
				//	opacity: 1,
				x: 0,
				transition: {
					delay: 0.3,
					duration: custom === 0 ? 0.7 * 0.3 : custom * 0.3,
				},
			};
		},
		hidden: {
			//	opacity: 0,
			x: "100vh",
		},
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
							initial={{ x: "100vh" }}
							transition={{ duration: 0.3 }}
							custom={index}
							animate={clicked ? "visible" : " hidden"}
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
