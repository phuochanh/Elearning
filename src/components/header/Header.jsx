import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.scss";
import { fetchCourseCatalogApi } from "../../services/course";

export default function Header() {
  const navigate = useNavigate();
  const [courseState, setCourseState] = useState({});

  useEffect(() => {
    getCourseCatalog();
  }, []);

  const getCourseCatalog = async () => {
    const result = await fetchCourseCatalogApi();
    console.log(result);
    setCourseState(result.data);
  };

 const renderContent = () => {
  return courseState.map((element) => {
    return <p key={element.maDanhMuc}>{element.tenDanhMuc}</p>;
  });
};

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./img/logo.png" width={240} height={70} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div
          className="collapse navbar-collapse ml-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="dropdown nav-item active pl-5 pt-2" >
              <div className="dropdown-toggle" data-toggle="dropdown">
                <strong>DANH MỤC</strong>
              </div>
              <div className="dropdown-menu p-3 catalog">
                {/* {renderContent()} */}
                {/* <a className="dropdown-item" href="#">
                  {courseState.tenDanhMuc}
                </a>
                <a className="dropdown-item" href="#">
                  Menu item 2
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Menu 3 ...
                </a> */}
              </div>
            </li>
          
            <li className="nav-item">
              <strong>
                <a className="nav-link" href="#">
                  KHÓA HỌC
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link" href="#">
                  SỰ KIỆN
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link" href="#">
                  THÔNG TIN
                </a>
              </strong>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-outline-info my-2 my-sm-0 mr-2"
            type="sumit"
            onClick={() => navigate("/register")}
          >
            ĐĂNG KÝ
          </button>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => navigate("/login")}
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </nav>
  );
}
