import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Products from "./components/Products/Products";
import Cart from "./components/Carts/Cart";
import { MyContext, productList } from "./MyContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productList,
      cart: [],
      searchList: productList,
      filterList: [],
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let productSearch = this.state.products.filter((product) => {
      return product.name.includes(e.target.value);
    });
    this.setState({
      searchList: productSearch,
    });
  };

  addToCart = (product) => {
    console.log("Call Add To Cart");
    const idx = this.state.cart.findIndex((prod) => prod.id === product.id);
    if (idx < 0) {
      let _product = { ...product, quantity: 1 };
      this.setState({
        cart: [...this.state.cart, _product],
      });
    } else {
      let _cart = [...this.state.cart];
      _cart[idx].quantity += 1;
      this.setState({
        cart: _cart,
      });
    }
    // this.context.cart = [...this.context.cart, this.props.product];
    // console.log(this.context);
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          handleChange: this.handleChange,
          addToCart: this.addToCart,
          filterList: this.state.filterList,
        }}
      >
        <div className="App">
          <Header></Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <SideBar></SideBar>
              </div>
              <div className="col-md-7">
                <Products></Products>
              </div>
              <div className="col-md-3">
                <Cart></Cart>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
