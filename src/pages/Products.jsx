import React from "react";

import customFetch from "../utils/index";
import ProductsContainer from "../components/ProductsContainer";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";

const getAllProducts = (params) => {
	const { search, category, company, sort, price, shipping, page } = params;
	return {
		queryKey: [
			"allProducts",
			search ?? "",
			category ?? "all",
			company ?? "all",
			sort ?? "a-z",
			shipping ?? false,
			price ?? 100000,
			page ?? 1,
		],
		queryFn: () => customFetch.get("/products", { params }),
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);
		console.log(params);
		const response = await queryClient.ensureQueryData(
			getAllProducts(params)
		);
		const productData = response.data.data;
		const metaData = response.data.meta;
		return { productData, metaData, params };
	};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};

export default Products;
