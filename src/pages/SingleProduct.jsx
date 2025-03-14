import { React, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import customFetch from "../utils";
import { formatPrice, generateAmountOptions } from "../utils/index";
import ColorSelector from "../components/ColorSelector";

export const loader = async ({ params }) => {
	console.log(params);
	try {
		const response = await customFetch(`/products/${params.id}`);
		console.log(response);
		const singleProduct = response.data.data;
		return { singleProduct };
	} catch (error) {
		console.log(error);
	}
};

const itemsToOrder = [];
for (let i = 2; i <= 20; i++) {
	itemsToOrder.push(i);
}



const SingleProduct = () => {
	const { singleProduct } = useLoaderData();
	console.log(singleProduct);
	const { title, description, company, image, price, colors } =
		singleProduct.attributes;

	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const handleAmount = (e) => {
		setAmount(e.target.value);
		console.log(amount);
	};

	return (
		<section>
			<div className="breadcrumbs text-sm">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>
			<div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
				<img
					className="rounded-lg h-96 w-96 object-cover lg: w-full"
					src={image}
					alt={title}
				/>
				<div>
					<h1 className="text-3xl font-bold capitalize">{title}</h1>
					<h4 className="text-xl text-neutral-content font-bold mt-2">
						{company}
					</h4>
					<p className="mt-3 text-xl">{formatPrice(price)}</p>
					<p className="mt-6 leading-8">{description}</p>
					{/* COLORS */}
					<div className="mt-4">
						<h4 className="text-md font-medium tracking-wider capitalize">
							Colors
						</h4>
						<div className="mt">
							{colors.map((color) => {
								return (
									<ColorSelector
										key={color}
										color={color}
										productColor={productColor}
										setProductColor={setProductColor}
									/>
								);
							})}
						</div>
					</div>
					{/* AMOUNT */}

					<div className="form-control w-full max-w-xs">
						<label className="label" htmlFor="amount">
							<h4 className="text-md font-medium tracking-wider capitalize">
								amount
							</h4>
						</label>
						<select
							id="amount"
							className="select select-secondary select-border select-md "
							value={amount}
							onChange={handleAmount}
						>
							{generateAmountOptions(20)}
						</select>
					</div>
					{/* CART */}
					<div>
						<button
							className="btn btn-secondary btn-mdmt-4 uppercase"
							onClick={() => {
								console.log("add to bag");
							}}
						>
							Add To bag
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
