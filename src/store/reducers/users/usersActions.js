import axiosInstance from "../../../config/axios-config";
import {
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USERS_LOADING,
  SET_CURRENT_USER,
} from "./usersActionTypes";

const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
});

const getUsersError = () => ({
  type: GET_USERS_ERROR,
});

const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersLoading());
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/users",
      });
      dispatch(getUsersSuccess(response.data));
    } catch (e) {
      console.log(e);
      dispatch(getUsersError());
    }
  };
};
