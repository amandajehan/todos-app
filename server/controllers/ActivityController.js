const axios = require("axios")

class ActivityController {
	static getActivity(req, res, next) {
		axios.get(`http://www.boredapi.com/api/activity/`)
		.then(data => {
			console.log(data)
			res.status(200).json(data.data.activity)
		})
		.catch(err => {
			next(err)
		})
	}
}

module.exports = ActivityController;