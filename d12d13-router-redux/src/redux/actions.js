import * as actionType from "./actionTypes";

export function deleteTodo(index) {
  return {
    type: actionType.DELELETODO,
    payload: index,
  };
}

export function addTodo(todo) {
  return {
    type: actionType.ADDTODO,
    payload: todo,
  };
}
