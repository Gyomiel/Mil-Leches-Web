const { Sequelize } = require("sequelize");
const connection = new Sequelize("Mil-Leches_DB", "reboot", "reboot", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
});

const checkDB = async () => {
  try {
    await connection.authenticate();
    console.log("Connected successfully to database.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    checkDB,
    connection
}