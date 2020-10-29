const axios = require("axios");

class MovieController {
	static findPopularMovies(req, res) {
		axios({
			url: "https://api.themoviedb.org/3/movie/popular",
			method: "get",
			headers: {
				Authorization: `Bearer ${process.env.TOKEN_TMDB}`
			}
		})
		.then(data=> {
			res.status(200).json(data.results);
		})
		.catch(err => {
			next(err);
		})
	}
}

module.exports = MovieController;