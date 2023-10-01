import {
  getExercisesAPI,
  addExerciseAPI,
  deleteExerciseAPI
} from "./exerciseApi";
import {
  ADD_EXERCISE_FAILURE,
  ADD_EXERCISE_REQUEST,
  ADD_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  GET_EXERCISES_FAILURE,
  GET_EXERCISES_REQUEST,
  GET_EXERCISES_SUCCESS
} from "./actionTypes";

// Get exercises action creators
export const getExercisesRequest = () => ({ type: GET_EXERCISES_REQUEST });
export const getExercisesSuccess = (exercises) => ({
  type: GET_EXERCISES_SUCCESS,
  payload: exercises
});
export const getExercisesFailure = (error) => ({
  type: GET_EXERCISES_FAILURE,
  payload: error
});

export const getExercises = () => {
  return async (dispatch) => {
    try {
      dispatch(getExercisesRequest());
      const exercises = await getExercisesAPI();
      dispatch(getExercisesSuccess(exercises.data));
    } catch (error) {
      dispatch(getExercisesFailure(error));
    }
  };
};

// Add exercise action creators
export const addExerciseRequest = () => ({ type: ADD_EXERCISE_REQUEST });
export const addExerciseSuccess = (exercise) => ({
  type: ADD_EXERCISE_SUCCESS,
  payload: exercise
});
export const addExerciseFailure = (error) => ({
  type: ADD_EXERCISE_FAILURE,
  payload: error
});

export const addExercise = (exerciseData) => {
  return async (dispatch) => {
    try {
      dispatch(addExerciseRequest());
      const addedExercise = await addExerciseAPI(exerciseData);
      console.log(addedExercise.data, "add data");
      dispatch(addExerciseSuccess(addedExercise.data));
    } catch (error) {
      dispatch(addExerciseFailure(error));
    }
  };
};

// Delete exercise action creators
export const deleteExerciseRequest = () => ({ type: DELETE_EXERCISE_REQUEST });
export const deleteExerciseSuccess = (exerciseId) => ({
  type: DELETE_EXERCISE_SUCCESS,
  payload: exerciseId
});
export const deleteExerciseFailure = (error) => ({
  type: DELETE_EXERCISE_FAILURE,
  payload: error
});

export const deleteExercise = (exerciseId) => {
  return async (dispatch) => {
    try {
      dispatch(deleteExerciseRequest());
      const deletedExercise = await deleteExerciseAPI(exerciseId);
      if (deletedExercise === 204) {
        dispatch(deleteExerciseSuccess(exerciseId));
      }
    } catch (error) {
      dispatch(deleteExerciseFailure(error));
    }
  };
};
