import { SET_REGISTER_INFO } from "../types/registerType";
export const setRegisterInfoAction = (data) => {
    return {
      type: SET_REGISTER_INFO,
      payload: data,
    };
  };