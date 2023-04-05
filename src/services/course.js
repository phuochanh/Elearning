import axios from "axios";
import { axiosRequest } from "../configs/axios.config";
import { MA_NHOM } from "../constants";

export const fetchCourseApi = () => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
    method: "GET",
  });
};
export const fetchCourseDetailApi = (id) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    method: "GET",
  });
};
export const fetchCourseCatalogApi = () => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
    method: "GET",
  });
};
export const fetchRegisterCourseApi = (data) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/DangKyKhoaHoc`,
    method: "POST",
    data: data,
  });
};

export const fetchCancelRegisterApi = (data) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/HuyGhiDanh`,
    method: "POST",
    data: data,
  });
};

export const fetchCourseByCatagogyApi = (id) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=${MA_NHOM}`,
    method: "GET",
  });
};

export const fetchCourseInfoApi = (id) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${id}`,
    method: "GET",
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

export const searchCourseAdminApi = (key) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${key}&MaNhom=${MA_NHOM}`,
    method: "GET",
  });
};
export const fetchRegisterCourseAdminApi = (data) => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
    method: "POST",
    data: data,
  });
};
