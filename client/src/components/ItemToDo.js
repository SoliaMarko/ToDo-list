const ItemToDo = ({ toDo }) => {
  return (
    <tr>
      <td>{toDo.description}</td>
      <td role="button">Edit</td>
      <td role="button">Delete</td>
    </tr>
  );
};

export default ItemToDo;
