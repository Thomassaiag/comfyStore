import React from "react";
import { Outlet } from "react-router";
import Header from "../components";

const HomeLayout = () => {
	return (
		<>
			<Header></Header>
			<section className="align-item py-20">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
