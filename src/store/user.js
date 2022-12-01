import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    details: {},
  },
  reducers: {
    userDetails: (user, action) => {
      user.details = action.payload;
    },
    userReset: (user, action) => {
      user.details = {};
    },
  },
});

export const { userDetails, userReset } = slice.actions;
export default slice.reducer;
