import React, { Component, useContext, useEffect } from "react";
import { MyContext } from "../../MyContext";
import CartItems from "./CartItems";

function CartList(props) {
  let context = useContext(MyContext);
  let cartItem = context.cart.map((product) => {
    return <CartItems key={product.id} product={product}></CartItems>;
  });
  return <div>{cartItem}</div>;
}
export default CartList;
