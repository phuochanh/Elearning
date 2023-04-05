import React, { useEffect, useState } from "react";
import { Button } from "antd";
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

  // const [bstate, setBState] = useState({
  //   MaKhoaHoc: "LTC_GP01",
  // })

  const params = useParams();

  useEffect(() => {
    getCourseDetail();
    geta();
    // testb()
  }, []);

  const geta = async () => {
    const a = await fetchCourseInfoApi(params.id);
    // console.log(a)
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
    // console.log(result);
    setCourseState(result.data);
  };

  const getRegisterCourse = async (data) => {
    const respone = await fetchRegisterCourseApi(data);
    // console.log(respone);
    setRegisterState(respone.data);
    Swal.fire({
      title: "Đăng ký khóa học thành công!",
      text: "Hoàn tất!!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const getCancelRegister = async (data) => {
    const res = await fetchCancelRegisterApi(data);
    // console.log(res);
    setCancelState(res.data);
    Swal.fire({
      title: "Hủy khóa học thành công!",
      text: "Hoàn tất!!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // const testb = async (data) => {
  //   const b = await fetchtestApi (data);
  //   console.log(b);
  //   setBState(b.data);
  // }

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
