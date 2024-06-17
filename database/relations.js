const User = require("../api/models/users.model");
const Pet = require("../api/models/pets.model");
const Service = require("../api/models/services.model");
const Booking = require("../api/models/bookings.model");
const Comment = require("../api/models/comments.model");
const Thread = require("../api/models/thread.model");
const UserBooking = require("../api/models/user_bookings.model");

const initializeRelationships = () => {
  try {
    console.log("Relationships added to models.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelationships;
