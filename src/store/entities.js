import { combineReducers } from "@reduxjs/toolkit";
import qnasReducer from "./qnas";
import subjectsReducer from "./subjects";

export default combineReducers({
  qnas: qnasReducer,
  subjects: subjectsReducer,
});
