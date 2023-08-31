import React from "react";
import "./App.css";

import InputToDo from "./components/InputToDo";
import ListTodos from "./components/ListToDos";

function App() {
  return (
    <>
      <div className="container">
        <InputToDo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
