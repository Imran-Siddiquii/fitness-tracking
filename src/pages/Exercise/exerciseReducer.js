import {
  GET_EXERCISES_REQUEST,
  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_FAILURE,
  ADD_EXERCISE_REQUEST,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  DELETE_EXERCISE_REQUEST,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE
} from "./actionTypes";

const initialState = {
  exercises: [],
  loading: false,
  error: null
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES_REQUEST:
    case ADD_EXERCISE_REQUEST:
    case DELETE_EXERCISE_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null
      };

    case ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        loading: false,
        error: null
      };

    case DELETE_EXERCISE_SUCCESS:
      const updatedExercises = state.exercises.filter(
        (exercise) => exercise._id !== action.payload
      );
      return {
        ...state,
        exercises: updatedExercises,
        loading: false,
        error: null
      };

    case GET_EXERCISES_FAILURE:
    case ADD_EXERCISE_FAILURE:
    case DELETE_EXERCISE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default exerciseReducer;
