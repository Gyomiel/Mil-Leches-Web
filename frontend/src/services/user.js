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
console.log(body)
    const response = await api.post("user/profile", body, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const addService = async (body) => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.post("user/user/service", body, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { getProfile, updateProfile, addService };
