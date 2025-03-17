import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//loaders
import { loader as landingLoader } from "./pages/Landing";
import {loader as singleProductLoader} from "./pages/SingleProduct"
import {loader as productsLoader} from './pages/Products'

//actions
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "products",
				element: <Products />,
                loader: productsLoader
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				loader: singleProductLoader,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		action: loginAction,
		errorElement: <Error />,
	},
	{
		path: "/register",
		element: <Register />,
		action: registerAction,
		errorElement: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
