import React, { Component } from "react";

class Search extends Component {
    render() {
        return ( <
            div >
            <
            form class = "form-inline my-2 my-lg-0" >
            <
            input class = "form-control mr-sm-2"
            type = "search"
            placeholder = "Search" /
            >
            <
            button class = "btn btn-outline-success my-2 my-sm-0"
            type = "submit" >
            Search <
            /button> <
            /form> <
            /div>
        );
    }
}

export default Search;