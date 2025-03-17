import React from "react";

import customFetch from "../utils/index";
import ProductsContainer from "../components/ProductsContainer";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";

export const loader = async ({ request }) => {
	console.log(request);

	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	console.log(params);

	const response = await customFetch("/products",{params: params});
	const productData = response.data.data;
	const metaData = response.data.meta;
	return { productData, metaData, params};
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
