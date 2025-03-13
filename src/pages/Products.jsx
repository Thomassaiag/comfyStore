import React, { useEffect } from "react";

import customFetch from "../utils";

const Products = () => {
	const getAllProducts = async () => {
		const { data } = await customFetch("/products");
		console.log(data);
	};

	useEffect(() => {
		getAllProducts();
	}, []);

	return <>Products</>;
};

export default Products;
