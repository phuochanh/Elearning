// import { Button, notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../services/user";
import { useDispatch, useSelector } from "react-redux";
import { Space, Button } from "antd";
import Swal from "sweetalert2";
import { setRegisterInfoAction } from "../../store/actions/registerAction";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUserState = useSelector((state) => state.registerUserReducer);

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDt: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP01",
    email: "",
  });

  const [errors, setErrors] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDt: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP01",
    email: "",
  });

  const handleBlur = (event) => {
    let message = "";

    const { validity, name, title, minLength, maxLength } = event.target;
    const { valueMissing, tooShort, tooLong, patternMismatch } = validity;

    if (valueMissing) {
      message = `${title} không được để trống`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength} - ${maxLength} `;
    }

    if (patternMismatch) {
      message = `${title} không đúng định dạng`;
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await registerApi(state);
    localStorage.setItem("REGISTER_INFO_KEY", JSON.stringify(result.data));
    dispatch(setRegisterInfoAction(result.data));

    if (registerUserState.nd) {
      Swal.fire({
        title: "Đăng ký thành công",
        text: "Xin chào!!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
    navigate("/");
  };

  return (
    <div className="modal-flex">
      <div className="register">
        <div className="modalHeader text-center">
          <h5>ĐĂNG KÝ</h5>
        </div>
        <hr />
        <div className="modalBody">
          <form
            onSubmit={(event) => handleSubmit(event)}
            action=""
            className="container-xl"
          >
            <div>
            <div>
                <div className="form-group w-100">
                  <label>Tài khoản</label>
                  <input
                    type="text"
                    title="Ho ten"
                    className="form-control"
                    name="taiKhoan"
                    required
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div>
                <div className="form-group w-100">
                  <label>Họ tên</label>
                  <input
                    type="text"
                    title="Ho ten"
                    className="form-control"
                    name="hoTen"
                    required
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div>
                <div className="form-group w-100">
                  <label>Mật Khẩu</label>
                  <input
                    type="password"
                    title="Mat Khau"
                    className="form-control"
                    name="matKhau"
                    required
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div>
                <div className="form-group w-100">
                  <label>Nhập lại Mật Khẩu</label>
                  <input
                    type="password"
                    title="Mat Khau"
                    className="form-control"
                    name="matKhau"
                    required
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div>
                <div className="form-group w-100">
                  <label>Email</label>
                  <input
                    required
                    type="text"
                    title="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="form-control"
                    name="email"
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div>
                <div className="form-group w-100">
                  <label>Số điện thoại</label>
                  <input
                    title="SDT"
                    type="text"
                    className="form-control"
                    name="soDT"
                    required
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="text-center">
                <Space wrap>
                  <Button htmlType="submit" type="primary" size="large">
                    ĐĂNG KÝ
                  </Button>
                </Space>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
