import http from "../../services/httpService";
import { apiRequest, apiRequestFailed, apiRequestSuccess } from "../api";
import config from "../../../config.json";

const api = (store) => (next) => async (action) => {
  if (action.type !== apiRequest.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) store.dispatch({ type: onStart });
  next(action);

  try {
    const response = await http.request({
      baseURL: config.baseURL,
      url,
      method,
      data,
    });
    store.dispatch(apiRequestSuccess(response.data));

    if (onSuccess) store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch(apiRequestFailed(error));

    if (onError) store.dispatch({ type: onError, payload: error });
  }
};

export default api;
