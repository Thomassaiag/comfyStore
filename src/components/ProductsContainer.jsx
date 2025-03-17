import React from "react";
import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
	const { productData, metaData } = useLoaderData();
	return (
		<div>
			<SectionTitle title={`${metaData.pagination.total} products`} />
            <ProductsList/>
		</div>
	);
};

export default ProductsContainer;
