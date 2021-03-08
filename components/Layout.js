import Meta from "../components/Meta";
import Nav from "./Navbar/Nav";

function Layout({ children }) {
	return (
		<>
			<Meta />
			<Nav />
			<div>{children}</div>
		</>
	);
}

export default Layout;
