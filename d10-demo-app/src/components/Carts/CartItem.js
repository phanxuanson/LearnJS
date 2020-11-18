import React, { Component } from "react";
import { MyContext } from "../../MyContext";
import Cart from "./Cart";

export default class CartItem extends Component {
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
    let numberInCart = this.state.inputCart + 1;
    this.setState({
      inputCart: numberInCart,
      totalPrice: numberInCart * this.props.product.price,
    });
    let _product = this.context.cart.find(
      (el) => el.id === this.props.product.id
    );
    _product.quantity += 1;
    // this.context.handleIncreaseProductQuantity(e, this.props.product.id);
  };

  onDecreaseProductQuantity = (e) => {
    let numberInCart = this.state.inputCart - 1;
    if (numberInCart >= 1) {
      this.setState({
        inputCart: numberInCart,
        totalPrice: numberInCart * this.props.product.price,
      });
      let _product = this.context.cart.find(
        (el) => el.id === this.props.product.id
      );
      _product.quantity -= 1;
    } else {
      this.context.handleDecreaseProductQuantity(e, this.props.product.id);
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
    console.log(this.props.product.quantity);
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
