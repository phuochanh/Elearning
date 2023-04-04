import React from "react";
import { Space, Table, Tag, Button, notification } from "antd";

import {
  CloseOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useUserList } from "../../hooks/useUserList";
import { useNavigate } from "react-router-dom";
export default function ElearningManagement() {
  const userList = useUserList();
  const navigate = useNavigate();
  const columns = [
    {
      title: "Họ và tên",
      key: "1",
      dataIndex: "hoTen",
    },
    {
      title: "Tên tài khoản",
      key: "2",
      dataIndex: `taiKhoan`,
    },
    {
      title: "Email",
      key: "3",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      key: "4",
      dataIndex: "soDt",
    },

    {
      title: "Chức vụ",
      key: "5",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Chỉnh sửa",
      key: "6",
      render: (text) => {
        return (
          <div>
            <EditOutlined key="edit" title="Edit" className="update-icon" />
            <CloseOutlined
              key="delete"
              title="Delete"
              className="remove-icon"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Button
        className="mb-2"
        onClick={() => navigate(`/admin/user-management/add`)}
      >
        Thêm tài khoản
      </Button>
      <Table columns={columns} dataSource={userList} />
    </div>
  );
}
