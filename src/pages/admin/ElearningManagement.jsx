import React, { useEffect, useState } from "react";
import { Table, Button, notification, Modal, Input } from "antd";
import { useCourseList } from "../../hooks/useCourseList";
import "./style.scss";

import { CloseOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { deleteCourseApi } from "../../services/course";
import { useNavigate } from "react-router";
import { Empty } from "antd";

export default function ElearningManagement() {
  const courseList = useCourseList();
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  const filteredList = key
    ? courseList.filter((ele) =>
        ele.tenKhoaHoc.toLowerCase().includes(key.toLowerCase())
      )
    : courseList;

  const deleteCourse = async (maKhoaHoc) => {
    try {
      await deleteCourseApi(maKhoaHoc);
      notification.success({
        message: "Xóa thành công ",
      });
    } catch ({ response }) {
      notification.error({
        message: response.data || "Error deleting!",
      });
    }
  };
  const handleConfirmRemove = (maKhoaHoc) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa khóa học này?",
      onOk: () => deleteCourse(maKhoaHoc),
    });
  };

  const columns = [
    {
      title: "Tên khóa học",
      key: "tenKhoaHoc",
      dataIndex: "tenKhoaHoc",
    },
    {
      title: "Mã khóa học",
      key: "maKhoaHoc",
      dataIndex: `maKhoaHoc`,
    },
    {
      title: "Ngày tạo",
      key: "ngayTao",
      dataIndex: "ngayTao",
    },
    {
      title: "Mô tả",
      key: "moTa",
      dataIndex: "moTa",
    },

    {
      title: "Số lượng học viên",
      key: "soLuongHocVien",
      dataIndex: "soLuongHocVien",
    },
    {
      title: "Hành động",
      key: "hanhdong",
      render: (record) => {
        return (
          <div>
            <EditOutlined
              key="edit"
              title="Edit"
              className="update-icon"
              onClick={() =>
                navigate(`/admin/elearning-management/edit/${record.maKhoaHoc}`)
              }
            />
            <CloseOutlined
              key="delete"
              title="Delete"
              className="remove-icon"
              onClick={() => handleConfirmRemove(record.maKhoaHoc)}
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
        onClick={() => navigate(`/admin/elearning-management/add`)}
      >
        Thêm khóa học
      </Button>
      <Input
        prefix={<SearchOutlined />}
        placeholder="Tìm kiếm..."
        onChange={(e) => setKey(e.target.value)}
      />

      <Table columns={columns} dataSource={filteredList} />
    </div>
  );
}
