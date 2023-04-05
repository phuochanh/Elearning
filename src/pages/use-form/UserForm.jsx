import React, { useEffect } from "react";
import { Button, Space } from "antd";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { fetchUpdateUserInfoApi } from "services/user";
import { userInfoApi } from "../../services/user";
import Swal from "sweetalert2";

export default function UserForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "GP01",
    email: "",
  });

  const [errors, setErrors] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    email: "",
  }); 

  const handleBlur = (event) => {
    let message = "";
    const { name, title, validity } = event.target;

    const { valueMissing, patternMismatch } = validity;

    if (valueMissing) {
      message = `${title} is required`;
    }

    if (patternMismatch) {
      message = `${title} không đúng định dạng`;
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  useEffect(() => {
    getInfoDetail();
  }, []);

  const getInfoDetail = async () => {
    const result = await userInfoApi();
    setValues(result.data);
  };

  const handleChange = (event) => {
    const { _, name } = event.target;
    const newValues = { ...values, [name]: event.target.value}
    setValues(newValues)  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetchUpdateUserInfoApi(values);
    console.log(res.data);
    setValues(res.data)
    Swal.fire({
      title: "Cập nhật thông tin thành công",
      icon: "success",
        timer: 2000,
        showConfirmButton: false,
    });
    navigate("/user-info")
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
                    value={values.matKhau}
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
                    value={values.email}
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
                    value={values.soDT}
                    onChange={(event) => handleChange(event)}
                    onBlur={(event) => handleBlur(event)}
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
