const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newToDo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todos

app.get("/todos", async (_, res) => {
  try {
    const allToDos = await pool.query("SELECT * FROM todo");
    res.json(allToDos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const selectedToDo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1",
      [id]
    );
    res.json(selectedToDo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateToDo = pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json(`ToDo task with id = ${id} was updated`);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteToDo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(`ToDo task with id = ${id} was deleted.`);
  } catch (err) {
    console.error(err.message);
  }
});

// delete all todos

app.delete("/todos", async (_, res) => {
  try {
    const deleteAllToDos = await pool.query("DELETE FROM todo");

    res.json("ToDo list was completely cleared");
  } catch (error) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has been started on port 5000");
});
