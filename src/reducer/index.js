import { combineReducers } from "redux";
import exerciseReducer from "../pages/Exercise/exerciseReducer";
import foodReducer from "../pages/Food/foodReducer";
import goalReducer from "../pages/Goal/goalReducer";
const rootReducer = combineReducers({
  exercise: exerciseReducer,
  food: foodReducer,
  goal: goalReducer
});

export default rootReducer;
