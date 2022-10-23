//Bu servislerle çalışmadan önce Axios'u kurmamız gerekiyor.
//headerdan board kısmında kullandığımız bilgilerii, kullanıcıların bilgilerini
//burada tutuyoruz

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000"; //burası boş dönüyor backend boş çünküenv kısmında port 8001 de çalıştıracağız

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

//Yetkili kaynak talep ederken authHeader() fonksiyonu yardımıyla bir HTTP başlığı ekliyoruz

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
