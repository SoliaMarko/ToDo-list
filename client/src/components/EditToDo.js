import React, { useState } from "react";

const EditToDo = ({ toDo }) => {
  const [description, setDescription] = useState(toDo.description);

  const updateDescription = async e => {
    if (!description) return;
    e.preventDefault();
    try {
      const body = { description };
      console.log(body);
      await fetch(`http://localhost:5000/todos/${toDo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const resetDescription = () => {
    setDescription(toDo.description);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${toDo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${toDo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit ToDo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={resetDescription}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={resetDescription}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditToDo;
