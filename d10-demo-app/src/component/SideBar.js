import React, { Component } from "react";
import { MyContext } from "../MyContext";

export default class SideBar extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <br />
        <button
          onClick={(e) => this.context.filterProductByCat("tui")}
          type="button"
          className="btn btn-primary btn-block"
        >
          Tui
        </button>
        <button
          onClick={(e) => this.context.filterProductByCat("giay")}
          type="button"
          className="btn btn-primary btn-block"
        >
          Giay
        </button>
        <button
          onClick={(e) => this.context.filterProductByCat("ao")}
          type="button"
          className="btn btn-primary btn-block"
        >
          Ao
        </button>
        <button type="button" className="btn btn-primary btn-block">
          Filter4
        </button>
        <button type="button" className="btn btn-primary btn-block">
          Filter5
        </button>

        <div className="form-group">
          <label>Khoang gia</label>
          <input
            type="range"
            className="form-control-range"
            id="formControlRange"
          />
        </div>
      </div>
    );
  }
}
