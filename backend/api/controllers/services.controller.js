const Service = require("../models/services.model");

const getAllServices = async (request, response) => {
  try {
    const services = await Service.findAll({ paranoid: false });
    return response.status(200).json(services);
  } catch (error) {
    return response.status(501).send("No services found.");
  }
};

const getOneService = async (request, response) => {
  try {
    const service = await Service.findOne({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(service);
  } catch (error) {
    return response.status(501).send("Service not found.");
  }
};

const createService = async (request, response) => {
  try {
    const service = await Service.create(request.body);
    return response.status(200).json(service);
  } catch (error) {
    return response.status(501).send(`Couldn't create service.`);
  }
};

const updateService = async (request, response) => {
  try {
    const service = await Service.findByPk(request.params.id);
    await service.update(request.body);
    await service.save();
    return response.status(200).json(service);
  } catch (error) {
    return response.status(501).send(`Couldn't update service.`);
  }
};

const deleteService = async (request, response) => {
  try {
    await Service.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .json(`The service with ID ${request.params.id} has been deleted.`);
  } catch (error) {
    return response
      .status(501)
      .send(`The service with ID ${request.params.id} couldn't be deleted.`);
  }
};

module.exports = {
  getAllServices,
  getOneService,
  createService,
  updateService,
  deleteService,
};
