import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";

import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
	const { metaData } = useLoaderData();
	const totalProduct = metaData.pagination.total;

	const [layout, setLayout] = useState("grid");
	const setActiveStyle = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${pattern === layout  ? 'btn-primary btn-primary-content' : 'btn-ghost text-based-content'}`;
	};
	return (
		<>
			<div className="flex justify-between items-center mt-8 border-b  border-base-300">
				<h4>{`${totalProduct} ${
					totalProduct > 1 ? "products" : "product"
				}`}</h4>
				<div className="flex gap-x-2">
					<button
						type="button"
						className={setActiveStyle("grid")}
						onClick={() => setLayout("grid")}
					>
						<BsFillGridFill />
					</button>
					<button
						type="button"
						className={setActiveStyle("list")}
						onClick={() => setLayout("list")}
					>
						<BsList />
					</button>
				</div>
			</div>
			<div>
				{totalProduct === 0 ? (
					<h5 className="text-2xl mt-16">
						Sorry, no product to display
					</h5>
				) : layout === "grid" ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
