import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    details: {},
  },
  reducers: {
    userDetails: (user, action) => {
      user.details = action.payload.details;
    },
  },
});

export const { userDetails } = slice.actions;
export default slice.reducer;
