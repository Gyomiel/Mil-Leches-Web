import api from "./config";

const signUp = async (body) => {
  try {
    const response = await api.post("auth/signup", body);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const logIn = async (body) => {
  try {
    const response = await api.post("auth/login", body);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { signUp, logIn };
