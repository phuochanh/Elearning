import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { useParams } from "react-router-dom";
import {
  fetchCancelRegisterApi,
  fetchCourseDetailApi,
  fetchCourseInfoApi,
  fetchRegisterCourseApi,
  fetchtestApi,
} from "../../../services/course";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function DetailRegister() {
  const [courseState, setCourseState] = useState({});
  const [auseState, setState] = useState({});
  const userState = useSelector((state) => state.userReducer);

  const [registerState, setRegisterState] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });
  const [cancelState, setCancelState] = useState({
    maKhoaHoc: "",
    taiKhoan: "",
  });

  const params = useParams();

  useEffect(() => {
    getCourseDetail();
    geta();
  }, []);

  const geta = async () => {
    const a = await fetchCourseInfoApi(params.id);
    setState(a.data);

    if (
      a.data.lstHocVien.some(
        (item) => item.taiKhoan == userState.userInfo.taiKhoan
      )
    ) {
      console.log("1");
    }
  };

  const getCourseDetail = async () => {
    const result = await fetchCourseDetailApi(params.id);
    setCourseState(result.data);
  };

  const getRegisterCourse = async (data) => {
    try {
      await fetchRegisterCourseApi(data);
      Swal.fire({
        title: "Đăng ký khóa học thành công!",
        text: "Hoàn tất!!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      notification.error({
        message: error.response.data,
      });
    }
  };

  const getCancelRegister = async (data) => {
    try {
      await fetchCancelRegisterApi(data);
      Swal.fire({
        title: "Hủy khóa học thành công!",
        text: "Hoàn tất!!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      notification.error({
        message: error.response.data,
      });
    }
  };

  return (
    <div className="col-lg-4 col-md-5 left">
      <div className="image text-center">
        <img className="pt-4" src={courseState.hinhAnh} alt="" />
        <p>
          <strong className="price text-center ">500.000đ</strong>
        </p>
      </div>
      <div className="leftInfo">
        <div className="d-flex">
          {}
          <button
            onClick={() => getRegisterCourse(registerState)}
            className="text-center ml-5 btn btn-success"
          >
            ĐĂNG KÝ
          </button>
          <button
            onClick={() => getCancelRegister(cancelState)}
            className="text-center ml-5 btn btn-danger"
          >
            HỦY
          </button>
        </div>
        <div className="row leftInfoItem mt-4">
          <ul>
            <li>
              <p>
                Ghi danh:
                <span>{courseState.soLuongHocVien}</span>
              </p>
            </li>
            <li>
              <p>
                Thời gian:
                <span>18 giờ</span>
              </p>
            </li>
            <li>
              <p>
                Bài học:
                <span>10</span>
              </p>
            </li>
            <li>
              <p>
                Video:
                <span>14</span>
              </p>
            </li>
            <li>
              <p>
                Trình độ:
                <span>Người mới bắt đầu</span>
              </p>
            </li>
          </ul>
          <hr className="mr-5" style={{ width: "95%", alignItems: "center" }} />
          <form action="">
            <input type="text" placeholder="Nhập mã" />
          </form>
        </div>
      </div>
    </div>
  );
}
