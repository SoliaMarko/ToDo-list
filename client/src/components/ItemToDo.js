const ItemToDo = ({ toDo, filterToDos }) => {
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
    <tr>
      <td>{toDo.description}</td>
      <td role="button">Edit</td>
      <td role="button">
        <button
          className="btn btn-danger"
          onClick={() => deleteToDo(toDo.todo_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemToDo;
