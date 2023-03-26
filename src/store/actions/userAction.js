import { SET_USER_INFO } from "../types/userType"

const setUserInfo = (data) => {
    return{
        type: SET_USER_INFO,
        payload: data,
    }
}