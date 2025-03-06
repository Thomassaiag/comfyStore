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
				path: "login",
				element: <Login />,
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
				path: "register",
				element: <Register />,
			},
			{
				path: "singleProduct",
				element: <SingleProduct />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
