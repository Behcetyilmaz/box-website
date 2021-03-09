import styles from "Nav.module.css";
import React, { useRef } from "react";
import { animated, config, useChain, useTransition } from "react-spring";

export default NavAnimation = ({ show }) => {
	const sidebarRef = useRef();
	const transition = useTransition(show, null, {
		from: {
			transform: "translateX(-100%)",
		},
		enter: {
			transform: "translateX(0)",
		},
		leave: {
			transform: "translateY(-100%)",
		},
		unique: true,
		config: config.stiff,
		ref: sidebarRef,
		// onStart: onAnimationStart,
		// onRest: onAnimationEnd
	});

	const items = ["Home", "About", "Contact", "Info"];
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
			transform: "translateY(-25px)",
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
				{trail.map(({ item, key, props }) => (
					<animated.div key={item} style={props} className={styles.navItem}>
						{item}
					</animated.div>
				))}
			</animated.div>
		) : null
	);
};
