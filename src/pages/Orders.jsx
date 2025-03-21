import React from "react";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";
import { toast } from "react-toastify";

import { redirect, useLoaderData } from "react-router";
import customFetch from "../utils";


export const loader =
	(store) =>
	async ({ request }) => {
		const user = store.getState().user.user;
		if (!user) {
			toast.error("please check your credentials");
			return redirect("/login");
		}

		const { token } = store.getState().user.user;

		console.log(request.url);

		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);
		console.log(params);

		try {
			const response = await customFetch.get("/orders", {
				params,
				headers: { Authorization: `Bearer ${token}` },
			});
			console.log(response);

			return { orders: response.data.data, metaData: response.data.meta };
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				"Please check your credentials";
			toast.error(errorMessage);
			if (error?.response?.status === 401) {
				return redirect("/login");
			}
			return null;
		}
	};

const Orders = () => {
	const { metaData } = useLoaderData()
	if (metaData.pagination.total < 1) {
		<SectionTitle title="Please Place an order" />;
	}
	return (
		<>
        <SectionTitle title="Your orders" />
			<OrdersList />
            <PaginationContainer/>
		</>
	);
};

export default Orders;
