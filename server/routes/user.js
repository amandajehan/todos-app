const userRouter = require("express").Router();
const UserController = require("../controllers/UserController.js");

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/googleLogin", UserController.googleLogin)

module.exports = userRouter;