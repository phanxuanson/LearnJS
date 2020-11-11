import React, { Component } from "react";
import SideBarItem from "./SideBarItem";

export default class SideBar extends Component {
  render() {
    let sideBarList = [
      { name: "Shortcuts", icon: "fa fa-bars" },
      { name: "Overview", icon: "fa fa-android" },
      { name: "Events", icon: "fa fa-apple" },
      { name: "Profile", icon: "fa fa-address-book" },
      { name: "Status", icon: "fa fa-battery-full" },
    ];
    let list = sideBarList.map((item) => (
      <SideBarItem sideObj={item}></SideBarItem>
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
