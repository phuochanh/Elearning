import { FileDoneOutlined } from "@ant-design/icons";
import { Table, notification } from "antd";
import { useUserWait } from "hooks/useUserWait";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchRegisterCourseAdminApi } from "services/course";

export default function WaitingForApproval() {
  const params = useParams();
  const data = {
    maKhoaHoc: params.maKhoaHoc,
  };
  const result = useUserWait(data);
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
      title: "Xác thực ghi danh",
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
