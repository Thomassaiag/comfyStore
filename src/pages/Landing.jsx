import React from "react";
import { Hero } from "../components";


import customFetch from "../utils";
import { useLoaderData } from "react-router";

export const loader = async () => {
	const response=await customFetch('/products',{params:{featured:true}}) 
    const productData=response.data.data
    return {productData}
};

const Landing = () => {

    const data=useLoaderData()
    console.log(data)

	return (
		<>
			<Hero />
		</>
	);
};

export default Landing;
