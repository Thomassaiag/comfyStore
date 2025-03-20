import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
	const { cartTotal, orderTotal, shipping, tax } = useSelector(
		(store) => store.cart
	);

	return (
		<div className="card bg-base-200">
			<div className="card-body">
				<p className="flex justify-between text-xs border-b border-base-300 pb-5">
					<span>Subtotal</span>
					<span className="font-medium">
						{formatPrice(cartTotal)}
					</span>
				</p>
				<p className="flex justify-between text-xs border-b border-base-300 pb-5">
					<span>Shipping</span>
					<span className="font-medium">{formatPrice(shipping)}</span>
				</p>
				<p className="flex justify-between text-xs border-b border-base-300 pb-5">
					<span>Tax</span>
					<span className="font-medium">{formatPrice(tax)}</span>
				</p>
				<p className="flex justify-between text-sm font-bold pb-5 mt-4">
					<span>Order Total</span>
					<span className="font-medium">{formatPrice(orderTotal)}</span>
				</p>
			</div>
		</div>
	);
};

export default CartTotals;
