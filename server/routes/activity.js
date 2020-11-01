const activityRouter = require("express").Router();
const ActivityController = require("../controllers/ActivityController")

activityRouter.get("/activity", ActivityController.getActivity)

module.exports = activityRouter;