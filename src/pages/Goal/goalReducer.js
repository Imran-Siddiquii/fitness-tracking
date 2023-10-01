import {
  ADD_GOAL_FAILURE,
  ADD_GOAL_REQUEST,
  DELETE_GOAL_FAILURE,
  DELETE_GOAL_REQUEST,
  FETCH_GOAL_REQUEST,
  FETCH_GOAL_SUCCESS,
  FETCH_GOAL_FAILURE,
  ADD_GOAL_SUCCESS,
  DELETE_GOAL_SUCCESS
} from "./actionTypes";

const initialState = {
  goalItems: [],
  loading: false,
  error: null
};

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOAL_REQUEST:
    case ADD_GOAL_REQUEST:
    case DELETE_GOAL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_GOAL_SUCCESS:
      return {
        ...state,
        goalItems: action.payload,
        loading: false,
        error: null
      };

    case ADD_GOAL_SUCCESS:
      return {
        ...state,
        goalItems: [...state.goalItems, action.payload],
        loading: false,
        error: null
      };

    case DELETE_GOAL_SUCCESS:
      const updatedExercises = state.goalItems.filter(
        (goal) => goal._id !== action.payload
      );
      return {
        ...state,
        goalItems: updatedExercises,
        loading: false,
        error: null
      };

    case FETCH_GOAL_FAILURE:
    case ADD_GOAL_FAILURE:
    case DELETE_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        goalItems: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default goalReducer;
