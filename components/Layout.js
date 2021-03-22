import React from "react";
import Meta from "../components/Meta";
import Nav from "./Navbar/Nav";

function Layout({ children }) {
	return (
		<>
			<Meta />
			<Nav />
			<div className="container">{children}</div>
		</>
	);
}

export default Layout;
