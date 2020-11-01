const projectRouter = require("express").Router();
const ProjectController = require("../controllers/ProjectController")
const authentication = require("../middlewares/authentication.js");

projectRouter.use(authentication);
projectRouter.post("/project", ProjectController.createProject)

module.exports = projectRouter;