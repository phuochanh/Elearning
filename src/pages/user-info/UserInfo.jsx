import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoApi } from "../../services/user";
import UserInfoBot from "./components/UserInfoBot";
import "./styleUserInfo.scss";

export default function UserInfo() {
  const navigate = useNavigate();
  const [stateInfo, setStateInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const result = await userInfoApi();
    // console.log(result);
    setStateInfo(result.data);
  };

  return (
    <div className="infoPage">
      <div className="title pl-5">
        <h4>THÔNG TIN CÁ NHÂN</h4>
        <p>THÔNG TIN HỌC VIÊN</p>
      </div>
      <div className="infoPageContent">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="infoLeft p-5">
              <img src="./img/avatar.png" alt="" />
              <h6 className="pt-4">{stateInfo.hoTen}</h6>
              <p>Lập trình viên Front-end</p>
              <button className="btn btn-success">Hồ sơ cá nhân</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="infoRight">
              <div className="tab mt-5">
                <button className="tabLink btn btn-info active">
                  Thông tin cá nhân
                </button>
                <button className="tabLink btn btn-info ml-2">Khóa học</button>
                <button onClick={() => navigate("/admin")} className="tabLink btn btn-danger ml-2">admin</button>
              </div>
              <div className="tabContent active">
                <section className="userInfo">
                  <div className="userInfoTop">
                    <div className="row mt-5">
                      <div className="col-md-7">
                        <div>
                          <p>
                            Email:
                            <span className="ml-2">{stateInfo.email}</span>
                          </p>
                          <p>
                            Họ và tên:
                            <span className="ml-2">{stateInfo.hoTen}</span>
                          </p>
                          <p>
                            Số điện thoại:
                            <span className="ml-2">{stateInfo.soDT}</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <p>
                          Tài khoản:
                          <span className="ml-2">{stateInfo.taiKhoan}</span>
                        </p>
                        <p>
                          Nhóm:
                          <span className="ml-2">{stateInfo.maNhom}</span>
                        </p>
                        <p>
                          Đối tượng:
                          <span className="ml-2">Học viên</span>
                        </p>
                        <button
                          onClick={() => navigate("/user-form")}
                          className="btn btn-warning"
                        >
                          CẬP NHẬT
                        </button>
                      </div>
                    </div>
                  </div>
                  <UserInfoBot />
                </section>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
