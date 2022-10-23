//redux da bir mağaza olduğu için veri işleme mantığını bölmek için birleştiriyoruz

import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  auth,
  message,
});
