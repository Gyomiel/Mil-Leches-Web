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
      },
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
    const user = await User.findOne({
      where: {
        id: response.locals.user.id,
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(501).send("User not found.");
  }
};

const updateProfile = async (request, response) => {
  try {
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

const addServiceToUser = async (request, response) => {
  try {
    const user = await User.findOne({
      where: {
        id: response.locals.user.id,
      },
    });
    const data = {
      atHome: request.body.atHome ? true : false,
      visits: request.body.visits ? true : false,
      hairdresser: request.body.hairdresser ? 1 : 0,
      walking: request.body.walking ? 1 : 0,
    };
    const service = await Services.findOne({
      where: {
        atHome: (request.body.atHome),
        visits: (request.body.visits),
      },
    });
    console.log(service);

    await user.addService(service);
    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return response.status(501).send(`Couldn't update user.`);
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
  addServiceToUser,
};
