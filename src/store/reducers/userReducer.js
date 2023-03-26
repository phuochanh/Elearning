import { SET_USER_INFO } from "../types/userType";

const DEFAULT_STATE = {
    userInfo : null,
};
export const userReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_USER_INFO:{
            state.userInfo = payload;
            break;
        }
    
        default:
            break;
    }
    return {...state};
}