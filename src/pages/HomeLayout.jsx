import React from "react";
import { Outlet, useNavigation } from "react-router";
import { Navbar, Header, Loading } from "../components";

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === "loading";
	return (
		<>
			<Header />
			<Navbar />
			{isPageLoading ? (
				<Loading />
			) : (
				<section className="align-item py-20">
					<Outlet />
				</section>
			)}
		</>
	);
};

export default HomeLayout;
