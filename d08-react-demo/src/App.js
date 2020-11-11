import React, { Component } from "react";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Header></Header>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="d-flex" id="wrapper">
                <SideBar></SideBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
