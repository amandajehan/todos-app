const todoRouter = require("express").Router();
const TodoController = require("../controllers/TodoController.js");

todoRouter.get("/", TodoController.showAll);
todoRouter.post("/", TodoController.create);
todoRouter.get("/:id", TodoController.showById);
todoRouter.put("/:id", TodoController.editTodo);
todoRouter.patch("/:id", TodoController.editStatus);
todoRouter.delete("/:id", TodoController.delete);

module.exports = todoRouter;