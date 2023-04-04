import axios from "axios";
import { axiosRequest } from "../configs/axios.config";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
export const fetchCourseApi = () => {
  return axios({
    url: `${BASE_URL}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export const fetchCourseDetailApi = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export const fetchCourseCatalogApi = () => {
  return axios({
    url: `${BASE_URL}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
export const fetchRegisterCourseApi = () => {
  return axios({
    url: `${BASE_URL}/QuanLyKhoaHoc/DangKyKhoaHoc`,
    method: "POST",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};

export const deleteCourseApi = (maKhoaHoc) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
    method: "DELETE",
  });
};
export const addCourseApi = (data) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
    method: "POST",
    data: data,
  });
};
export const editCourseUploadApi = (data) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,
    method: "POST",
    data: data,
  });
};
export const editCourseApi = (data) => {
  return axiosRequest({
    url: `QuanLyKhoaHoc/CapNhatKhoaHoc`,
    method: "PUT",
    data: data,
  });
};
