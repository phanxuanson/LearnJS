import React, { Component } from "react";
import { MyContext } from "../../MyContext";

class ProductCard extends Component {
  render() {
    return (
      <div className="card col-md-4" style={{ width: "18rem" }}>
        <img src={this.props.product.imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.props.product.description}</p>
          <button
            onClick={() => this.context.addTocart(this.props.product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

ProductCard.contextType = MyContext;

export default ProductCard;
