import { React, useState } from "react";
import { generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import {
	addItem,
	clearCart,
	removeItem,
	editItem,
} from "../features/cart/cartSlice";

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

	const [updatedAmount, setUpdatedAmount] = useState(amount);

	const handleAmount = (e) => {
		setUpdatedAmount(amount +e.target.value);
		console.log(updatedAmount);

		const productToAdd = {
			cartID: cartID,
			productID: productID,
			image,
			title,
			price,
			company,
			productColor,
			amount: updatedAmount,
		};
        console.log()
		dispatch(editItem({ cartID: cartID, amount: updatedAmount }));
        dispatch(addItem({ product: productToAdd }));
	};

	return (
		<div className="card bg-base-100 w-96 ">
			<figure>
				<img
					className="w-20 sm:w-40 h-auto object-cover rounded-lg"
					src={image}
					alt={title}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title capitalize">{title}</h2>
				<h3 className="text capitalize text-neutral-300">{company}</h3>
				<div className="flex gap-x-4 justify-start">
					<p>Color: </p>
					<span
						className={`badge w-6 h-6 mr-2`}
						style={{ backgroundColor: productColor }}
					></span>
				</div>
				<div>
					<label htmlFor="amount">Amount: </label>
					<select
						id="amount"
						defaultValue={updatedAmount}
						className="select"
						onChange={handleAmount}
					>
						{generateAmountOptions(15)}
					</select>
				</div>
				<div className="card-actions justify-start">
					<button
						className="btn"
						onClick={() => {
							console.log(cartID);
							dispatch(removeItem({ cartID: cartID }));
						}}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
