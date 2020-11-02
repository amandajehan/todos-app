const { Todo } = require("../models")

async function authorization(req, res, next) {
	try {
		const id = +req.params.id;
		const todo = await Todo.findByPk(id);

		if (!todo) {
			throw { name: "NotFound" }

		} else if (todo.UserId === req.loggedInUser.id) {
			next(); 

		} else {
			throw { name: "NotAuthorized" }
		}

	} catch(err) {
		next(err); 
	}
}

module.exports = authorization;