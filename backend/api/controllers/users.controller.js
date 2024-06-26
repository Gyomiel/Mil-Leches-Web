const Booking = require("../models/bookings.model");
const Pet = require("../models/pets.model");
const UserBooking = require("../models/user_bookings.model");
const User = require("../models/users.model");
const Services = require("../models/services.model");
const bcrypt = require("bcrypt");

const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll({ paranoid: false });
    return response.status(200).json(users);
  } catch (error) {
    return response.status(501).send("No users found.");
  }
};

const getOneUser = async (request, response) => {
  try {
    const user = await User.findOne({
      where: {
        id: request.params.id,
      },git config pull.rebase false
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send("User not found.");
  }
};

const createUser = async (request, response) => {
  try {
    const user = await User.create(request.body);
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(`Couldn't create user.`);
  }
};

const updateUser = async (request, response) => {
  try {
    console.log(response.locals.user);
    const user = await User.findByPk(request.params.id);
    await user.update(request.body);
    await user.save();
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(`Couldn't update user.`);
  }
};

const deleteUser = async (request, response) => {
  try {
    await User.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .json(`User ${request.params.id} has been deleted.`);
  } catch (error) {
    return response
      .status(501)
      .send(`User ${request.params.id} couldn't be deleted.`);
  }
};

const getProfile = async (request, response) => {
  try {
    if (response.locals.user.role === "petsitter") {
      const user = await User.findOne({
        where: {
          id: response.locals.user.id,
        },
      });
      return response.status(200).json(user);
    } else {
      const user = await User.findOne({
        where: {
          id: response.locals.user.id,
        },
        include: Pet,
      });
      return response.status(200).json(user);
    }
  } catch (error) {
    return response.status(501).send("User not found.");
  }
};

const updateProfile = async (request, response) => {
  try {
    console.log(response.locals.user.id);
    const user = await User.findOne({
      where: {
        id: response.locals.user.id,
      },
    });
    let obj = { ...request.body };
    for (const key in obj) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    }
    if (obj.password) {
      const salt = bcrypt.genSaltSync(parseInt("10"));
      obj.password = bcrypt.hashSync(obj.password, salt);
    }
    await user.update(obj);
    await user.save();
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send(`Couldn't update user.`);
  }

};

const getUserBookings = async (request, response) => {
  try {
    let bookings 
    if (response.locals.user.role === "petsitter") {
        bookings = await UserBooking.findAll({
        where: {
          petsitterId : response.locals.user.id,
        },
        include: Booking,
      });
      
    } else if (response.locals.user.role === "owner") {
      bookings = await UserBooking.findAll({
        where: {
          ownerId: response.locals.user.id,
        },
        include: Booking,
      });
      }
    return response.status(200).json(bookings);
  } catch (error) {
    console.log(error.message)
    return response.status(501).send("error getting this user's bookings");
  }
};


const getPetsitterServidces = async (request, response) => {
  try {
    const user = await User.findOne({
      where: {
        id: response.locals.user.id,
      },
      include: Services,
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send("No users or services found.");
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile,
  getUserBookings,
  getPetsitterServidces,

};
