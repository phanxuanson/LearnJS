import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";
import { Link } from "react-router-dom";

function NoteTableItem(props) {
  const dispatch = useDispatch();
  function callDeleteTodo(e, idx) {
    dispatch(deleteTodo(idx));
  }

  return (
    <React.Fragment>
      <tr>
        <td>{props.todo.id}</td>
        <td>{props.todo.title}</td>
        <td>Recorded: {props.todo.createdAt.toString()}</td>
        <td>
          <Link
            to={"/note/" + props.todo.id}
            type="button"
            className="btn btn-primary"
          >
            Show Detail
          </Link>
          <button
            onClick={(e) => callDeleteTodo(e, props.todo.index)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default NoteTableItem;
