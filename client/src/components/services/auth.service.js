import axios from "axios";

const baseURL = "https://technocashierautomatedproduct.herokuapp.com/api";

// register request
const register = (newUser) => {
  // POST request on /api/register
  return axios
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login request
const login = (userCredential) => {
  return axios
    .post(`${baseURL}/login`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("x-access-token", response.data.token);
      }
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

// logout service
const logout = () => {
  localStorage.removeItem("x-access-token");
  return { msg: "Logout Successfully...!" };
};

export { register, login, logout };
