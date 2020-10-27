const { Todo } = require("../models")

class TodoController {
	static async showAll(req, res, next) {
		try {
			const userId = req.loggedInUser.id;
			const todos = await Todo.findAll({
				where: {
					UserId: userId
				}
			});

			res.status(200).json(todos);

		} catch (err) {
			next(err);
		}
	}

	static async create(req, res, next) {
		const UserId = req.loggedInUser.id;
		const { title, description, status, due_date } = req.body;
		try {
			const newTodo = await Todo.create({ 
				title, 
				description, 
				status, 
				due_date,
				UserId 
			});

			const result = {
				"id": newTodo.id,
				"title": newTodo.title,
				"description": newTodo.description,
				"status": newTodo.status,
				"due_date": newTodo.due_date,
				"UserId": newTodo.UserId
			}

			res.status(201).json(result);

		} catch (err) {
			next(err);
		}
	}

	static async showById(req, res, next) {
		try {
			const id = +req.params.id;
			const todo = await Todo.findByPk(id)

			res.status(200).json(todo);

		} catch (err) {
			next(err);
		}
	}

	static async editTodo(req, res, next) {
		try {
			const id = +req.params.id;
			const { title, description, status, due_date } = req.body;
			const updateTodo = await Todo.update({
				title,
				description,
				status,
				due_date
			}, { where: { id }, returning: true })

			res.status(200).json(updateTodo[1][0]);

		} catch (err) {
			next(err);
		}
	}

	static async editStatus(req, res, next) {
		try {
			const id = +req.params.id;
			const { status } = req.body;
			const updateTodo = await Todo.update({
				status
			}, { where: { id }, returning: true })

			res.status(200).json(updateTodo[1][0]);

		} catch (err) {
			next(err);
		}
	}

	static async delete(req, res, next) {
		try {
			const id = +req.params.id;
			const deletedTodo = await Todo.destroy({
				where: { id }, returning: true
			})

			res.status(200).json({msg: "todo success to delete"});
			
		} catch (err) {
			next(err);
		}
	}
}

module.exports = TodoController;