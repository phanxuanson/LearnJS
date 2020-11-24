import React from "react";
import NoteInput from "./components/NoteInput";
import NoteTable from "./components/NoteTable";
import { Switch, Route, Redirect } from "react-router-dom";
import NoteDetail from "./components/NoteDetail";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  function getTodoFromId(id) {
    let todo = todos.find((todo) => todo.id == id);
    return todo;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <NoteInput></NoteInput>
      </div>
      <div className="row">
        <Switch>
          <Route path="/" exact component={NoteTable}></Route>
          <Route
            path="/note/:id"
            render={(props) => {
              if (getTodoFromId(props.match.params.id) === undefined) {
                return;
              }
              return <NoteDetail todo={getTodoFromId(props.match.params.id)} />;
            }}
          ></Route>
          <Redirect to="/"></Redirect>
        </Switch>
        {/* <NoteTable></NoteTable> */}
      </div>
    </div>
  );
}

export default App;
