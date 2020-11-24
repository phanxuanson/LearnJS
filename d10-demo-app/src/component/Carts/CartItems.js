import React, { Component } from "react";
import { MyContext } from "../../MyContext";

export default class CartItems extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      inputCart: this.props.product.quantity,
      totalPrice: this.props.product.quantity * this.props.product.price,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.product.quantity !== prevState.inputCart) {
      return {
        inputCart: nextProps.product.quantity,
        totalPrice: nextProps.product.quantity * nextProps.product.price,
      };
    }
  }

  onIncreaseProductQuantity = (e) => {
    let numberIncart = this.state.inputCart + 1;
    if (numberIncart >= 1) {
      this.setState({
        inputCart: numberIncart,
        totalPrice: numberIncart * this.props.product.price,
      });
      let _product = this.context.cart.find(
        (el) => el.id === this.props.product.id
      );
      _product.quantity += 1;
    }
  };

  onDecreaseProductQuantity = (e) => {
    let numberIncart = this.state.inputCart - 1;
    if (numberIncart >= 1) {
      this.setState({
        inputCart: numberIncart,
        totalPrice: numberIncart * this.props.product.price,
      });
      let _product = this.context.cart.find(
        (el) => el.id === this.props.product.id
      );
      _product.quantity -= 1;
    } else {
      this.context.handleRemoveProductFromCart(this.props.product.id);
    }
  };
  onProductCartInputChange = (e) => {
    this.setState({
      inputCart: e.target.value,
      totalPrice: e.target.value * this.props.product.price,
    });
    let _product = this.context.cart.find(
      (el) => el.id === this.props.product.id
    );
    _product.quantity = e.target.value;
  };

  render() {
    return (
      <div>
        <div className="row list-group-item" style={{ display: "flex" }}>
          <div className="col-md-8 col-lg-8">
            <div className="row">{this.props.product.name}</div>
            <div className="row">{this.state.totalPrice}$</div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="row" style={{ display: "flex" }}>
              <button
                type="button"
                onClick={this.onIncreaseProductQuantity}
                className="btn btn-danger btn-sm btn-minus-pizza-number"
              >
                +
              </button>
              <input
                onChange={this.onProductCartInputChange}
                type="number"
                className="form-control"
                value={this.state.inputCart}
              />
              <button
                type="button"
                onClick={this.onDecreaseProductQuantity}
                className="btn btn-success btn-sm btn-add-pizza-number"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
