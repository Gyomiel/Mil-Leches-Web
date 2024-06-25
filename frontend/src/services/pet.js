import api from "./config";

const getPetProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get("pet/profile", {
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
    console.log(body);
    const response = await api.post("pet/profile", body, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { getPetProfile, updatePetProfile };
