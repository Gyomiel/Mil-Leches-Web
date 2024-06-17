const User = require("../models/users.model");

const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    return response.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers };
