import React from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import {clearCart} from '../features/cart/cartSlice'
import { QueryClient, useQueryClient } from "@tanstack/react-query";

const Header = () => {
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();

    const navigate=useNavigate()
    const queryClient=useQueryClient()

    const handleLogout=()=>{
        dispatch(logoutUser())
        dispatch(clearCart())
        queryClient.removeQueries()
        navigate('/')
    }

	return (
		<header className="bg-neutral text-neutral-content">
			<div className="align-item  justify-center sm:justify-end px-8 flex">
				{user ? (
					<div className="flex gap-x-2 sm:gap-x-8 items-center">
						<p className="text-xs sm:text-sm">Hello, {user.username}</p>
						<button className="btn btn-xs btn-outline btn-primary uppercase" onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
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
				)}
			</div>
		</header>
	);
};

export default Header;
