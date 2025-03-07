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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				element: <Landing />,
				index: true,
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
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
