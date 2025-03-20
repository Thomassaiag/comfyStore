import React from "react";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const links = [
	{ id: 1, linkName: "home", path: "/" },
	{ id: 2, linkName: "about", path: "/about" },
	{ id: 3, linkName: "products", path: "/products" },
	{ id: 4, linkName: "cart", path: "/cart" },
	{ id: 5, linkName: "checkout", path: "/checkout" },
	{ id: 6, linkName: "orders", path: "/orders" },
];

const NavLinks = () => {
	const { user } = useSelector((store) => store.user);
	return (
		<>
			{links.map((link) => {
				const { id, path, linkName } = link;
				if (
					(linkName === "checkout" || linkName === "orders") &&
					!user
				) {
					return null;
				}
				return (
					<li key={id}>
						<NavLink to={path} className="">
							{linkName}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
