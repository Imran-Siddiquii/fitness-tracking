import axios from "axios";

const API_URL = "https://fitness-api.imransiddiqui2.repl.co/api/v1/exercises";

export const getExercisesAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addExerciseAPI = async (exerciseData) => {
  try {
    const response = await axios.post(`${API_URL}`, exerciseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteExerciseAPI = async (exerciseId) => {
  try {
    const response = await axios.delete(`${API_URL}/${exerciseId}`);
    return response.status;
  } catch (error) {
    throw error;
  }
};
