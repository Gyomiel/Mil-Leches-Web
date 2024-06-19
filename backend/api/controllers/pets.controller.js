const Pet = require("../models/pets.model");

const getAllPets = async (request, response) => {
  try {
    const pets = await Pet.findAll({ paranoid: false });
    return response.status(200).json(pets);
  } catch (error) {
    return response.status(501).send("No pets found.");
  }
};

const getOnePet = async (request, response) => {
  try {
    const pet = await Pet.findOne({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(pet);
  } catch (error) {
    return response.status(501).send("Pet not found.");
  }
};

const createPet = async (request, response) => {
  try {
    const pet = await Pet.create(request.body);
    return response.status(200).json(pet);
  } catch (error) {
    return response.status(501).send(`Couldn't create pet.`);
  }
};

const updatePet = async (request, response) => {
  try {
    const pet = await Pet.findByPk(request.params.id);
    await pet.update(request.body);
    await pet.save();
    return response.status(200).json(pet);
  } catch (error) {
    return response.status(501).send(`Couldn't update pet.`);
  }
};

const deletePet = async (request, response) => {
  try {
    await Pet.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .json(`The pet with ID ${request.params.id} has been deleted.`);
  } catch (error) {
    return response
      .status(501)
      .send(`The pet with ID ${request.params.id} couldn't be deleted.`);
  }
};

module.exports = {
  getAllPets,
  getOnePet,
  createPet,
  updatePet,
  deletePet,
};
