import React, { useState, useEffect } from "react";
import ItemToDo from "./ItemToDo";
import EditToDo from "./EditToDo";
import DeleteToDo from "./DeleteToDo";

const ListTodos = () => {
  const [toDos, setToDos] = useState([]);

  const getToDos = async () => {
    try {
      await fetch("http://localhost:5000/todos")
        .then(res => res.json())
        .then(data => setToDos(data));
    } catch (error) {
      console.error(error.message);
    }
  };

  const filterToDos = id => {
    setToDos(toDos => toDos.filter(toDo => toDo.todo_id !== id));
  };

  useEffect(() => {
    getToDos();
  }, []);

  console.log(toDos);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map(toDo => (
            <ItemToDo key={`key${toDo.todo_id}`} toDo={toDo}>
              <td>
                <EditToDo toDo={toDo} />
              </td>
              <td>
                <DeleteToDo toDo={toDo} filterToDos={filterToDos} />
              </td>
            </ItemToDo>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
