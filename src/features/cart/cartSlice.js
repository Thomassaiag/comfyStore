import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0,
};


const getLocalStorageCart=()=>{
    return JSON.parse(localStorage.getItem('cart')) || initialState
}

const cartSlice = createSlice({
	name: "cart",
	initialState: getLocalStorageCart(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find(
				(item) => item.cartId === product.cartId
			);
			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart =
				parseInt(state.numItemsInCart) + parseInt(product.amount);;
            state.cartTotal+=product.amount*product.price
            state.tax=0.1*state.cartTotal
            state.orderTotal=state.tax+state.cartTotal+state.shipping
            localStorage.setItem('cart',JSON.stringify(state))
            toast.success('Successfully added to cart')

		},

		clearCart: (state) => {},
		removeItem: (state, action) => {},
		editItem: (state, action) => {},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
