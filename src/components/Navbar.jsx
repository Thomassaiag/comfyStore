import { React,  } from "react";
import { BsMoonFill, BsSunFill, BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router";

import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";


const Navbar = () => {
	const dispatch = useDispatch();

	const handleTheme = () => {
		dispatch(toggleTheme());
	};

	const { numItemsInCart } = useSelector((store) => store.cart);

	return (
		<nav className="bg-base-200">
			<div className="navbar align-item ">
				<div className="navbar-start">
					{/* {TITLE} */}
					<NavLink
						to="/"
						className="hidden lg:flex btn btn-primary text-3xl items-center"
					>
						C
					</NavLink>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal">
							<NavLinks />
						</ul>
					</div>
					<div className="dropdown ">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<FaBarsStaggered className="h-6 w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className="navbar-end">
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={handleTheme} />

						<BsSunFill className="swap-on h-4 w-4" />
						<BsMoonFill className="swap-off h-4 w-4" />
					</label>
					<NavLink
						to="/cart"
						className="btn btn-ghost btn-circle btn-md ml-4 indicator"
					>
						<div className="indicator">
							<BsCart3 className="h-6 w-6" />
							<span className="badge badge-sm badge-primary indicator-item">
								{numItemsInCart}
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
