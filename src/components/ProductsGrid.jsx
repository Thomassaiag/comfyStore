import React from "react";

import {Link, useLoaderData} from 'react-router-dom'

import {formatPrice} from "../utils/index";




const ProductsGrid = () => {

const {productData}=useLoaderData()
	return (
		<div className="pt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{productData.map((product) => {
				const { id, attributes } = product;
                const {title, price, image}=attributes
				return (
					<Link
						to={`/products/${id}`}
						key={id}
						className="card w-full shadow-xl hover:shadow-2xl mt-4 transition duration-300"
					>
						<figure className="px-4 pdt-4">
							<img
								className="rounded-xl h-64 md:h-48 w-full object-cover"
								src={image}
								alt={title}
							/>
						</figure>
						<div className="card-body items-center">
							<h2 className="card-title capitalize tracking-wider">
								{title}
							</h2>
							<span className="text-secondary">
								{formatPrice(price)}
							</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default ProductsGrid;
