import { FileDoneOutlined } from "@ant-design/icons";
import { Table, notification } from "antd";
import { useUserUnregistered } from "hooks/useUserUnregisred";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchRegisterCourseAdminApi } from "services/course";

export default function Unregistered() {
  const params = useParams();
  const data = {
    maKhoaHoc: params.maKhoaHoc,
  };
  const result = useUserUnregistered(data);
  const handleRegister = async (taiKhoan) => {
    const data = {
      maKhoaHoc: params.maKhoaHoc,
      taiKhoan: taiKhoan,
    };
    try {
      await fetchRegisterCourseAdminApi(data);
      notification.success({
        message: "Ghi danh thành công",
      });
    } catch (error) {
      notification.error({
        message: "Lỗi ghi danh!",
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
      title: "Ghi danh",
      key: "xacthucghidanh",
      render: (record) => {
        return (
          <div>
            <FileDoneOutlined
              key="ghidanh"
              title="Ghi danh người dùng"
              className="update-icon"
              onClick={() => handleRegister(record.taiKhoan)}
            />
          </div>
        );
      },
    },
  ];
  return <Table dataSource={result} columns={columns} />;
}
