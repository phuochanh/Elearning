import React from "react";
import { Space, Table, Tag, Button, notification } from "antd";
import { useCourseList } from "../../hooks/useCourseList";
import "./style.scss";
import {
  CloseOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { deleteCourseApi } from "../../services/course";
export default function ElearningManagement() {
  const courseList = useCourseList();

  const deleteCourse = (maKhoaHoc) => {
    deleteCourseApi(maKhoaHoc);
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
            <EditOutlined key="edit" title="Edit" className="update-icon" />
            <CloseOutlined
              key="delete"
              title="Delete"
              className="remove-icon"
              onClick={() => deleteCourse(record.maKhoaHoc)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={courseList} />
    </div>
  );
}
