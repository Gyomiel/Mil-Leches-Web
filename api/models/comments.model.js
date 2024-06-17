const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Comment = connection.define(
  "comment",
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: true }
);
module.exports = Comment;
