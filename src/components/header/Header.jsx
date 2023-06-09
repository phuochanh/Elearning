import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourseCatalogApi, fetchCourseFilterApi} from "../../services/course";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../store/actions/userAction";
import {LogoutOutlined} from "@ant-design/icons";
import { Input} from "antd";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [courseState, setCourseState] = useState([]);
  const userState = useSelector((state) => state.userReducer);
  const [_, setKeyWord] = useState("");
  const [filter, setfilter] = useState([])

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  useEffect(() => {
    getCourseCatalog();
  }, []);

  const getCourseCatalog = async () => {
    const result = await fetchCourseCatalogApi();
    setCourseState(result.data);
  };

  const renderContent = () => {
    return courseState.map((element) => {
      return (
        <p key={element.maDanhMuc}>
          <Link to={`/course-catalory/${element.maDanhMuc}`}>{element.tenDanhMuc}</Link>
        </p>
      );
    });
  };

  const handleSearch = async (keyword) => {
    const result = await fetchCourseFilterApi(keyword)
    const afilter = filter.filter((item) => {
      return item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase())
    })
    setfilter(afilter.tenKhoahoc)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./img/logo.png" width={240} height={70} />
        </Link>
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
        <div>
        <Input.Search
            type="search"
            placeholder="Search"
            aria-label="Search"
            onSearch={handleSearch}
            onChange={(event) => setKeyWord(event.target.value)}
          />
        </div>
        <div
          className="collapse navbar-collapse ml-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="dropdown nav-item active pl-5 pt-2">
              <div className="dropdown-toggle" data-toggle="dropdown">
                <strong className="catalog">
                  <a href="#">DANH MỤC</a>
                  </strong>
              </div>
              <div className="dropdown-menu p-3 catalog">{renderContent()}</div>
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
          {userState.userInfo ? (
            <>
            <Link className="navbar-brand" to="/user-info">
            <img className="imgAvatar" src="./img/avatar.png" alt="" />
        </Link>
              <button className="btn btn-danger" onClick={handleLogout} style= {{fontSize: "1px"}}>
              <LogoutOutlined style={{ fontSize: '15px' }}/>
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
