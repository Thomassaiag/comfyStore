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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as orderLoader } from "./pages/Orders";

//actions
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as checkoutAction } from "./components/CheckoutForm";

import { store } from "./store";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { staleTime: 0 },
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader(queryClient),
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
				action: checkoutAction(store, queryClient),
				loader: checkoutLoader(store),
			},
			{
				path: "orders",
				element: <Orders />,
				loader: orderLoader(store, queryClient),
			},
			{
				path: "products",
				element: <Products />,
				loader: productsLoader(queryClient),
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				loader: singleProductLoader(queryClient),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		action: loginAction(store),
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
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
		</QueryClientProvider>
	);
}

export default App;
