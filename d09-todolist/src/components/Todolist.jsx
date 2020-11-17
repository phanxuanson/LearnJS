import React, { Component } from "react";
import TodoItems from "./TodoItems";
import { Todo } from "../context";

export class Todolist extends Component {
  static contextType = Todo;

  constructor(props) {
    super(props);
    this.state = {};
    console.log("Goi Contrusctor");
    //  this.deleteTodo = this.deleteTodo.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log("Goi Ham Get Derived State");
  }

  componentDidMount() {
    console.log("Goi CPN Did Mount");
  }

  componentDidUpdate() {
    console.log("Goi CPN Did Update");
  }

  render() {
    console.log("Goi Render");
    this.context.testContext("Hello World");

    let todoItemList = this.props.todoList.map((todo) => {
      return (
        <TodoItems
          deleteTodo={this.props.deleteTodo}
          key={todo.id}
          todo={todo}
        ></TodoItems>
      );
    });
    return (
      <>
        <table className="table table-dark">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{todoItemList}</tbody>
        </table>
      </>
    );
  }
}

export default Todolist;
