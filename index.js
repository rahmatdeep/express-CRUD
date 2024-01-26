const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const { log } = require("console");

app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
      error: parsedPayload.error.errors,
    });
    return;
  }

  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: "Todo created",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Servor Error",
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find();
    res.json({
      todoData: todos,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Servor Error",
    });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  try {
    const checkTodo = await todo.findOne({ _id: req.body.id });
    if (checkTodo.completed == true) {
      return res.json({
        msg: "todo is already completed",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Servor Error" });
  }

  try {
    const updatedTodo = await todo.updateOne(
      { _id: req.body.id },
      { completed: true }
    );
    res.json({
      msg: "Todo is completed",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: "Servor Error" });
  }
});

app.put("/description", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  const updatedTodo = await todo.updateOne(
    { _id: req.body.id },
    { description: req.body.description }
  );
  res.json({
    msg: "Description updated",
  });
});

app.delete("/todo", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
  try {
    await todo.deleteOne({ _id: updatePayload.id });
    res.json({
      msg: "todo deleted",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
