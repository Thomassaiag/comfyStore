import React from "react";
import FormInput from "./FormInput";
import { Form, Link, useLoaderData } from "react-router";
import SubmitBtn from "./SubmitBtn";
import FormSelect from "./FormSelect";

import { sorting } from "../utils";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filters = () => {
	const { metaData, params } = useLoaderData();
	const { companies, categories } = metaData;
	const { search, category, company, order, price, shipping } = params;
	return (
		<Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
			{/* SEARCH */}
			<FormInput
				label="Search Product"
				type="search"
				name="search"
				size="input-sm"
				defaultValue={search}
			/>
			{/* SELECT */}
			{/* CATEGORY */}
			<FormSelect
				options={categories}
				name="category"
				text="select category"
				defaultValue={category || "all"}
				size="select-sm"
			/>
			{/* COMPANY */}
			<FormSelect
				options={companies}
				name="company"
				text="select company"
				defaultValue={company || "all"}
				size="select-sm"
			/>
			{/* SORT */}
			<FormSelect
				options={sorting}
				name="order"
				text="sort by"
				defaultValue={order || "a-z"}
				size="input-sm"
			/>
			{/* PRICE RANGE */}
			<FormRange
				label="select price"
				name="price"
				size="range-sm"
				price={price}
			/>

			{/* FREE SHIPPING */}
			<FormCheckBox
				size="checkbox-sm"
				name="shipping"
				label="free shipping"
				defaultValue={shipping}
			/>
			{/* BUTTONS */}

			<SubmitBtn
				buttonText="search"
				buttonClass="btn btn-primary btn-sm"
				type="submit"
			/>
			<Link
				className="btn btn-accent btn-sm uppercase my-3"
				to="/products"
			>
				reset
			</Link>
		</Form>
	);
};

export default Filters;
