import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export default function Header() {
  const navigate = useNavigate();
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
        <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown active">
              <strong>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
              >
                DANH MỤC
              </a>
              </strong>
              
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
            <strong><a className="nav-link" href="#">
                KHÓA HỌC
              </a></strong>
            </li>
            <li className="nav-item">
            <strong><a className="nav-link" href="#">
                BLOG
              </a></strong>
            </li>
            <li className="nav-item">
            <strong><a className="nav-link" href="#">SỰ KIỆN</a></strong>
            </li>
            <li className="nav-item">
            <strong><a className="nav-link" href="#">THÔNG TIN</a></strong>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
            <button
              className="btn btn-outline-info my-2 my-sm-0 mr-2"
              type="sumit"
              onClick={()=> navigate("/login")}
            >
              ĐĂNG KÝ
            </button>
            <button className="btn btn-outline-success my-2 my-sm-0">
              ĐĂNG NHẬP
            </button>
          </div>
      </div>
    </nav>
  );
}
