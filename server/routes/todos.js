const todoRouter = require("express").Router();
const TodoController = require("../controllers/TodoController.js");
const authentication = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js")

todoRouter.use(authentication);

todoRouter.get("/", TodoController.showAll);
todoRouter.post("/", TodoController.create);

todoRouter.get("/:id", authorization, TodoController.showById);
todoRouter.put("/:id", authorization, TodoController.editTodo);
todoRouter.patch("/:id", authorization, TodoController.editStatus);
todoRouter.delete("/:id", authorization, TodoController.delete);

module.exports = todoRouter;