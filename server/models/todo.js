'use strict';
const date = new Date();

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      Todo.belongsTo(models.User, { foreignKey: "UserId" })
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description is required"
        }
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Due date is required"
        },
        isAfter: {
          args: new Date(date.setDate(date.getDate() - 1)).toString(),
          msg: "Due date shouldn't be in the past time!"
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(todo) {
        todo.status = false;
      }
    },
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};