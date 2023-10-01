// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // If using async action creators
import rootReducer from "../reducer";

const store = createStore(rootReducer, applyMiddleware(thunk)); // Add thunk middleware if using async actions

export default store;
