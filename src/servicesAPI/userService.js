import axios from "../config/axios";
// get user manage
export const getAllUsers = () => {
  return axios.get(`/api/v1/users`);
};

export const createUser = (data) => {
  return axios.post(`/api/v1/create-user`, data);
};

export const updateUser = (data) => {
  return axios.put(`/api/v1/update-user`, data);
};

export const deleteUserService = (id) => {
  return axios.delete(`/api/v1/delete-user/${id}`);
};
