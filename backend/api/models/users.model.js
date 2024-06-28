const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const User = connection.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      },
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
    location: {
      type: DataTypes.ENUM(
        "Gran Canaria",
        "Tenerife",
        "Fuerteventura",
        "Lanzarote",
        "La Graciosa",
        "La Palma",
        "La Gomera",
        "El Hierro"
      ),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);

module.exports = User;
