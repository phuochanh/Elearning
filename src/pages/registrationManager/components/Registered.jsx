import { CloseCircleOutlined } from "@ant-design/icons";
import { Table, notification } from "antd";
import { useUserRegistered } from "hooks/useUserRegistered";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCancelRegisterApi } from "services/course";

export default function Registered() {
  const params = useParams();
  const [userList, setUserList] = useState([]);
  const data = {
    maKhoaHoc: params.maKhoaHoc,
  };
  const result = useUserRegistered(data);

  const handleCancelRegister = async (taiKhoan) => {
    const data = {
      maKhoaHoc: params.maKhoaHoc,
      taiKhoan: taiKhoan,
    };
    try {
      await fetchCancelRegisterApi(data);
      notification.success({
        message: "Hủy ghi danh thành công",
      });
    } catch (error) {
      notification.error({
        message: "Lỗi hủy ghi danh!",
      });
    }
  };
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },

    {
      title: "Bí danh",
      dataIndex: "biDanh",
      key: "biDanh",
    },
    {
      title: "Hủy ghi danh",
      key: "hanhdong",
      render: (record) => {
        return (
          <div>
            <CloseCircleOutlined
              key="huyghidanh"
              title="Huy ghi danh "
              className="update-icon"
              onClick={() => handleCancelRegister(record.taiKhoan)}
            />
          </div>
        );
      },
    },
  ];
  return <Table dataSource={result} columns={columns} />;
}
