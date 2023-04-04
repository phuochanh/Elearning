import React, { useEffect } from "react";
import { Button, Space } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./styleUserForm.scss";
import { fetchUpdateUserInfoApi } from "services/user";
import { userInfoApi } from "../../services/user";

export default function UserForm() {
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "GP01",
    email: "",
  });

  const [updateState, setUpdateState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "GP01",
    email: "",
  });

  const [typeUser, setTypeUser] = useState([]);

  useEffect(() => {
    getInfoDetail();
    // handleSubmit();
  }, []);

  const getInfoDetail = async () => {
    const result = await userInfoApi();
    // console.log(result.data);
    setValues(result.data);

    // form.setFieldValue({
    //   hoTen: result.data.hoTen,
    //   matKhau: result.data.matKhau,
    //   email: result.data.email,
    //   soDT: result.data.soDT,
    // })

    // setUserState(result.data);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // console.log(event.target)
    setUpdateState({
      ...updateState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const res = await fetchUpdateUserInfoApi(updateState);
    console.log(res);
    setUpdateState(res.data);
  };
  return (
    <div className="modal-flex">
      <div className="modalContent">
        <div className="modalHeader">
          <h5>Chỉnh sửa thông tin cá nhân</h5>
        </div>
        <hr />
        <div className="modalBody">
          <form
            onSubmit={(event) => handleSubmit(event)}
            action=""
            className="container-xl"
            // form={form}
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
                    value={values.hoTen}
                    onChange={(event) => handleChange(event)}
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
                    value={values.matKhau}
                    onChange={(event) => handleChange(event)}
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
                    value={values.email}
                    onChange={(event) => handleChange(event)}
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
                    name="soDT"
                    required
                    value={values.soDT}
                    onChange={(event) => handleChange(event)}
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
