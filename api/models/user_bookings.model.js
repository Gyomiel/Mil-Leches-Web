const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");
const User = require("./users.model");
const Booking = require("./bookings.model");

const UserBooking = connection.define(
  "user_booking",
  {
    ownerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    petsitterId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    bookingId: {
      type: DataTypes.INTEGER,
      references: {
        model: Booking,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);

module.exports = UserBooking;
