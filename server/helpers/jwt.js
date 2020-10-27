const jwt = require('jsonwebtoken');
const router = require("express").Router();

function signToken(payload) {
	const token = jwt.sign(payload, process.env.SECRET)
	return token
}

module.exports = {
	signToken
}