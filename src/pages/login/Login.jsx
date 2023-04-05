import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Space, Button } from "antd";
import { loginApi } from "../../services/user";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
import Swal from "sweetalert2";
import "../use-form/styleUserForm.scss";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userState = useSelector((state) => state.userReducer);

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await loginApi(state);
    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data));
    dispatch(setUserInfoAction(result.data));

    if (userState.userInfo) {
      Swal.fire({
        title: "Đăng nhập thành công",
        text: `Xin chào ${userState.userInfo.hoTen}`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
    navigate("/");
  };

  return (
    <div className="modal-flex ">
      <div className=" login">
        <div className="modalHeader">
          <h5>ĐĂNG NHẬP</h5>
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
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              
              <div className="text-center">
                <Space wrap>
                  <Button htmlType="submit" type="primary" size="large">
                    ĐĂNG NHẬP
                  </Button>
                </Space>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



    // <div className="bg__login">
    //   <div className="center">
    //     <Space onClick={() => navigate("/")}>
    //       <CloseOutlined
    //         className="text-white"
    //         style={{
    //           position: "absolute",
    //           right: "16px",
    //           fontSize: "20px",
    //           cursor: "pointer",
    //         }}
    //       />
    //     </Space>
    //     <h1>Login</h1>
    //     <form method="post" onSubmit={handleSubmit}>
    //       <div className="txt_field">
    //         <input
    //           type="text"
    //           required
    //           name="taiKhoan"
    //           onChange={handleChange}
    //         />
    //         <span />
    //         <label>Username</label>
    //       </div>
    //       <div className="txt_field">
    //         <input
    //           type="password"
    //           required
    //           name="matKhau"
    //           onChange={handleChange}
    //         />
    //         <span />
    //         <label>Password</label>
    //       </div>
    //       <div className="pass">Forgot Password?</div>
    //       <input type="submit" defaultValue="Login" />
    //       <div className="signup_link">
    //         Not a member? <Link to="/register">Signup</Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
