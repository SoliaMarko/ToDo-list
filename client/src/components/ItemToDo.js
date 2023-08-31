const ItemToDo = ({ children, toDo }) => {
  return (
    <tr>
      <td>{toDo.description}</td>
      {children}
    </tr>
  );
};

export default ItemToDo;
