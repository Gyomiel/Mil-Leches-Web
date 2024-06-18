jaj

const addUserToBooking = async (request, response) => {
  try {
    const bookingId = request.params.id;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return response.status(404).json({ error: "Booking not found" });
    }

    const user = await User.findOne({
      where: {
        id: request.params.userId,
      },
    });
    await booking.addUser(user);
    return response.status(200).json(booking);
  } catch (error) {
    return response.status(500).send(`Couldn't add user to booking.`);
  }
};