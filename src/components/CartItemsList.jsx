import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItemsList = () => {


    const {cartItems} = useSelector((store) => store.cart);
	return (<>{cartItems.map((cartItem)=>{

        return <CartItem key={cartItem.cartID} {...cartItem}/>;
    })} </>);
};

export default CartItemsList;
