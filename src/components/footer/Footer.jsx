import React from "react";
import {
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Register from "./components/Register";

export default function Footer() {
  return (
    <footer className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
      <div className="container footer__content ">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-4 footer__item ">
            <img
              src="./img/logo.png"
              alt=""
              width={100}
              height={50}
              className="d-block"
            />
            <ul>
              <li>
                <a href="">
                  <PhoneOutlined />
                  <span className="ml-2">1800-123-4567</span>
                </a>
              </li>
              <li>
                <a href="">
                  <MailOutlined />
                  <span className="ml-2">elearning@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="">
                  <HomeOutlined />
                  <span className="ml-2">Hồ Chí Minh</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 col-xl-2 footer__item p-2">
            <h4>Liên kết</h4>
            <ul>
              <li>
                <RightOutlined />
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <RightOutlined />
                <a href="#">Dịch vụ</a>
              </li>
              <li>
                <RightOutlined />
                <a href="#">Nhóm</a>
              </li>
              <li>
                <RightOutlined />
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 footer__item p-2">
            <h4>Khóa học</h4>
            <ul>
              <li>
                <RightOutlined />
                <a href="#">Front End</a>
              </li>
              <li>
                <RightOutlined />
                <a href="#">Back End</a>
              </li>
              <li>
                <RightOutlined />
                <a href="#">Full stack</a>
              </li>
              <li>
                <RightOutlined />
                <a href="#">Node Js</a>
              </li>
            </ul>
          </div>
          <Register/>
        </div>
      </div>
      <div>
        <hr style={{width:"95%", alignItems:"center"}}/>
        <p className="text-center">Copyright 2023. All rights reserved</p>
      </div>
      
    </footer>
  );
}
