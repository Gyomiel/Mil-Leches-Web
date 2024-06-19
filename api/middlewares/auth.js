const User = require("../models/users.model");
const jwt = require("jsonwebtoken");

const checkAuth = (request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(401).send("Token not found.");
  }

  jwt.verify(
    request.headers.authorization,
    process.env.SECRET,
    async (error, payload) => {
      if (error) {
        console.log(error.message);
        return response.status(401).send("Token is not valid.");
      }
      const user = await User.findOne({
        where: {
          email: payload.email,
        },
      });
      if (!user) {
        return response.status(401).send("Token is not valid.");
      }
      response.locals.user = user;
      next();
    }
  );
};

module.exports = { checkAuth };
