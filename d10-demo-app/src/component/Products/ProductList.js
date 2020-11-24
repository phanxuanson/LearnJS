import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { MyContext } from "../../MyContext";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchList: [],
    };
  }

  renderProductCardFormList = () => {
    const productArr = this.context.products.map((product) => {
      return <ProductCard key={product.id} product={product}></ProductCard>;
    });
    return productArr;
  };
  renderProductCardFormList = () => {
    let productArr = [];
    if (this.context.filterList.length === 0) {
      productArr = this.context.products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      });
    } else {
      productArr = this.context.filterList.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      });
    }
    return productArr;
  };

  render() {
    console.log(this.context);
    return (
      <React.Fragment>
        <br />
        <div className="row">
          <input
            onChange={this.handleChange}
            value={this.s}
            type="text"
            className="form-control"
            placeholder="Nhap tim kiem"
          />
        </div>
        <div className="row">{this.renderProductCardFormList()}</div>
        <br />
      </React.Fragment>
    );
  }
}

ProductList.contextType = MyContext;
