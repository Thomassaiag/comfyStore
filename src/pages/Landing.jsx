import React from "react";
import { FeaturedProducts, Hero } from "../components";


import customFetch from "../utils/index";
import { useLoaderData } from "react-router";

export const loader = async () => {
	const response=await customFetch('/products',{params:{featured:true}}) 
    const productData=response.data.data
    return {productData}
};

const Landing = () => {

    const {productData}=useLoaderData()
    console.log(productData);

	return (
		<>
			<Hero />
            <FeaturedProducts />
		</>
	);
};

export default Landing;
