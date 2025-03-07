import React from "react";
import { Link } from "react-router";

const Header = () => {
	return (
		<header className="bg-neutral text-neutral-content">
			<div className="align-item  justify-center sm:justify-end px-8 flex">
				<div className="flex gap-x-6 justify-center items-center">
					<p>
						<Link
							to="/login"
							className="link link-hover capitalize text-xs sm:text-sm"
						>
							sign in / guest
						</Link>
					</p>
					<p>
						<Link
							to="/login"
							className="link link-hover capitalize text-xs sm:text-sm"
						>
							create account
						</Link>
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
