import React, { Component } from "react";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <
            div class = "App" >
            <
            div class = "container-fluid" >
            <
            div class = "row" >
            <
            div class = "col-md-12" >
            <
            Header > < /Header> <
            /div> <
            /div> <
            div class = "row" >
            <
            div class = "col-md-12" >
            <
            div class = "d-flex"
            id = "wrapper" >
            <
            SideBar > < /SideBar> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default App;