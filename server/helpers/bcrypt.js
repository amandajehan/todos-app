const bcrypt = require("bcryptjs");
const router = require("express").Router();

//for hashing password
function hashPassword(password) {
	const salt = bcrypt.genSaltSync(process.env.SALT);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
}

//returns a boolean
function comparePassword(password, hash) {
	return bcrypt.compareSync(password, hash)
}

module.exports = {
	hashPassword,
	comparePassword
}