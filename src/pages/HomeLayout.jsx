import React from "react";
import { Outlet } from "react-router";


const HomeLayout = () => {
	return (
		<>
			<nav className="">
                <span className="text-4xl text-primary">Comfy</span>
            </nav>
			<Outlet />
		</>
	);
};

export default HomeLayout;
