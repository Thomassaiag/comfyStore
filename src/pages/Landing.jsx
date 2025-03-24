import React from "react";
import { FeaturedProducts, Hero } from "../components";

import customFetch from "../utils/index";


export const searchFeaturedProduct = () => {
	return {
		queryKey: ["featuredProduct"],
		queryFn: async () => {
			const { data } = await customFetch("/products", {
				params: { featured: true },
			});
			console.log(data);
			return { data };
		},
	};
};

export const loader = (queryClient) => async () => {
	// const response=await customFetch('/products',{params:{featured:true}})
	// const productData=response.data.data
	await queryClient.ensureQueryData(searchFeaturedProduct());
	// return {productData}
};

const Landing = () => {

	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};

export default Landing;
