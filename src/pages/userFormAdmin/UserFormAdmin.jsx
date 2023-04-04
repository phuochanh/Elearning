import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, notification } from "antd";
import {
  fetchUpdateUserInfoApi,
  fetchUserAdminApi,
  registerAdminApi,
} from "../../services/user";
import { useNavigate, useParams } from "react-router-dom";
import { MA_NHOM } from "../../constants";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export default function UserFormAmin() {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getUserDetail();
  }, [params.taiKhoan]);

  const getUserDetail = async () => {
    let result;
    try {
      result = await fetchUserAdminApi(params.taiKhoan);
    } catch ({ response }) {
      notification.error({
        message: response.data || " Lỗi kết nối dữ liệu !",
      });
    }
    console.log(result.data);
    const UserResult = result.data.filter((ele) => {
      return ele.taiKhoan === params.taiKhoan;
    });
    console.log(UserResult);
    const { email, hoTen, taiKhoan, matKhau, maLoaiNguoiDung, soDt } =
      UserResult[0];

    form.setFieldsValue({
      email: email,
      hoTen: hoTen,
      taiKhoan: taiKhoan,
      matKhau: matKhau,
      maNhom: MA_NHOM,
      maLoaiNguoiDung: maLoaiNguoiDung,
      soDT: soDt,
    });
  };
  const onFinish = (values) => {
    try {
      if (params.taiKhoan) {
        fetchUpdateUserInfoApi(values);
        notification.success({
          message: "Cập nhật tài khoản thành công !",
        });
        navigate("/admin/user-management");
      } else {
        registerAdminApi(values);

        notification.success({
          message: "Thêm tài khoản thành công !",
        });
        navigate("/admin/user-management");
      }
    } catch ({ response }) {
      notification.error({
        message: response.data || "Không thể thêm được tài khoản !",
      });
    }
  };

  // CHECK VALIDATE
  const validatePhone = (rule, value) => {
    const phoneRegex =
      /(84|\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5|8|9|2]|9[0-4|6-9|1])([0-9]{7})\b/g;
    if (!value || phoneRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Số điện thoại không hợp lệ!");
  };
  const validatePassword = (rule, value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value || passwordRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      "Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt!"
    );
  };
  const validateUsername = (rule, value) => {
    const usernameRegex = /^[a-zA-Z0-9]{6,20}$/;
    if (!value || usernameRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      "Tài khoản không hợp lệ. Tài khoản chỉ bao gồm các ký tự chữ và số (không bao gồm khoảng trắng và các ký tự đặc biệt), có độ dài từ 6 đến 20 ký tự!!"
    );
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const validateName = (rule, value) => {
    const nameRegex = /^[\p{L}\s]+$/u;
    if (!value || nameRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Họ và tên không hợp lệ!");
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        email: "",
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        soDT: "",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Vui lòng nhập email hợp lệ!",
          },
          {
            required: true,
            message: "Vui lòng nhập vào email đăng ký",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="hoTen"
        label="Họ và tên"
        tooltip="Vui lòng nhập họ và tên của bạn!"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập họ và tên của bạn!",
          },
          {
            validator: validateName,
          },
          {
            min: 2,
            message: "Họ tên phải lớn hơn hoặc bằng 2 ký tự",
          },
          {
            max: 30,
            message: "Họ tên phải nhỏ hơn hoặc bằng 30 ký tự",
          },
        ]}
      >
        <Input value={name} onChange={handleNameChange} />
      </Form.Item>
      <Form.Item
        name="taiKhoan"
        label="Tài khoản"
        tooltip="Bạn muốn tên tài khoản đăng nhập là gì?"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên tài khoản đăng ký!",
            whitespace: true,
          },
          {
            validator: validateUsername,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="matKhau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu đăng ký!",
          },
          {
            validator: validatePassword,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Mã nhóm"
        name="maNhom"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn mã nhóm!",
          },
        ]}
      >
        <Select>
          <Select.Option value="GP01">GP01</Select.Option>
          <Select.Option value="GP02">GP02</Select.Option>
          <Select.Option value="GP03">GP03</Select.Option>
          <Select.Option value="GP04">GP04</Select.Option>
          <Select.Option value="GP05">GP05</Select.Option>
          <Select.Option value="GP06">GP06</Select.Option>
          <Select.Option value="GP07">GP07</Select.Option>
          <Select.Option value="GP08">GP08</Select.Option>
          <Select.Option value="GP09">GP09</Select.Option>
          <Select.Option value="GP10">GP10</Select.Option>
          <Select.Option value="GP11">GP11</Select.Option>
          <Select.Option value="GP12">GP12</Select.Option>
          <Select.Option value="GP13">GP13</Select.Option>
          <Select.Option value="GP14">GP14</Select.Option>
          <Select.Option value="GP15">GP15</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Mã loại người dùng"
        name="maLoaiNguoiDung"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn mã loại người dùng!",
          },
        ]}
      >
        <Select>
          <Select.Option value="GV">Giáo vụ</Select.Option>
          <Select.Option value="HV">Học viên</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="soDT"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số điện thoại đăng ký!",
          },
          {
            validator: validatePhone,
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
          type="tel"
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
}
