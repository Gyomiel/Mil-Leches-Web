const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { checkDB, connection } = require("./database/index");

const checkAndSyncMySQL = async () => {
  try {
    await checkDB();
  } catch (error) {
    throw error;
  }
};

const initializeAndListenExpress = () => {
  try {
    app
      .use(express.json())
      .use(cors())
      .use(morgan("dev"))
      .use('/api', require('./api/routes/index'))
      .listen(3000, () => {
        console.log("Listening from port 3000.");
      });
  } catch (error) {
    console.log(error);
  }
};

const startApi = async () => {
  try {
    await checkAndSyncMySQL();
    initializeAndListenExpress();
  } catch (error) {
    console.log(error);
  }
};

startApi();
