import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";

function NoteInput() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeDetail(e) {
    setDetail(e.target.value);
  }

  function handleAddTodo(e) {
    if (title == "" || detail == "") {
      alert("You should input title and detail");
    } else {
      let maxId = 0;
      if (todos.length > 0) {
        maxId = Math.max.apply(
          Math,
          todos.map((o) => {
            return o.id;
          })
        );
      }
      let todo = {
        id: maxId + 1,
        title: title,
        createdAt: new Date(),
        detail: detail,
      };
      dispatch(addTodo(todo));
    }
  }

  return (
    <React.Fragment>
      <div className="col-md-12">
        <h2>Timestamped Notes App</h2>
        <form action="/action_page.php">
          <div className="form-group">
            <input
              onChange={handleChangeTitle}
              type="text"
              className="form-control"
              placeholder="Note Title"
              value={title}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChangeDetail}
              type="text"
              className="form-control"
              placeholder="Note Details"
              value={detail}
            />
          </div>

          <button
            onClick={handleAddTodo}
            type="button"
            className="btn btn-primary btn-block"
          >
            Add Note
          </button>
        </form>
        <hr />
      </div>
    </React.Fragment>
  );
}

export default NoteInput;
