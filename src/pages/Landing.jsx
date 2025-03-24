import React from "react";
import { FeaturedProducts, Hero } from "../components";

import customFetch from "../utils/index";


export const searchFeaturedProduct = {
		queryKey: ["featuredProduct"],
		queryFn:  () => 
			customFetch("/products", {
				params: { featured: true },
			})
}

export const loader = (queryClient) => async () => {
	const response = await queryClient.ensureQueryData(searchFeaturedProduct);
	const productData=response.data.data
	return {productData}
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
