import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { fetchCourseDetailApi, fetchRegisterCourseApi } from "../../../services/course";
import "./style.scss";

export default function DetailRegister() {
  const [courseState, setCourseState] = useState({});
  const [registerState, setRegisterState] = useState({});

  const params = useParams();

  useEffect(() => {
    getCourseDetail();
  }, []);

  const getCourseDetail = async () => {
    const result = await fetchCourseDetailApi(params.id);
    // console.log(result);
    setCourseState(result.data);
  };

  // const getRegisterCourse = async () => {
  //   const respone = await fetchRegisterCourseApi();
  //   setRegisterState (respone.data);
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
        <Button className="text-center ml-5">ĐĂNG KÝ</Button>
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
            <input type="text" placeholder="Nhập mã"/>
          </form>
        </div>
      </div>
    </div>
  );
}
