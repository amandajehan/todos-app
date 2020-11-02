const router = require("express").Router();
const HomeController = require("../controllers/HomeController.js");
const todoRouter = require("./todos.js");
const userRouter = require("./user.js");
const activityRouter = require("./activity.js");

router.get("/", HomeController.showHomePage)
router.use("/todos", todoRouter)
router.use(userRouter)
router.use(activityRouter)

module.exports = router;