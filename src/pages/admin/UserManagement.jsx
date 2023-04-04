import React from "react";
import { Space, Table, Tag, Button, notification, Modal, Input } from "antd";

import {
  CloseOutlined,
  EditOutlined,
  CalendarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useUserList } from "../../hooks/useUserList";
import { useNavigate } from "react-router-dom";
import { deleteUserAdminApi, fetchUserAdminApi } from "../../services/user";
import { useState } from "react";

export default function ElearningManagement() {
  const userList = useUserList();
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  const filteredList = key
    ? userList.filter((ele) =>
        ele.taiKhoan.toLowerCase().includes(key.toLowerCase())
      )
    : userList;
  const deleteUser = async (taiKhoan) => {
    try {
      await deleteUserAdminApi(taiKhoan);
      notification.success({
        message: "Xóa thành công ",
      });
    } catch ({ response }) {
      notification.error({
        message: response.data || "Error deleting!",
      });
    }
  };
  const handleConfirmRemove = (taiKhoan) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa người dùng này?",
      onOk: () => deleteUser(taiKhoan),
    });
  };
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
      render: (record) => {
        return (
          <div>
            <EditOutlined
              key="edit"
              title="Edit"
              className="update-icon"
              onClick={() =>
                navigate(`/admin/user-management/edit/${record.taiKhoan}`)
              }
            />
            <CloseOutlined
              key="delete"
              title="Delete"
              className="remove-icon"
              onClick={() => handleConfirmRemove(record.taiKhoan)}
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
      <Input
        prefix={<SearchOutlined />}
        placeholder="Tìm tên tài khoản.."
        onChange={(e) => setKey(e.target.value)}
      />
      <Table columns={columns} dataSource={filteredList} />
    </div>
  );
}
