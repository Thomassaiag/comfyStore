import React from "react";
import { NavLink } from "react-router";

const links = [
	{ id: 1, linkName: "home", path: "/" },
	{ id: 2, linkName: "about", path: "/about" },
	{ id: 3, linkName: "products", path: "/products" },
	{ id: 4, linkName: "cart", path: "/cart" },
];

const NavLinks = () => {
	return (
		<>
			{links.map((link) => {
				return (
					<li key={link.id}>
						<NavLink to={link.path} className="">
							{link.linkName}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
