import React, { Component, useContext } from "react";
import { MyContext } from "../../MyContext";
import CartItem from "./CartItem";

function CartList(props) {
  let context = useContext(MyContext);

  let cartItems = context.cart.map((product) => {
    return <CartItem key={product.id} product={product}></CartItem>;
  });

  return <div>{cartItems}</div>;
}

export default CartList;
