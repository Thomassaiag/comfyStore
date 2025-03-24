import { React, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import customFetch from "../utils";
import { formatPrice, generateAmountOptions } from "../utils/index";
import ColorSelector from "../components/ColorSelector";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const getSingleProduct = (id) => {
	return {
		queryKey: ["singleProduct", id],
		queryFn: () => customFetch(`/products/${id}`),
	};
};

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const { id } = params;
		try {
			const response = await queryClient.ensureQueryData(
				getSingleProduct(id)
			);
			const singleProduct = response.data.data;
			return { id, singleProduct };
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


	const { title, description, company, image, price, colors } =
		singleProduct.attributes;

	const [productColor, setProductColor] = useState(colors[0]);
	const [amount, setAmount] = useState(1);

	const handleAmount = (e) => {
		setAmount(e.target.value);
	};

	const dispatch = useDispatch();

	const productToAdd = {
		cartID: singleProduct.id + productColor,
		productID: singleProduct.id,
		image,
		title,
		price,
		company,
		productColor,
		amount,
	};

	const addToCart = () => {
		dispatch(addItem({ product: productToAdd }));
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
					<div className="mt-10">
						<button
							className="btn btn-secondary btn-md uppercase"
							onClick={() => {
								addToCart();
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
