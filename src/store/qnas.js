import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiRequest } from "./api";

const slice = createSlice({
  name: "qnas",
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    qnasRequested: (qnas, action) => {
      qnas.isLoading = true;
    },
    qnasRequestFailed: (qnas, action) => {
      qnas.isLoading = false;
    },
    qnasReceived: (qnas, action) => {
      qnas.list = action.payload;
      qnas.isLoading = false;
      qnas.lastFetch = Date.now();
    },
    qnasReset: (qnas, action) => {
      qnas.list = [];
      qnas.isLoading = false;
      qnas.lastFetch = null;
    },
  },
});

export const { qnasRequested, qnasRequestFailed, qnasReceived, qnasReset } =
  slice.actions;
export default slice.reducer;

const url = "/qnas";

export const loadQnas = () => (getState, dispatch) => {
  const { lastFetch } = getState().entities.qnas;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 5) return;

  dispatch(
    apiRequest({
      url,
      onStart: qnasRequested.type,
      onSuccess: qnasReceived.type,
      onError: qnasRequestFailed.type,
    })
  );
};
