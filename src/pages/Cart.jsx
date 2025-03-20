import React from "react";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Cart = () => {
	const user = null;
	const { numItemsInCart } = useSelector((store) => store.cart);

	if (numItemsInCart === 0) {
		return <SectionTitle title="Your cart is empty" />;
	}
	return (
		<>
			<SectionTitle title="Shopping Cart" />
			<div className="mt-8 grid gap-8 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<CartItemsList />
				</div>
				<div className="lg:col-span-4 lg:pl-4">
					<CartTotals />
				{user ? (
					<Link className="btn btn-secondary btn-block mt-8">
						Proceed to checkout
					</Link>
				) : (
					<Link className="btn btn-secondary btn-block mt-8">
						Please register
					</Link>
				)}
				</div>
			</div>
		</>
	);
};

export default Cart;
