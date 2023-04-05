import React from "react";
import { CaretRightFilled, FieldTimeOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function DetailItem() {
  return (
    <div className="mt-5">
      <h4>Nội dung khóa học</h4>
      <div className="courseDetail mt-5">
        <div
          className="courseDetailItem pl-3"
          style={{
            backgroundColor: "#fafafa",
            height: "50px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontSize: "25px" }}>MỤC 1: GIỚI THIỆU</span>
          <Button className="ml-5" danger>
            XEM TRƯỚC
          </Button>
        </div>
        <p className="mt-4 ml-3">Bài học</p>
        <div className="lessonContainer">
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Các khái niệm về React Component
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Thiết lập môi trường cho Windows
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Tạo ứng dụng React - React-Scripts
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Ghi chú nhanh về dấu ngoặc kép cho string interpolation
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
        </div>
      </div>
      <div className="courseDetail mt-5">
        <div
          className="courseDetailItem pl-3"
          style={{
            backgroundColor: "#fafafa",
            height: "50px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontSize: "25px" }}>MỤC 2: KIẾN THỨC CĂN BẢN</span>
          <Button className="ml-5" danger>
            XEM TRƯỚC
          </Button>
        </div>
        <p className="mt-4 ml-3">Bài học</p>
        <div className="lessonContainer">
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Trang chủ và thành phần thư mục
            </span>
            <span className="ml-5 time">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Hướng dẫn khóa học + Liên kết Github
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Trang chủ thương mại điện tử + thiết lập SASS
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Tệp CSS và SCSS
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              React 17: Cập nhật các gói + Phiên bản React mới nhất
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
        </div>
      </div>
      <div className="courseDetail mt-5">
        <div
          className="courseDetailItem pl-3"
          style={{
            backgroundColor: "#fafafa",
            height: "50px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontSize: "25px" }}>MỤC 3: KIẾN THỨC CHUYÊN SÂU</span>
          <Button className="ml-5" danger>
            XEM TRƯỚC
          </Button>
        </div>
        <p className="mt-4 ml-3">Bài học</p>
        <div className="lessonContainer">
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              connect() and mapStateToProps
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Trạng thái thư mục vào Redux
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
          <div className="lessonContent mt-1">
            <span>
              <CaretRightFilled
                style={{ fontSize: "20px", color: "#41b295" }}
              />
              Thành phần Tổng quan về Bộ sưu tập
            </span>
            <span className="ml-5">
              <FieldTimeOutlined
                style={{ fontSize: "26px", color: "#41b295" }}
              />
              14:35
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
