const { Sequelize } = require("sequelize");
require("dotenv").config();

const connection = new Sequelize("Mil-Leches_DB", "borja", "reboot3101", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
});

const checkDB = async () => {
  try {
    await connection.authenticate();
    console.log("Successfully connected to database.");
  } catch (error) {
    console.log(error);
  }
};

const syncModels = async () => {
  try {
    await connection.sync({ alter: true });
    console.log("Models have been created.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  checkDB,
  connection,
  syncModels,
};
