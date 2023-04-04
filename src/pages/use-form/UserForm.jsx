import React, { useEffect } from "react";
import { Button, notification, Space } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styleUserForm.scss";
import { fetchUpdateUserInfoApi } from "services/user";

export default function UserForm() {
  const navigate = useNavigate();
  const [userState, setUserState] = useState([]);

  const [typeUser, setTypeUser] = useState([]);

  useEffect(() => {
    updateForm();
  }, []);
  const updateForm = async (data) => {
    const result = await fetchUpdateUserInfoApi(data);
    console.log(result.data);
    setUserState(result.data);
  };

  return (
    <div className="modal-flex">
      <div className="modalContent">
        <div className="modalHeader">
          <h5>Chỉnh sửa thông tin cá nhân</h5>
          <button
            type="button"
            className="btn btn-danger close"
            data-dismiss="modal"
          >
            x
          </button>
        </div>
        <hr />
        <div className="modalBody">
          <form
            // onSubmit={(event) => handleSubmit(event)}
            action=""
            className="container-xl"
          >
            <div>
              <div>
                <div className="form-group w-100">
                  <label>Họ tên</label>
                  <input
                    type="text"
                    title="Ho ten"
                    className="form-control"
                    name="hoTen"
                    required
                    // onChange={(event) => handleChange(event)}
                    // onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div>
                <div className="form-group w-100">
                  <label>Mật Khẩu</label>
                  <input
                    type="text"
                    title="Mat Khau"
                    className="form-control"
                    name="matKhau"
                    required
                    // onChange={(event) => handleChange(event)}
                    // onBlur={(event) => handleBlur(event)}
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
                    // onChange={(event) => handleChange(event)}
                    // onBlur={(event) => handleBlur(event)}
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
                    name="soDt"
                    required
                    // onChange={(event) => handleChange(event)}
                    // onBlur={(event) => handleBlur(event)}
                  />
                  <span className="text-danger"></span>
                </div>
              </div>
              <div className="text-right">
                <Space wrap>
                  <Button htmlType="submit" type="primary" size="large">
                    Cập nhật
                  </Button>
                  <button className="btn btn-danger">Đóng</button>
                </Space>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
