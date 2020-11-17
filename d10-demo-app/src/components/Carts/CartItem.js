import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.product.name}</h4>
        <p>{this.props.product.description}</p>
        <p>{this.props.product.quantity}</p>
      </div>
    );
  }
}
