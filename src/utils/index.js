import axios from "axios";

const apiBaseURL = "https://strapi-store-server.onrender.com/api";

const customFetch = axios.create({
	baseURL: apiBaseURL,
	headers: {
		Accept: "application/json",
	},
});

export default customFetch;

export const formatPrice = (price) => {
	const dollarAmount = new Intl.NumberFormat("en-us", {
		style: "currency",
		currency: "USD",
	}).format((price / 100).toFixed(2));
	return dollarAmount;
};
