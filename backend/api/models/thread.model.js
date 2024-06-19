const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Thread = connection.define(
  "thread",
  {
    comment: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);
module.exports = Thread;
