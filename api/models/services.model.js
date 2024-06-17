const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Service = connection.define(
  "service",
  {
    atHome: {
      type: DataTypes.BOOLEAN,
    },
    visits: {
      type: DataTypes.BOOLEAN,
    },
    walking: {
      type: DataTypes.BOOLEAN,
    },
    hairdresser: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);
module.exports = Service;
