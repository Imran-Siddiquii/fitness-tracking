import axios from "axios";

const GOAL_API_BASE_URL =
  "https://fitness-api.imransiddiqui2.repl.co/api/v1/goals";

export const fetchGoal = async () => {
  try {
    const response = await axios.get(`${GOAL_API_BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addGoal = async (goalData) => {
  try {
    const response = await axios.post(`${GOAL_API_BASE_URL}`, goalData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await axios.delete(`${GOAL_API_BASE_URL}/${goalId}`);
    return response.status;
  } catch (error) {
    throw error;
  }
};
