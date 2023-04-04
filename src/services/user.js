import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import { axiosRequest } from "../configs/axios.config";
export const loginApi = (information) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: information,
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export const registerApi = (information) => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/DangDangKy`,
    method: "POST",
    data: information,
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export const fetchUserListApi = () => {
  return axios({
    url: `${BASE_URL}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export const registerAdminApi = (data) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/ThemNguoiDung`,
    method: "POST",
    data: data,
  });
};
