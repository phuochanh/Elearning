import axios from "axios"
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants"
export const fetchCourseApi = () => {
return axios({
    url: `${BASE_URL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
    method: "GET",
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
    }
})
}
export const fetchCourseDetailApi = (id) => {
    return axios( {
        url: `${BASE_URL}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
        method: "GET",
        headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
        }
    })
}