import React from "react";
import { Outlet } from "react-router";
import { Navbar, Header } from "../components";

const HomeLayout = () => {
	return (
		<>
			<Header/>
            <Navbar/>
			<section className="align-item py-20">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
