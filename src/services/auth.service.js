import axios from "axios";

const API_URL = "https://api.kassandah.gigmobility.com";

const register = (firstName, lastName, email, password, department) => {
  return axios.post(API_URL + "/api/user", {
    firstName,
    lastName,
    email,
    password,
    department,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/api/user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        //localStorage.setItem("user", JSON.stringify(response.data.data));
        const res = response.data.data;
        setToken(res);
        setUser(res);
      }

      return response.data.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};

const setToken = (data) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("refreshToken", data.refreshToken);
};

const setUser = (data) => {
  const userObject = {
    ...data.details,
    roles: data.roles,
  };
  localStorage.setItem("user", JSON.stringify(userObject));
};