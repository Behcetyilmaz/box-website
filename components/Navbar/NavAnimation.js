import Link from "next/link";
import React, { useRef } from "react";
import { animated, config, useChain, useTransition } from "react-spring";
import styles from "../../styles/Nav.module.css";
import { MenuItems } from "./MenuItems";

const NavAnimation = ({ show, toggle }) => {
	const sidebarRef = useRef();
	const transition = useTransition(show, null, {
		from: {
			transform: "translateX(100%)",
		},
		enter: {
			transform: "translateX(0%)",
		},
		leave: {
			transform: "translateX(100%)",
		},
		unique: true,
		config: config.default,
		ref: sidebarRef,
		// onStart: onAnimationStart,
		// onRest: onAnimationEnd
	});

	const items = MenuItems;
	const itemsRef = useRef();
	const trail = useTransition(show ? items : [], (item) => item?.title, {
		from: {
			opacity: 0,
			transform: "translateX(50px)",
		},
		enter: {
			opacity: 1,
			transform: "translateX(0px)",
		},
		leave: {
			opacity: 0,
			transform: "translateX(50px)",
		},
		ref: itemsRef,
		config: config.wobbly,
		trail: 100,
		unique: true,
	});

	useChain(
		show ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
		show ? [0, 0.25] : [0, 0.4]
	);

	return transition.map(({ item, key, props }) =>
		item ? (
			<animated.ul key={key} style={props} className={styles.navLink}>
				{trail.map(({ item, key, props }) => {
					return (
						<animated.li
							key={item.title}
							style={props}
							className={styles.navItem}
							onClick={() => toggle()}
						>
							<Link href={item.url}>{item.title}</Link>
						</animated.li>
					);
				})}
			</animated.ul>
		) : null
	);
};

export default NavAnimation;
