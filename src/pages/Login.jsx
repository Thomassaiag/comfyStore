import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, useNavigation, redirect} from "react-router-dom";

import customFetch from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

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

export const action = (store)=> async ({request}) => {console.log(store)
    const formData=await request.formData()
    const data = Object.fromEntries(formData);

    try {
        const response=await customFetch.post('/auth/local',data)
        toast.success('User logged Successfuly')
        store.dispatch(loginUser(response.data))
        return redirect('/')

    } catch (error) {
        console.log(error)
        const errorMessage=error?.response?.data?.error?.message || 'Check your credentials'
        toast.error(errorMessage)
    }
    
    
    
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
