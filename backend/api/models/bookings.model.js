const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Booking = connection.define(
  "booking",
  {
    checkIn: {
      type: DataTypes.DATE,
    },
    checkOut: {
      type: DataTypes.DATE,
    },
    extendableTime: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);
module.exports = Booking;
