import { React, useState } from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { addItem, removeItem, editItem } from "../features/cart/cartSlice";

const CartItem = ({
	cartID,
	productID,
	image,
	price,
	productColor,
	title,
	company,
	amount,
}) => {
	const dispatch = useDispatch();


	const handleAmount = (e) => {
		dispatch(editItem({ cartID: cartID, amount: e.target.value }));
	};

	return (
		<article
			key={cartID}
			className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
		>
			<img
				className="w-24 h-24 rounded-lg sm:w-32 sm:w-32 object-cover"
				src={image}
				alt={title}
			/>

			<div className="sm:ml-16 sm:w-48">
				{/* INFO */}
				<div>
					<h3 className="font-medium capitalize">{title}</h3>
					<h4 className="mt-2 text-sm capitalize text-neutral-content">
						{company}
					</h4>
				</div>
				{/* COLOR */}
				<p className="mt-2 text-sm capitalize flex items-center gap-x-2">
					color:
					<span
						className={`badge badge-sm`}
						style={{ backgroundColor: productColor }}
					></span>
				</p>
			</div>
			<div className="sm:ml-12">
				{/* AMOUNT */}
				<div className="form-control max-w-xs">
					<label className="label  p-0" htmlFor="amount">
						<span className="label-text">Amount:</span>
					</label>
					<select
                    name="amount"
						id="amount"
						value={amount}
						className="mt-2 select select-base select-border select-xs"
						onChange={handleAmount}
					>
						{generateAmountOptions(parseInt(amount)+5)}
					</select>
				</div>
				<button
					className="mt-2 link link-primary link-hover text-sm"
					onClick={() => {
						console.log(cartID);
						dispatch(removeItem({ cartID: cartID }));
					}}
				>
					Remove
				</button>
			</div>

			<p className="sm:ml-auto font-medium">{formatPrice(price)}</p>
		</article>
	);
};

export default CartItem;
