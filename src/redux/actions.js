import * as types from "./actionType";
import * as servicesAPI from "../servicesAPI/userService";

export const get_users = (data) => ({
  type: types.GET_USERS,
  payload: data,
});

export const getUsers = () => {
  return async (dispatch) => {
    let res = await servicesAPI.getAllUsers();
    dispatch(get_users(res.data));
  };
};

export const add_user = () => ({
  type: types.ADD_USER,
});

export const addUser = (user) => {
  return async (dispatch) => {
    let res = await servicesAPI.createUser(user);
    console.log("check create action user:", res);
    dispatch(add_user());
    dispatch(getUsers());
  };
};

export const edit_user = () => ({
  type: types.EDIT_USER,
});

export const editUser = (user) => {
  return async (dispatch) => {
    let res = await servicesAPI.updateUser(user);
    console.log("check api update user", res);
    dispatch(edit_user());
    dispatch(getUsers());
  };
};

export const delete_user = () => ({
  type: types.DELETE_USER,
});

export const deleteUser = (id) => {
  return async (dispatch) => {
    let res = await servicesAPI.deleteUserService(id);
    console.log("check api delete user: ", res);
    dispatch(delete_user());
    dispatch(getUsers());
  };
};
