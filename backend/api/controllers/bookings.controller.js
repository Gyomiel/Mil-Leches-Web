const Booking = require("../models/bookings.model");
const UserBooking = require("../models/user_bookings.model");
const User = require("../models/users.model");

const getAllBookings = async (request, response) => {
  try {
    const bookings = await Booking.findAll({ paranoid: false });
    return response.status(200).json(bookings);
  } catch (error) {
    return response.status(501).send("No bookings found.");
  }
};

const getOneBooking = async (request, response) => {
  try {
    const booking = await Booking.findOne({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(booking);
  } catch (error) {
    return response.status(501).send("Booking not found.");
  }
};

const createBooking = async (request, response) => {
  try {
    const booking = await Booking.create(request.body);
    return response.status(200).json(booking);
  } catch (error) {
    return response.status(501).send(`Couldn't create booking.`);
  }
};

const updateBooking = async (request, response) => {
  try {
    const booking = await Booking.findByPk(request.params.id);
    await booking.update(request.body);
    await booking.save();
    return response.status(200).json(booking);
  } catch (error) {
    return response.status(501).send(`Couldn't update booking.`);
  }
};

const deleteBooking = async (request, response) => {
  try {
    await Booking.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .json(`The booking with ID ${request.params.id} has been deleted.`);
  } catch (error) {
    return response
      .status(501)
      .send(`The booking with ID ${request.params.id} couldn't be deleted.`);
  }
};

//Función para la tabla intermedia
const addUserToBooking = async (request, response) => {
  try {
    const booking = await Booking.create(request.body);

    if (!booking) {
      return response.status(404).json({ error: "Booking not found" });
    }

    const owner = await User.findOne({
      where: {
        id: request.params.ownerId,
      },
    });

    const petsitter = await User.findOne({
      where: {
        id: request.params.petsitterId,
      },
    });
    const userBooking = await UserBooking.create({
      ownerId: owner.id,
      petsitterId: petsitter.id,
      bookingId: booking.id,
    });

    return response.status(200).json(userBooking);
  } catch (error) {
    return response
      .status(500)
      .send(`Couldn't add user to booking. ${error.message}`);
  }
};

module.exports = {
  getAllBookings,
  getOneBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  addUserToBooking,
};
