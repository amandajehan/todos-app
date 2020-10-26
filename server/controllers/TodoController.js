const { Todo } = require("../models")

class TodoController {
	static async showAll(req, res) {
		try {
			const todos = await Todo.findAll()
			res.status(200).json(todos)
		} catch (err) {
			res.status(500).json(err)
		}
	}

	static async create(req, res) {
		const { title, description, status, due_date } = req.body;
		try {
			const newTodo = await Todo.create({ title, description, status, due_date })

			const result = {
				"id": newTodo.id,
				"title": newTodo.title,
				"description": newTodo.description,
				"status": newTodo.status,
				"due_date": newTodo.due_date
			}

			res.status(201).json(result);

		} catch (err) {
			res.status(400).json(err);
		}
	}

	static async showById(req, res) {
		try {
			const id = +req.params.id;
			const todo = await Todo.findByPk(id)

			res.status(200).json(todo);

		} catch (err) {
			res.status(404).json(err);
		}
	}

	static async editTodo(req, res) {
		try {
			const id = +req.params.id;
			const { title, description, status, due_date } = req.body;
			const updateTodo = await Todo.update({
				title,
				description,
				status,
				due_date
			}, { where: { id }, returning: true })

			res.status(200).json(updateTodo[1][0])
		} catch (err) {
			res.status(404).json(err)
			//res.status(500).json(err)
			//res.status(400).json(err)
		}
	}

	static async editStatus(req, res) {
		try {
			const id = +req.params.id;
			const { status } = req.body;
			const updateTodo = await Todo.update({
				status
			}, { where: { id }, returning: true })

			res.status(200).json(updateTodo[1][0])
		} catch (err) {
			res.status(400).json(err)
			//res.status(500).json(err)
			//res.status(404).json(err)
		}
	}

	static async delete(req, res) {
		try {
			const id = +req.params.id;
			const deletedTodo = await Todo.destroy({
				where: { id }, returning: true
			})

			res.status(200).json({msg: "todo success to delete"})
		} catch (err) {
			res.status(500).json(err)
		}
	}
}

module.exports = TodoController;