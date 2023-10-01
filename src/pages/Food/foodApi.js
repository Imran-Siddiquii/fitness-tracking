import axios from "axios";

const FOOD_API_BASE_URL =
  "https://fitness-api.imransiddiqui2.repl.co/api/v1/foods";

export const fetchFood = async () => {
  try {
    const response = await axios.get(FOOD_API_BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addFood = async (foodData) => {
  try {
    const response = await axios.post(FOOD_API_BASE_URL, foodData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(`${FOOD_API_BASE_URL}/${foodId}`);
    return response.status;
  } catch (error) {
    throw error;
  }
};
