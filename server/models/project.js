'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsToMany(models.User, {
        through: models.ProjectUser,
        foreignKey: "projectId"
      })
    }
  };
  Project.init({
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Project's name is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};