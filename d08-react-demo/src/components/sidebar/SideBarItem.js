import React, { Component } from "react";

export default class SideBarItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="list-group">
        <a class="list-group-item" href="#">
          <i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;
          {this.props.sideName}
        </a>
      </div>
    );
  }
}
