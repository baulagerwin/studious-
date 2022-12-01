import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import func from "./middleware/func";
import api from "./middleware/api";

export default configureStore({
  reducer,
  middleware: [func, api],
});
