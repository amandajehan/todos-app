const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt.js");
const { signToken } = require("../helpers/jwt.js");
const { OAuth2Client } = require('google-auth-library');

class UserController {
	static async register(req, res, next) {
		try {
			const payload = {
				email: req.body.email,
				password: req.body.password
			}

			const user = await User.create(payload);

			res.status(201).json({
				id: user.id,
				email: user.email
			});

		} catch (err) {
			next(err);
		}
	}

	static async login(req, res, next) {
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
				throw { name: "InvalidUserPassword" }

			} else if (!comparePassword(payload.password, user.password)) { //user is found but password isn't matched
				throw { name: "InvalidUserPassword" }

			} else { //if email & pass are matched, access token is given
				const access_token = signToken({
					id: user.id,
					email: user.email
				});

				res.status(200).json({
					access_token
				});
			}

		} catch (err) {
			next(err);
		}
	}

	static googleLogin(req, res, next) {
		let { google_access_token } = req.body;
		const client = new OAuth2Client(process.env.CLIENT_ID);
		let email = null;

		client.verifyIdToken({
			idToken: google_access_token,
			audience: process.env.CLIENT_ID
		})
		.then(data => {
			let payload = data.getPayload()
			console.log(payload)
			email = payload.email;

			return User.findOne({
				where: {
					email: payload.email
				}
			})
		})
		.then(user => {
			if (user) {
				return user

			} else {
				let userData = {
					email,
					password: "asdqwerty"
				}

				return User.create(userData)
			}
		})
		.then(data => {
			let access_token = signToken({
				id: data.id,
				email: data.email
			})

			return res.status(200).json({
				access_token,
				email
			})
		})
		.catch(err => {
			next(err)
		})
	}

}

module.exports = UserController;