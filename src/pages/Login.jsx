import React from "react";
import { FormInput, SubmitBtn,LoadingSpinner } from "../components";
import {
	Form,
	Link,
	useNavigation,
	redirect,
	useNavigate,
} from "react-router-dom";

import customFetch from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";


const inputFields = [
	{
		id: 1,
		label: "email",
		type: "email",
		name: "identifier",
	},
	{
		id: 2,
		label: "password",
		type: "password",
		name: "password",
	},
];


export const action =
	(store) =>
	async ({ request }) => {
		console.log(store);
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post("/auth/local", data);
			toast.success("User logged Successfuly");
			store.dispatch(loginUser(response.data));
			return redirect("/");
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				"Check your credentials";
			toast.error(errorMessage);
		}
	};

const Login = () => {
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginAsGuestUser = async () => {
		const authData = {
			identifier: "test@test.com",
			password: "secret",
		};
		try {
			const response = await customFetch.post("/auth/local", authData);
			console.log(response);
			toast.success("User logged In Successfully");
			dispatch(loginUser(response.data));
			navigate("/");
		} catch (error) {
			const errorMessage =
				error?.response?.data || "issue with credentials";
			toast.error(errorMessage);
		}
	};

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
					<SubmitBtn buttonText="login" buttonClass="btn btn-secondary" buttonType="submit" isSubmitting={isSubmitting} />
				</div>
				<div className="mt-4 grid">
					<button
						className="btn btn-primary uppercase my-3"
						disabled={isSubmitting}
						type="button"
						onClick={loginAsGuestUser}
					>
						{/* {isSubmitting ? "Submitting" : { buttonText }} */}
						{isSubmitting ? (
							<>
								<LoadingSpinner />
								Sending...
							</>
						) : (
							"guest user"
						)}
					</button>
				</div>
			</Form>
			<p className="text-center">
				Not a Member Yet ?{" "}
				<Link
					to="/register"
					className="ml-2 link link-hover link-primary capitalize"
				>
					register
				</Link>
			</p>
		</section>
	);
};

export default Login;
