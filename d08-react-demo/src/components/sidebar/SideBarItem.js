import React, { Component } from "react";

export default class SideBarItem extends Component {
    render() {
        console.log(this.props);
        return ( <
            div class = "list-group" >
            <
            a class = "list-group-item"
            href = "#" >
            <
            i class = { this.props.sideObj.icon }
            aria - hidden = "true" > < /i>&nbsp; { this.props.sideObj.name } <
            /a> <
            /div>
        );
    }
}