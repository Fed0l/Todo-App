import "dotenv/config";
import express from "express";
import { router } from "./modules/todo/routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// getall()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// getTodoByID('3')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// createNewItem("aqwsda", "asdqwqqsadasda", "True")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// updateTodoById('1','ff','mm','false')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// deleteTodoById('3')
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// deleteAllTodos()
// .then ((data) => console.log(data))
// .catch((err) => console.error(err));

// updateAllTodosStatus()
// .then ((data) => console.log(data))
// .catch((err) => console.error(err));
