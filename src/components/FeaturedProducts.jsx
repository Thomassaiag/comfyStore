import React from "react";
import { ProductsGrid, SectionTitle } from "./index.js";

const FeaturedProducts = () => {

	return (
		<div className="pt-24">
			<SectionTitle title="Featured Products" />

				<ProductsGrid
					className="items-center"
				/>

		</div>
	);
};

export default FeaturedProducts;
