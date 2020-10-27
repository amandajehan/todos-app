const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt.js");
const { signToken } = require("../helpers/jwt.js")

class UserController {
	static async register(req, res) {
		try {
			const payload = {
				email: req.body.email,
				password: req.body.password
			}

			const user = await User.create(payload);
			res.status(201).json({
				id: user.id,
				email: user.email
			})

		} catch (err) {
			res.status(400).json(err);
		}
	}

	static async login(req, res) {
		try {
			const payload = {
				email: req.body.email,
				password: req.body.password
			}

			const user = await User.findOne({
				where: {
					email: payload.email
				}
			});
			
			if (!user) { //if user isn't found
				res.status(401).json({ //show not authorized instead of bad request for security
					message: "Wrong e-mail/password"
				});

			} else if (!comparePassword(payload.password, user.password)) { //user is found but password isn't matched
				res.status(401).json({
					message: "Wrong e-mail/password"
				});

			} else { //if email & pass are matched, access token is given
				const access_token = signToken({
					id: user.id,
					email: user.email
				});

				res.status(200).json({
					access_token
				});
			}

		} catch(err) {
			res.status(400).json(err);
		}
	}
}

module.exports = UserController;