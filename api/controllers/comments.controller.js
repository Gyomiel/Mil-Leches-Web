const Comment = require("../models/comments.model");

const getAllComments = async (request, response) => {
  try {
    const comments = await Comment.findAll({ paranoid: false });
    return response.status(200).json(comments);
  } catch (error) {
    return response.status(501).send("No comments found.");
  }
};

const getOneComment = async (request, response) => {
  try {
    const comment = await Comment.findOne({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(comment);
  } catch (error) {
    return response.status(501).send("Comment not found.");
  }
};

const createComment = async (request, response) => {
  try {
    const comment = await Comment.create(request.body);
    return response.status(200).json(comment);
  } catch (error) {
    return response.status(501).send(`Couldn't create comment.`);
  }
};

const updateComment = async (request, response) => {
  try {
    const comment = await Comment.update(request.body, {
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(comment);
  } catch (error) {
    return response.status(501).send("Booking updated.");
  }
};

const deleteComment = async (request, response) => {
  try {
    await Comment.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .json(`This comment has been deleted.`);
  } catch (error) {
    return response
      .status(501)
      .send(`This comment couldn't be deleted.`);
  }
};

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
};
