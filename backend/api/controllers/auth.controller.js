const User = require("../models/users.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async (request, response) => {
  try {
    const existingUser = await User.findOne({
      where: {
        email: request.body.email,
      },
    });
    if (existingUser) {
      return response
        .status(409)
        .json({ message: "This user already exists." });
    }
    const salt = bcrypt.genSaltSync(parseInt("10"));
    request.body.password = bcrypt.hashSync(request.body.password, salt);
    const user = await User.create(request.body);
    const payload = { email: request.body.email };
    const token = jwt.sign(payload, "didiBorjaMarta", { expiresIn: "1h" });
    return response.status(200).json({ token });
  } catch (error) {
    console.log(`An error has occurred.`);
    return response.status(500).json(error);
  }
};

const login = async (request, response) => {
  try {
    const user = await User.findOne({
      where: {
        email: request.body.email,
      },
    });

    if (!user) {
      return response.status(401).send("Incorrect email or password.");
    }
    const checkPass = bcrypt.compareSync(request.body.password, user.password);

    if (checkPass) {
      const payload = { email: request.body.email };
      const token = jwt.sign(payload, "didiBorjaMarta", { expiresIn: "1h" });
      return response.status(200).json({ token });
    } else {
      return response.status(401).send("Incorrect email or password.");
    }
  } catch (error) {
    console.log("An error occurred. Please, try again.");
    return response.status(500).json(error);
  }
};

module.exports = { signUp, login };
