import React, { Component } from "react";
import { MyContext } from "../MyContext";

export default class SideBar extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <br />
        <button
          onClick={(e) => this.context.filterProductByCat("giay")}
          className="btn btn-primary btn-block"
        >
          Giay
        </button>
        <button
          onClick={(e) => this.context.filterProductByCat("tui")}
          className="btn btn-warning btn-block"
        >
          Tui
        </button>
        <button
          onClick={(e) => this.context.filterProductByCat("")}
          className="btn btn-secondary btn-block"
        >
          All
        </button>
        <div className="form-group">
          <label>Khoảng Giá</label>
          <input
            onChange={this.context.handleChangePriceRange}
            type="range"
            className="form-control-range"
          ></input>
        </div>
      </div>
    );
  }
}
