import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import Todolist from './components/Todolist';
import TodoItems from './components/TodoItems';
import {Todo} from './context';


class App extends Component {
  static contextType = Todo;
    constructor(props){
        super(props)
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
    // addTodo = (todo) => {
    //     let newTodo = {id:new Date().toString(), name: todo}
    //     this.setState({
    //         todoList: [...this.state.todoList, newTodo],
    //     })
    // };
    addTodo = (todo) => {
        let maxId = Math.max.apply(
          Math,
          this.state.todoList.map((o) => {
            return o.id;
          })
        );
        let newTodo = { id: maxId + 1, name: todo };
        this.setState({ todoList: [...this.state.todoList, newTodo] });
      };
        
    deleteTodo = (e, id) => {
        let idx = this.state.todoList.findIndex((todo) => todo.id === id);
        this.state.todoList.splice(idx,1);
        this.setState({
            todoList: [...this.state.todoList],
        });
    }
    render(){
      this.context.addTodo = this.addTodo;
      
        return ( 
            <div className="container">
             <div className="row">
                 <div className="col-md-12">
                     <TodoInput addTodo={this.addTodo}></TodoInput>
                 </div>
             </div>
             <br/>
             <div className="row">
                 <div className="col-md-12">
                     <Todolist deleteTodo={this.deleteTodo} todoList={this.state.todoList}></Todolist>
                 </div>
             </div>
             
            </div>
         );
    }
  
}

export default App;