const User = require("../api/models/users.model");
const Pet = require("../api/models/pets.model");
const Service = require("../api/models/services.model");
const Booking = require("../api/models/bookings.model");
const Comment = require("../api/models/comments.model");
const Thread = require("../api/models/thread.model");
const UserBooking = require("../api/models/user_bookings.model");

const initializeRelationships = () => {
  try {
    User.hasMany(Pet);
    Pet.belongsTo(User);
    User.belongsToMany(Service, { through: "users_services" });
    Service.belongsToMany(User, { through: "users_services" });
    User.belongsToMany(Booking, { through: "users_bookings" });
    Booking.belongsToMany(User, { through: "users_bookings" });
    Thread.hasOne(Booking);
    Booking.belongsTo(Thread);
    Thread.hasMany(Comment);
    Comment.belongsTo(Thread);
    Booking.hasMany(Service);
    Service.belongsTo(Booking);
    console.log("Relationships added to models.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelationships;
