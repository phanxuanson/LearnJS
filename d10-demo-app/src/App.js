import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Products from "./components/Products/Products";
import Cart from "./components/Carts/Cart";
import { MyContext, productList } from "./MyContext";
import Swal from "sweetalert2";

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
  };

  filterProductByCat = (cat) => {
    if (cat === "") {
      this.setState({
        filterList: [...this.state.products],
      });
      return;
    }
    let _filterList = this.state.products.filter(
      (item) => item.category === cat
    );
    this.setState({
      filterList: _filterList,
    });
  };

  handleDecreaseProductQuantity = (e, id) => {
    console.log(id);
    Swal.fire({
      title: "Do you want to delete the product with id: " + id,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Delete`,
      denyButtonText: `Nooooooo`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let product = this.state.cart.find((el) => el.id === id);
        let idx = this.state.cart.indexOf(product);
        this.state.cart.splice(idx, 1);
        this.setState({
          cart: [...this.state.cart],
        });
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Not Deleted", "", "info");
      }
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          filterList: this.state.filterList,
          handleChange: this.handleChange,
          addToCart: this.addToCart,
          handleDecreaseProductQuantity: this.handleDecreaseProductQuantity,
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
