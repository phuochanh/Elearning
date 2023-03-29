import { SET_REGISTER_COURSE } from "../types/registerCourseType";
const DEFAULT_STATE = {
    nd: null,
  };
  export const registerCourseReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case SET_REGISTER_COURSE: {
        state.nd = payload;
        break;
      }
  
      default:
        break;
    }
    return { ...state };
  }