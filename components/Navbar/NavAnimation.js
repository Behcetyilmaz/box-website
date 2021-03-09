import React, { useRef } from "react";
import { animated, config, useChain, useTransition } from "react-spring";
import styles from "../../styles/Nav.module.css";
import { MenuItems } from "./MenuItems";

const NavAnimation = ({ show }) => {
	const sidebarRef = useRef();
	const transition = useTransition(show, null, {
		from: {
			transform: "translateX(100%)",
		},
		enter: {
			transform: "translateX(0)",
		},
		leave: {
			transform: "translateY(100%)",
		},
		unique: true,
		config: config.stiff,
		ref: sidebarRef,
		// onStart: onAnimationStart,
		// onRest: onAnimationEnd
	});

	const items = MenuItems;
	const itemsRef = useRef();
	const trail = useTransition(show ? items : [], (item) => item, {
		from: {
			opacity: 0,
			transform: "translateY(50px)",
		},
		enter: {
			opacity: 1,
			transform: "translateY(0)",
		},
		leave: {
			opacity: 0,
			transform: "translateY(50px)",
		},
		ref: itemsRef,
		config: config.wobbly,
		trail: 100,
		unique: true,
	});

	useChain(
		show ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
		show ? [0, 0.25] : [0, 0.6]
	);

	return transition.map(({ item, key, props }) =>
		item ? (
			<animated.div key={key} style={props} className={styles.navLink}>
				{trail.map(({ item, key, props }) => {
					console.log(item, key, props);
					return (
						<animated.div
							key={item.title}
							style={props}
							className={styles.navItem}
						>
							{item.title}
						</animated.div>
					);
				})}
			</animated.div>
		) : null
	);
};

export default NavAnimation;
