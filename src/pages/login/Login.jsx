import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./styleLogin.css";

export default function Login() {
    const navigate = useNavigate();
    
  return (
    <div className="bg__login">
      <div className="center">
        <Space onClick={() => navigate("/")}>
          <CloseOutlined
            className="text-white"
            style={{
              position: "absolute",
              right: "16px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          />
        </Space>
        <h1>Login</h1>
        <form method="post" onSubmit>
          <div className="txt_field">
            <input
              type="text"
              required
              name="taiKhoan"
              onChange
            />
            <span />
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              name="matKhau"
              onChange
            />
            <span />
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" defaultValue="Login" />
          <div className="signup_link">
            Not a member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
