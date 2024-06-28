import api from "./config";

const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get("user/profile", {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const updateProfile = async (body) => {
  try {
    const token = localStorage.getItem("token");
    console.log(body);
    const response = await api.post("user/profile", body, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const getPetsitterServices = async (services) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("user/profile/services", {
      headers: { authorization: token },
      params: {
        services: services,
      },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const addPetsitterServices = async (body) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post("user/profile/services", body, {
      headers: { authorization: token },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const uploadImage = async (file) => {
  try {
     const formData = new FormData();
     formData.append("file", file);
    const token = localStorage.getItem("token");
    const response = await api.post("user/profile/image", formData, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getProfile,
  updateProfile,
  getPetsitterServices,
  addPetsitterServices,
  uploadImage,
};
