import React, { Component } from "react";
import TodoItems from "./TodoItems";
import { Todo } from "../context";

export class Todolist extends Component {
  constructor(props) {
    super(props);
    //  this.deleteTodo = this.deleteTodo.bind(this);
  }
  addTodo = (todo) => {
    console.log(todo);
  };
  render() {
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
