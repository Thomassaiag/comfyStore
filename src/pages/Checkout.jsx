import React from "react";

import { CartTotals, SectionTitle, CheckoutForm } from "../components/";
import { useSelector } from "react-redux";
import { redirect } from "react-router";
import { toast } from "react-toastify";


export const loader = (store) => () => {
	const user = store.getState().user.user
	if (!user) {
        
		toast.error('You need to be loggedin')
        return redirect('/login')
	}
	return null;
};

const Checkout = () => {
	const { numItemsInCart } = useSelector((store) => store.cart);

	if (numItemsInCart < 1) {
		return <SectionTitle title="Your cart is Empty" />;
	}
	return (
		<>
			<SectionTitle title="Place Your Order" />
			<div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
};

export default Checkout;
