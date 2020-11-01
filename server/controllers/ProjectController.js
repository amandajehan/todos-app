const { Project } = require("../models")


class ProjectController {
	static async createProject(req, res, next) {
		const UserId = req.loggedInUser.id;
		const { project_name } = req.body;

		try {
			const newProject = await Project.create({
				project_name
			});

			const project = await ProjectUser.create({
				"projectId": newProject.id,
				"userId": UserId
			})
			console.log(project)
			res.status(201).json({ msg: "Project is successfully created!"})

		} catch(err) {
			next(err)
		}
	}
}

module.exports = ProjectController;