import {
  ADD_FOOD_FAILURE,
  ADD_FOOD_REQUEST,
  ADD_FOOD_SUCCESS,
  DELETE_FOOD_FAILURE,
  DELETE_FOOD_REQUEST,
  DELETE_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS
} from "./actionTypes";
import * as foodApi from "./foodApi"; // Import food API functions

// Fetch food items action creators
export const fetchFoodRequest = () => ({ type: FETCH_FOOD_REQUEST });
export const fetchFoodSuccess = (foodItems) => ({
  type: FETCH_FOOD_SUCCESS,
  payload: foodItems
});
export const fetchFoodFailure = (error) => ({
  type: FETCH_FOOD_FAILURE,
  payload: error
});

export const fetchFood = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchFoodRequest());
      const foodItems = await foodApi.fetchFood();
      dispatch(fetchFoodSuccess(foodItems.data));
    } catch (error) {
      dispatch(fetchFoodFailure(error));
    }
  };
};

// Add food item action creators
export const addFoodRequest = () => ({ type: ADD_FOOD_REQUEST });
export const addFoodSuccess = (newFoodItem) => ({
  type: ADD_FOOD_SUCCESS,
  payload: newFoodItem
});
export const addFoodFailure = (error) => ({
  type: ADD_FOOD_FAILURE,
  payload: error
});

export const addFood = (foodData) => {
  return async (dispatch) => {
    try {
      dispatch(addFoodRequest());
      const newFoodItem = await foodApi.addFood(foodData);
      dispatch(addFoodSuccess(newFoodItem.data));
    } catch (error) {
      dispatch(addFoodFailure(error));
    }
  };
};

// Delete food item action creators
export const deleteFoodRequest = () => ({ type: DELETE_FOOD_REQUEST });
export const deleteFoodSuccess = (foodId) => ({
  type: DELETE_FOOD_SUCCESS,
  payload: foodId
});
export const deleteFoodFailure = (error) => ({
  type: DELETE_FOOD_FAILURE,
  payload: error
});

export const deleteFood = (foodId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteFoodRequest());
      const deletedItem = await foodApi.deleteFood(foodId);
      if (deletedItem === 204) {
        dispatch(deleteFoodSuccess(foodId));
      }
    } catch (error) {
      dispatch(deleteFoodFailure(error));
    }
  };
};
