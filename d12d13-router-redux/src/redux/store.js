import { createStore, combineReducers, compose } from "redux";
import { reducerTodos } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todos: reducerTodos,
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
