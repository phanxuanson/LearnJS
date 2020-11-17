import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <br />
        <button className="btn btn-primary btn-block">Filter1</button>
        <button className="btn btn-warning btn-block">Filter1</button>
        <button className="btn btn-secondary btn-block">Filter1</button>
        <button className="btn btn-info btn-block">Filter1</button>
        <button className="btn btn-danger btn-block">Filter1</button>
        <div className="form-group">
          <label>Khoảng Giá</label>
          <input type="range" className="form-control-range"></input>
        </div>
      </div>
    );
  }
}
