import React, { Component } from "react";

export class TodoItems extends Component {
  render() {
    console.log(this.props);
    return (
      <tr>
        <td>{this.props.todo.id}</td>
        <td>{this.props.todo.name}</td>
        <td>
          {" "}
          <button type="button" className="btn btn-primary">
            Edit
          </button>
          <button
            onClick={(e) => this.props.deleteTodo(e, this.props.todo.id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItems;
