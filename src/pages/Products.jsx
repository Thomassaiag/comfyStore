import React from "react";

import customFetch from "../utils/index";
import ProductsContainer from "../components/ProductsContainer";
import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";

export const loader = async () => {
	const response = await customFetch("/products");
	const productData = response.data.data;
	const metaData = response.data.meta;
	return { productData, metaData };
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
