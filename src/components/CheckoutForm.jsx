import React from "react";
import { Form, redirect, useNavigation } from "react-router";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import customFetch from "../utils";
import { formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

const inputFields = [
	{
		id: 2,
		label: "First Name",
		type: "text",
		name: "name",
		size: "input-sm",
	},
	{
		id: 1,
		label: "address",
		type: "text",
		name: "address",
		size: "input-sm",
	},
];

export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();

		const { name, address } = Object.fromEntries(formData);

		const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
		const { token } = store.getState().user.user;
		console.log(token);

		const dataToSend = {
			address: address,
			cartItems: cartItems,
			chargeTotal: orderTotal,
			name: name,
			numItemsInCart: numItemsInCart,
			orderTotal: formatPrice(orderTotal),
		};
		console.log(dataToSend);
		try {
			const response = await customFetch.post(
				"/orders",
				{ data: dataToSend },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			store.dispatch(clearCart());
			toast.success("Order sent successfully");
			console.log(response);

			return redirect("/orders");
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"there was an error placing your order";
			toast.error(errorMessage);
			if (error?.response?.status === 401) {
				return redirect("/login");
			}
			return null;
		}
	};

const CheckoutForm = () => {
	const navigate = useNavigation();
	const isSubmitting = navigate.state === "submitting";

	return (
		<Form
			className="card w-9- p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
			method="POST"
		>
			<h4 className="font-medium text-xl">Shipping Information</h4>
			{inputFields.map((inputField) => {
				return <FormInput key={inputField.id} {...inputField} />;
			})}
			<SubmitBtn
				buttonText="Place Your order"
				buttonClass="btn btn-secondary"
				isSubmitting={isSubmitting}
				buttonType="submit"
			/>
		</Form>
	);
};

export default CheckoutForm;
