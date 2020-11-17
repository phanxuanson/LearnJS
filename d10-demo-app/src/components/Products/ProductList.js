import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { MyContext } from "../../MyContext";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  renderProductFromContext = () => {
    const productArr = this.context.products.map((product) => {
      return <ProductCard key={product.id} product={product}></ProductCard>;
    });
    return productArr;
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <div className="row">
          <input
            onChange={this.context.handleChange}
            value={this.state.search}
            type="text"
            className="form-control"
            placeholder="Nhập Thông Tin Tìm Kiếm"
          />
        </div>
        <br />
        <div className="row">{this.renderProductFromContext()}</div>
      </React.Fragment>
    );
  }
}

ProductList.contextType = MyContext;

export default ProductList;
