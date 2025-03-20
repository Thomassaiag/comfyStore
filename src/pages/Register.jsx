import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router";
import customFetch from "../utils";
import { toast } from "react-toastify";

const inputFields = [
	{
		id: 3,
		label: "username",
		type: "text",
		name: "username",
	},
	{
		id: 1,
		label: "email",
		type: "email",
		name: "email",
	},
	{
		id: 2,
		label: "password",
		type: "password",
		name: "password",
	},
];

const buttons = [
	{
		id: 1,
		buttonText: "register",
		buttonClass: "btn btn-secondary",
		buttonType: "submit",
	},
];

export const action = async ({ request }) => {
	console.log(request);
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		console.log(data);
		const response = await customFetch.post("/auth/local/register", data);
		toast.success("User successfuly registered");
        return redirect('/login')
    
	} catch (error) {
		const errorMessage= error?.response?.data?.error?.message || 'Please double check your credentials'
        console.log(errorMessage)
		toast.error(errorMessage);
	}
};

const Register = () => {
	return (
		<section className="place-items-center grid h-screen">
			<h4>Register</h4>

			<Form
				className="card w-9- p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
				method="POST"
			>
				{inputFields.map((inputField) => {
					return <FormInput key={inputField.id} {...inputField} />;
				})}
				<div className="mt-4 grid">
					{buttons.map((button) => {
						return <SubmitBtn key={button.id} {...button} />;
					})}
				</div>
			</Form>
			<p className="text-center">
				Already a member ?
				<Link
					to="/login"
					className="ml-2 link link-hover pl-4 link-primary"
				>
					login
				</Link>
			</p>
		</section>
	);
};

export default Register;
