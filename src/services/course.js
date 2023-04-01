import axios from "axios"
import { BASE_URL, MA_NHOM, TOKEN_CYBERSOFT } from "../constants"
import { axiosRequest } from "../configs/axios.config";

export const fetchCourseApi = () => {
return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
    method: "GET",
})
};
export const fetchCourseDetailApi = (id) => {
    return axiosRequest( {
        url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
        method: "GET",
    })
};
export const fetchCourseCatalogApi = () => {
    return axiosRequest ({
        url: `/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
        method: "GET",
    })
};
export const fetchRegisterCourseApi = () => {
    return axiosRequest ({
        url: `/QuanLyKhoaHoc/DangKyKhoaHoc`,
        method: "POST",
    })
};

export const fetchCourseByCatagogyApi =() => {
return axiosRequest ({
    url: `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=TuDuy&MaNhom=${MA_NHOM}`,
    method: "GET",
})
}