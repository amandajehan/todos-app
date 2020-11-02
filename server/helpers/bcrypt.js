const bcrypt = require("bcryptjs");

//hashing password
function hashPassword(password) {
	const salt = bcrypt.genSaltSync(Number(process.env.SALT));
	const hash = bcrypt.hashSync(password, salt);
	return hash;
}

//comparing password
function comparePassword(password, hash) {
	return bcrypt.compareSync(password, hash);
}

module.exports = {
	hashPassword,
	comparePassword
}