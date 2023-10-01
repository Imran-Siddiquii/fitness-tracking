import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
  ADD_FOOD_SUCCESS,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_FAILURE,
  ADD_FOOD_FAILURE,
  ADD_FOOD_REQUEST,
  DELETE_FOOD_REQUEST
} from "./actionTypes";

const initialState = {
  foodItems: [],
  loading: false,
  error: null
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_REQUEST:
    case ADD_FOOD_REQUEST:
    case DELETE_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_FOOD_SUCCESS:
      return {
        ...state,
        foodItems: action.payload,
        loading: false,
        error: null
      };

    case ADD_FOOD_SUCCESS:
      return {
        ...state,
        foodItems: [...state.foodItems, action.payload],
        loading: false,
        error: null
      };

    case DELETE_FOOD_SUCCESS:
      const updatedExercises = state.foodItems.filter(
        (food) => food._id !== action.payload
      );
      return {
        ...state,
        foodItems: updatedExercises,
        loading: false,
        error: null
      };

    case FETCH_FOOD_FAILURE:
    case ADD_FOOD_FAILURE:
    case DELETE_FOOD_FAILURE:
      return {
        ...state,
        loading: false,
        foodItems: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default foodReducer;
