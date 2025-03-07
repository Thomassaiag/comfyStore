import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const inputFields = [
	{
		id: 1,
		label: "email",
		type: "email",
		defaultValue: "test@test.com",
		name: "email",
	},
	{
		id: 2,
		label: "password",
		type: "password",
		defaultValue: "",
		name: "password",
	},
];

const buttons = [
	{
		id: 1,
		buttonText: "login",
		buttonClass: "btn btn-secondary",
	},
	{
		id: 2,
		buttonText: "guest user",
		buttonClass: "btn btn-primary",
	},
];

const Login = () => {
	return (
		<div className="grid place-items-center min-h-[100vh]">
			<h1>Login</h1>
			<Form className="grid">
				{inputFields.map((inputField) => {
					return <FormInput key={inputField.id} {...inputField} />;
				})}
				<div className="grid">
					{buttons.map((button) => {
						return <SubmitBtn key={button.id} {...button} />;
					})}
				</div>
			</Form>
            <p>Not a Member Yet ? <Link to='/register'>Register</Link></p>
		</div>
	);
};

export default Login;
