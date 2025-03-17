import React, { useEffect } from "react";

import customFetch from "../utils/index";




export const loader=async ()=>{
    const response=await customFetch('/products')
    const allProducts=response.data.data
    console.log(allProducts);
    return allProducts;
}


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
