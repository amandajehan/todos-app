module.exports = function (err, req, res, next) {
	let status = null;
	let name = err.name;
	
	switch (name) {
		case "SequelizeValidationError":
			status = 400;
			error = err.errors.map(el => {
				return el.message
			}).join(", ");

			break;
		case "InvalidEmailPassword":
			status = 400;
			error = "Invalid email / password";

			break;
		case "AuthenticationFailed":
			status = 401;
			error = "Authentication Failed"

			break;
		case "NotAuthorized":
			status = 403;
			error = "Not Authorized"

			break;
		case "NotFound":
			status = 404;
			error = "Not Found"

			break;
		default:
			status = 500;
			error = "Internal Server Error"
	}

	res.status(status).json({error});
}