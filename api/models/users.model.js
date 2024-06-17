const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const User = connection.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("admin", "owner", "petsitter"),
      defaultValue: "owner",
    },
    bio: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    pet: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);

module.exports = User;
