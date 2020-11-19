import * as actionType from "./actionTypes";

let stateTodosDefault = {
  todos: [
    {
      id: 1,
      title: "ReactJS",
      createdAt: new Date(),
      detail: "Test Demo Detail of React JS",
    },
    {
      id: 2,
      title: "HTML",
      createdAt: new Date(),
      detail: "Test Demo Detail of HTML JS",
    },
  ],
};

export function reducerTodos(state = stateTodosDefault, action) {
  switch (action.type) {
    case actionType.DELELETODO: {
      let list = state.todos;
      list.splice(action.payload, 1);
      return {
        todos: [...list],
      };
    }

    case actionType.ADDTODO: {
      let list = state.todos;
      return {
        todos: [action.payload, ...list],
      };
    }

    default: {
      return state;
    }
  }
}
