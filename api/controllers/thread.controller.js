const Thread = require("../models/thread.model");

const getAllThreads = async (request, response) => {
  try {
    const threads = await Thread.findAll({ paranoid: false });
    return response.status(200).json(threads);
  } catch (error) {
    return response.status(501).send("No threads found.");
  }
};

const getOneThread = async (request, response) => {
  try {
    const thread = await Thread.findOne({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(thread);
  } catch (error) {
    return response.status(501).send("Thread not found.");
  }
};

const createThread = async (request, response) => {
  try {
    const thread = await Thread.create(request.body);
    return response.status(200).json(thread);
  } catch (error) {
    return response.status(501).send(`Couldn't create thread.`);
  }
};

const updateThread = async (request, response) => {
  try {
    const thread = await Thread.findByPk(request.params.id);
    await thread.update(request.body);
    await thread.save();
    return response.status(200).json(thread);
  } catch (error) {
    return response.status(501).send(`Couldn't update thread.`);
  }
};

const deleteThread = async (request, response) => {
  try {
    await Thread.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .json(`The thread with ID ${request.params.id} has been deleted.`);
  } catch (error) {
    return response
      .status(501)
      .send(`The thread with ID ${request.params.id} couldn't be deleted.`);
  }
};

module.exports = {
  getAllThreads,
  getOneThread,
  createThread,
  updateThread,
  deleteThread,
};
