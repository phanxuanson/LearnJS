import React from "react";

function NoteDetail(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h3>{props.todo.title}</h3>
        </div>
        <div className="col-md-6">
          <p>Recorded: {props.todo.createdAt.toString()}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <p>Details: {props.todo.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteDetail;
