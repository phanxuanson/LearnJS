import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import Footer from "./component/Footer";
import Cart from "./component/Carts/Cart";
import Products from "./component/Products/Products";
import { MyContext, productList } from "./MyContext";
import ProductList from "./component/Products/ProductList";
import Swal from "sweetalert2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productList,
      searchList: [],
      cart: [],
      filterList: [],
    };
  }
  handleChange = (e) => {
    let productSearch = this.context.products.filter((product) => {
      return product.name.includes(e.target.value);
    });
    this.setState({
      search: e.target.value,
      searchList: productSearch,
    });
  };
  addTocart = (product) => {
    const idx = this.state.cart.findIndex((prod) => prod.id === product.id);
    if (idx < 0) {
      let _product = { ...product, quantity: 1 };
      this.setState({
        cart: [...this.state.cart, _product],
      });
    } else {
      let _cart = [...this.state.cart];
      _cart[idx].quantity = this.state.cart[idx].quantity + 1;
      this.setState({
        cart: _cart,
      });
    }
    //  this.context.cart = [...this.context.cart, this.props.product];
  };
  filterProductByCat = (cat) => {
    if (cat === "") {
      this.state({
        filterList: [...this.state.products],
      });
      return;
    }
    let _filterList = this.state.products.filter(
      (item) => item.catelogy === cat
    );
    this.setState({
      filterList: _filterList,
    });
  };

  handleRemoveProductFromCart = (id) => {
    Swal.fire({
      title: "Do you want to delete the product co id: " + id,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Ok`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let product = this.state.cart.find((item) => item.id === id);
        let idx = this.state.cart.indexOf(product);
        this.state.cart.splice(idx, 1);
        this.setState({
          cart: [...this.state.cart],
        });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Product Not Deleted", "", "info");
      }
    });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addTocart: this.addTocart,
          handleChange: this.handleChange,
          filterList: this.state.filterList,
          handleRemoveProductFromCart: this.handleRemoveProductFromCart,
          filterProductByCat: this.filterProductByCat,
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
