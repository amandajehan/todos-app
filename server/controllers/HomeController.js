class HomeController {
	static showHomePage(req, res) {
		res.send("Todos App is running")
	}
}

module.exports = HomeController;