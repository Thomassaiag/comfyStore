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
		children: [
			{
				element: <Landing />,
				index: true,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
