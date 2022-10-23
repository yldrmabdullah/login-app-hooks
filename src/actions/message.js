//Bu Redux eylem yaratıcısı apilerden gelen bildirimler ile ilgili

import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
