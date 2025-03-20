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

const getLocalStorageCart = () => {
	return JSON.parse(localStorage.getItem("cart")) || initialState;
};

const cartSlice = createSlice({
	name: "cart",
	initialState: getLocalStorageCart(),
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;
			const item = state.cartItems.find(
				(i) => i.cartID === product.cartID
			);
			if (item) {
				item.amount += product.amount;
			} else {
				state.cartItems.push(product);
			}
			state.numItemsInCart =
				parseInt(state.numItemsInCart) + parseInt(product.amount);
			state.cartTotal += product.amount * product.price;
			cartSlice.caseReducers.calculateTotals(state);
			toast.success("Successfully added to cart");
		},

		clearCart: (state) => {
			localStorage.setItem('cart',JSON.stringify(initialState))
            return initialState
		},
		removeItem: (state, action) => {
            const {cartID}=action.payload
            const product=state.cartItems.find((item)=>item.cartID===cartID)
            state.cartItems=state.cartItems.filter((item)=>item.cartID!==cartID)
            state.numItemsInCart-=product.amount
            state.cartTotal-=product.amount*product.price
            cartSlice.caseReducers.calculateTotals(state)
            toast.error('Item successfuly removed')

        },
		editItem: (state, action) => {
            const {cartID,  amount}=action.payload
            console.log(cartID)
            console.log(amount)
            const item = state.cartItems.find((item)=>item.cartID===cartID)
            state.numItemsInCart+=amount-item.amount
            state.cartTotal += item.price*(amount-item.amount)
            item.amount=amount
            cartSlice.caseReducers.calculateTotals(state)
            toast.success('cart updated')
            
        },
		calculateTotals: (state) => {
			state.tax = 0.1 * state.cartTotal;
			state.orderTotal = state.tax + state.cartTotal + state.shipping;
			localStorage.setItem("cart", JSON.stringify(state));
		},
	},
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
