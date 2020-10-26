const router = require("express").Router();
const HomeController = require("../controllers/HomeController.js");
const todoRouter = require("./todos.js");
const userRouter = require("./user.js");

router.get("/", HomeController.showHomePage)
router.use("/todos", todoRouter)
// router.use(userRouter)

module.exports = router;