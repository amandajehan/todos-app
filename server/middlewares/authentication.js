const { verifyToken } = require("../helpers/jwt.js");
const { User } = require("../models");

async function authentication(req, res, next) {
	const { token } = req.headers;

	try {
		if (!token) {
			throw { name: "AuthenticationFailed" }

		} else {
			const decoded = verifyToken(token);

			const user = await User.findOne({
				where: {
					email: decoded.email
				}
			});
			
			if (!user) {
				throw { name: "AuthenticationFailed" }

			} else {
				req.loggedInUser = decoded;
				next();
			}
		}

	} catch (err) {
		next(err);
	}
}

module.exports = authentication;