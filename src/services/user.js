import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import { axiosRequest } from "../configs/axios.config";

export const loginApi = (information) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: information,
  });
};
export const registerApi = (information) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/DangKy`,
    method: "POST",
    data: information,
  });
};
export const userInfoApi = () => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/ThongTinTaiKhoan`,
    method: "POST",
  });
};
export const fetchUpdateUserInfoApi = (data) => {
  return axiosRequest({
    url: `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    method: "PUT",
    data: data,
  });
};
export const fetchUserListApi = () => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
    method: "GET",
  });
};
export const registerAdminApi = (data) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/ThemNguoiDung`,
    method: "POST",
    data: data,
  });
};