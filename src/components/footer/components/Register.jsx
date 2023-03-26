import React from 'react'
import { Button, Form} from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function Register() {
  return (
    <div className="col-12 col-md-6 col-lg-3 col-xl-3 footer__item px-2">
            <h4>Đăng kí tư vấn</h4>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <input
                type="text"
                placeholder="Họ và tên"
                className="form-control me-2 mb-3"
                name="username"
              ></input>
              <input
                type="email"
                placeholder="Email"
                className="form-control me-2 mb-3"
                name="email"
              ></input>
              <input
                type="text"
                placeholder="Số điện thoại"
                className="form-control me-2"
                name="phoneNumber"
              ></input>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" className="mt-3">
                  Đăng kí tư vấn
                </Button>
              </Form.Item>
            </Form>
          </div>
  )
}
