const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const UserBooking = connection.define(
  "user_booking",
  {
    ownerId: {
      type: DataTypes.INTEGER,
    },
    petsitterId: {
      type: DataTypes.INTEGER,
    },
    bookingId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);

module.exports = UserBooking;
