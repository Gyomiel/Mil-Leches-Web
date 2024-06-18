const Booking = require("../models/bookings.model");

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
    const booking = await Booking.update(request.body, {
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(booking);
  } catch (error) {
    return response.status(501).send("Booking updated.");
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

module.exports = {
  getAllBookings,
  getOneBooking,
  createBooking,
  updateBooking,
  deleteBooking,
};
