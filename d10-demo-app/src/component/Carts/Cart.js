import React, { Component } from "react";
import { MyContext } from "../../MyContext";
import CartList from "./CartList";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartList></CartList>
      </div>
    );
  }
}
