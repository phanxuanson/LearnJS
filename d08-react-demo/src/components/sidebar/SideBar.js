import React, { Component } from "react";
import SideBarItem from "./SideBarItem";

export default class SideBar extends Component {
  render() {
    let sideBarList = ["Shortcuts", "Overview", "Events", "Profile", "Status"];
    let list = sideBarList.map((item) => (
      <SideBarItem sideName={item}></SideBarItem>
    ));
    console.log(list);
    return (
      <div>
        <div class="bg-light border-right" id="sidebar-wrapper">
          <div class="sidebar-heading">Start Bootstrap </div>
          <div class="list-group list-group-flush">{list}</div>
        </div>
      </div>
    );
  }
}
