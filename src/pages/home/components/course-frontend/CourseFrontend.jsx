import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCourseApi } from "../../../../services/course";
import { Button } from "antd";
import "../course-list/CourseList.scss";

export default function CourseFrontend() {
  const navigate = useNavigate();

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCourseList();
  }, []);

  const getCourseList = async () => {
    const result = await fetchCourseApi();
    // console.log(result)
    const topViewed = result.data.filter(
      (course) => course.danhMucKhoaHoc.maDanhMucKhoahoc == "FrontEnd"
    );

    setCourseList(topViewed.slice(0, 4));
  };

  const renderCourseList = () => {
    return courseList.map((ele) => {
      return (
        <div className="col-md-6 col-xl-3 mt-4 courseList" key={ele.maKhoaHoc}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 330, width: 260 }}
          >
            <a href="#">
              <img
                style={{ height: 150, objectFit: "cover" }}
                className="card-img-top"
                src={ele.hinhAnh}
                alt="movie"
              />
              <span className="stickerCard">{ele.tenKhoaHoc}</span>
              <div
                className="card-body mt-2"
                style={{ height: 180, width: 260 }}
              >
                <p>{ele.moTa}</p>
                <div className="cardIcon">
                  <img className="card1" src="./img/pic11.png" alt="" />
                  <span className="ml-2 ">Elon Musk</span>
                </div>
                <hr />
                <div className="price">
                  <p
                    className="price1"
                    style={{ fontSize: "12px", color: "#8c8c8c" }}
                  >
                    800.000
                    <sup>đ</sup>
                  </p>
                  <p
                    className="price2"
                    style={{ fontWeight: 500, color: "#41b294" }}
                  >
                    400.000
                    <sup>đ</sup>
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/course-detail/${ele.maKhoaHoc}`)}
                  className="btn btn-success movieDetail"
                >
                  Xem chi tiết
                </button>
              </div>
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="ml-5 my-5">
      <div>
        <Button size="large" danger className="mr-2">
          Khóa học Front End React Js
        </Button>
      </div>
      <div className="row mt-2 ml-4 mr-4">{renderCourseList()}</div>
    </div>
  );
}
