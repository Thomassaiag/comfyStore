import {React, useEffect, useState} from "react";
import { BsMoonFill, BsSunFill, BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router";

import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";


const themes={
    winter: 'winter',
    dracula: 'dracula'
}

const getLocalStorageTheme=()=>{
    return localStorage.getItem('theme')|| themes.winter
}

const Navbar = () => {

    const [theme, setTheme] = useState(getLocalStorageTheme());

    const handleTheme=()=>{
        const {winter, dracula}=themes
        const newTheme= theme ===winter ? dracula : winter
        setTheme(newTheme)
    }
    
    
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        document.documentElement.setAttribute('data-theme',theme)
    },[theme])


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
						<input type="checkbox" onChange={handleTheme}/>
						
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
								0
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
