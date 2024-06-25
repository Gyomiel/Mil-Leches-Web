import api from "./config";

const signUp = async (body) => {
  try {
    const { data } = await api.post("auth/signup", body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const logIn = async (body) => {
  try {
    const { data } = await api.post("auth/login", body);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export { signUp, logIn };
