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
