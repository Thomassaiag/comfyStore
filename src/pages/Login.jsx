import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, useNavigation } from "react-router-dom";
import axios from 'axios'

const inputFields = [
	{
		id: 1,
		label: "email",
		type: "email",
		defaultValue: "test@test.com",
		name: "identifier",
	},
	{
		id: 2,
		label: "password",
		type: "password",
		defaultValue: "secret",
		name: "password",
	},
];

const buttons = [
	{
		id: 1,
		buttonText: "login",
		buttonClass: "btn btn-secondary",
		buttonType: "submit",
	},
	{
		id: 2,
		buttonText: "guest user",
		buttonClass: "btn btn-primary",
		buttonType: "button",
	},
];

export const action = async ({request}) => {
    console.log(request)
	const formData = await request.formData();
    const data=Object.fromEntries(formData)
    console.log(data)

    const response=await axios.post("url", data)
    console.log(response)
    
};

const Login = () => {
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	return (
		<section className="grid place-items-center h-screen">
			<h4 className="text-center text-3xl font-bold">Login</h4>
			<Form
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
				method="POST"
			>
				{inputFields.map((inputField) => {
					return <FormInput key={inputField.id} {...inputField} />;
				})}
				<div className="mt-4 grid">
					{buttons.map((button) => {
						return (
							<SubmitBtn
								key={button.id}
								{...button}
								isSubmitting={isSubmitting}
							/>
						);
					})}
				</div>
			</Form>
			<p className="text-center">
				Not a Member Yet ? <Link to="/register" className="ml-2 link link-hover link-primary capitalize">register</Link>
			</p>
		</section>
	);
};

export default Login;
