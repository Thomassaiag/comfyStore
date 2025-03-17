import React from "react";
import FormInput from "./FormInput";
import { Form, Link, useLoaderData } from "react-router";
import SubmitBtn from "./SubmitBtn";
import FormSelect from "./FormSelect";


import { sorting } from "../utils";

const handleSubmit = () => {
	console.log("form submitted");
};

const Filters = () => {
	const { metaData } = useLoaderData();
	const { companies, categories } = metaData;
	return (
		<Form
			className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
			onSubmit={handleSubmit}
		>
			{/* SEARCH */}
			<FormInput
				label="Search Product"
				type="search"
				name="search"
				size="input-sm"
			/>
			{/* SELECT */}
			{/* CATEGORY */}
			<FormSelect
				options={categories}
				name="category"
				text="select category"
				defaultValue="all"
				size="select-sm"
			/>
			{/* COMPANY */}
			<FormSelect
				options={companies}
				name="company"
				text="select company"
				defaultValue="all"
				size="select-sm"
			/>
			{/* SORT */}
			<FormSelect
				options={sorting}
				name="order"
				text="sort by"
				defaultValue="a-z"
				size="input-sm"
			/>
			{/* BUTTONS */}
			<div className="flex gap-x-4">
				<SubmitBtn
					buttonText="search"
					buttonClass="btn btn-primary btn-sm"
					type="submit"
				/>
				<Link className="btn btn-accent btn-sm uppercase my-3">
					reset
				</Link>
			</div>
		</Form>
	);
};

export default Filters;
