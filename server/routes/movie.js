const movieRouter = require("express").Router();
const MovieController = require("../controllers/MovieController");

movieRouter.get("/popular", MovieController.findPopularMovies);

module.exports = movieRouter;