const DeleteToDo = ({ toDo, filterToDos }) => {
  const deleteToDo = async id => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      }).then(() => filterToDos(id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button className="btn btn-danger" onClick={() => deleteToDo(toDo.todo_id)}>
      Delete
    </button>
  );
};

export default DeleteToDo;
