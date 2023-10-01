import {
  ADD_GOAL_FAILURE,
  ADD_GOAL_REQUEST,
  ADD_GOAL_SUCCESS,
  DELETE_GOAL_FAILURE,
  DELETE_GOAL_REQUEST,
  DELETE_GOAL_SUCCESS,
  FETCH_GOAL_FAILURE,
  FETCH_GOAL_REQUEST,
  FETCH_GOAL_SUCCESS
} from "./actionTypes";
import * as goalApi from "./goalApi";

export const fetchGoalRequest = () => ({ type: FETCH_GOAL_REQUEST });
export const fetchGoalSuccess = (goalItems) => ({
  type: FETCH_GOAL_SUCCESS,
  payload: goalItems
});
export const fetchGoalFailure = (error) => ({
  type: FETCH_GOAL_FAILURE,
  payload: error
});

export const fetchGoal = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchGoalRequest());
      const goalItems = await goalApi.fetchGoal();
      dispatch(fetchGoalSuccess(goalItems.data));
    } catch (error) {
      dispatch(fetchGoalFailure(error));
    }
  };
};

export const addGoalRequest = () => ({ type: ADD_GOAL_REQUEST });
export const addGoalSuccess = (newGoalItem) => ({
  type: ADD_GOAL_SUCCESS,
  payload: newGoalItem
});
export const addGoalFailure = (error) => ({
  type: ADD_GOAL_FAILURE,
  payload: error
});

export const addGoal = (goalData) => {
  return async (dispatch) => {
    try {
      dispatch(addGoalRequest());
      const newGoalItem = await goalApi.addGoal(goalData);
      dispatch(addGoalSuccess(newGoalItem.data));
    } catch (error) {
      dispatch(addGoalFailure(error));
    }
  };
};

export const deleteGoalRequest = () => ({ type: DELETE_GOAL_REQUEST });
export const deleteGoalSuccess = (goalId) => ({
  type: DELETE_GOAL_SUCCESS,
  payload: goalId
});
export const deleteGoalFailure = (error) => ({
  type: DELETE_GOAL_FAILURE,
  payload: error
});

export const deleteGoal = (goalId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteGoalRequest());
      const deletedGoal = await goalApi.deleteGoal(goalId);
      if (deletedGoal === 204) {
        dispatch(deleteGoalSuccess(goalId));
      }
    } catch (error) {
      dispatch(deleteGoalFailure(error));
    }
  };
};
