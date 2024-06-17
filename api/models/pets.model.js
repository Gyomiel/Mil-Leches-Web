const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Pet = connection.define(
  "pet",
  {
    name: {
      type: DataTypes.STRING,
    },
    species: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    sickness: {
      type: DataTypes.BOOLEAN,
    },
    vet: {
      type: DataTypes.STRING,
    },
    behaviour: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);
module.exports = Pet;
