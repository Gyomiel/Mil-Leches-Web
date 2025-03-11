import api from "./config";

const getPetProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get("pets/profile", {
      headers: { authorization: token },
    });

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const createPet = async (body) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post("pets", body, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const updatePetProfile = async (body) => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.post("pets/profile", body, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { getPetProfile, updatePetProfile, createPet };
