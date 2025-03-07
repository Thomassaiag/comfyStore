import React from "react";
import { Outlet } from "react-router";


const HomeLayout = () => {
	return (
		<>
			<nav className="">
				<span className="text-4xl text-primary">Comfy</span>
			</nav>
			<section className="align-item py-20">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
