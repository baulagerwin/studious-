import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
  user: userReducer,
});
