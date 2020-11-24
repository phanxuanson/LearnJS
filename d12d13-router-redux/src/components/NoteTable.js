import React from "react";
import { useSelector } from "react-redux";

import NoteTableItem from "./NoteTableItem";

function NoteTable() {
  const todos = useSelector((state) => state.todos.todos);
  var todoList = todos.map((todo, index) => {
    return <NoteTableItem key={index} todo={todo} index={index} />;
  });
  return (
    <div className="container-fluid">
      <table className="table table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{todoList}</tbody>
      </table>
    </div>
  );
}

export default NoteTable;
