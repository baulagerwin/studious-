import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiRequest } from "./api";

const slice = createSlice({
  name: "subjects",
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    subjectsRequested: (subjects, action) => {
      subjects.isLoading = true;
    },
    subjectsRequestFailed: (subjects, action) => {
      subjects.isLoading = false;
    },
    subjectsReceived: (subjects, action) => {
      subjects.list = action.payload;
      subjects.isLoading = false;
      subjects.lastFetch = Date.now();
    },
    subjectsReset: (subjects, action) => {
      subjects.list = [];
      subjects.isLoading = false;
      subjects.lastFetch = null;
    },
  },
});

export const {
  subjectsRequested,
  subjectsRequestFailed,
  subjectsReceived,
  subjectsReset,
} = slice.actions;
export default slice.reducer;

const url = "/subjects";

export const loadSubjects = () => (getState, dispatch) => {
  const { lastFetch } = getState().entities.subjects;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 5) return;

  dispatch(
    apiRequest({
      url,
      onStart: subjectsRequested.type,
      onSuccess: subjectsReceived.type,
      onError: subjectsRequestFailed.type,
    })
  );
};
