import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";
import TodoItems from "./components/TodoItems";
import { Todo } from "./context";

class App extends Component {
  static contextType = Todo;

  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1,
          name: "javascripts",
        },
        {
          id: 2,
          name: "NodeJs",
        },
      ],
    };
  }
  testContext(str) {
    console.log(str);
  }
  addTodo = (todo) => {
    let newTodo = { id: new Date().toString(), name: todo };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
    });
  };
  deleteTodo = (e, id) => {
    let idx = this.state.todoList.findIndex((todo) => todo.id === id);
    this.state.todoList.splice(idx, 1);
    this.setState({
      todoList: [...this.state.todoList],
    });
  };
  render() {
    this.context.addTodo = this.addTodo;
    this.context.testContext = this.testContext;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TodoInput addTodo={this.addTodo}></TodoInput>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <Todolist
              deleteTodo={this.deleteTodo}
              todoList={this.state.todoList}
            ></Todolist>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
