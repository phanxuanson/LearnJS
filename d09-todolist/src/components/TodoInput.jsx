import React, { Component } from "react";
import { Todo } from "../context";

export class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      todoInput: e.target.value,
    });
  };

  render() {
    const style = { margin: "auto" };
    return (
      <div>
        <form className="form-inline" style={{ background: "grey" }}>
          <div className="form-group">
            <input
              onChange={(e) => this.handleChange(e)}
              type="email"
              className="form-control"
              placeholder="Enter todo"
            />
          </div>
          <button
            onClick={() => this.props.addTodo(this.state.todoInput)}
            type="button"
            className="btn btn-primary"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
