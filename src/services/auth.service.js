//Bu servislerle çalışmadan önce Axios'u kurmamız gerekiyor.
//Backend tarafı oturunca bu kısımda giriş ve çıkışlar olacak

import axios from "axios";

const API_URL = "http://localhost:3000/"; //burası boş dönüyor backend boş çünkü env kısmında port 8001 de çalıştıracağız

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
