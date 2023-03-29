import { SET_REGISTER_COURSE } from "../types/registerCourseType";
export const setRegisterCourseAction = (data) => {
    return {
      type: SET_REGISTER_COURSE,
      payload: data,
    };
  };