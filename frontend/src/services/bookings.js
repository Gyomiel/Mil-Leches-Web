import api from "./config";

const getAllBokings = async () => {
  try {
    const token = localStorage.getItem("token");

    const {data} = await api.get("booking", {
      headers: { authorization: token },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


export { getAllBokings };
