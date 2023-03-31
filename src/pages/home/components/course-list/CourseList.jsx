import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCourseApi } from "../../../../services/course";
import "./CourseList.scss";
import { Button, Card } from "antd";
import Slider from "react-slick";

export default function CourseList() {
  const navigate = useNavigate();

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCourseList();
  }, []);

  const getCourseList = async () => {
    const result = await fetchCourseApi();
    const topViewed = result.data.filter(course => course.luotXem >= 100)
    
      setCourseList(topViewed.slice(0,4));
  };

  const renderCourseList = () => {
    return courseList.map((ele) => {
      return (
            <div className="col-md-6 col-xl-3 mt-4 courseList" key={ele.maKhoaHoc}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 300, width: 260 }}
          >
            <a href="#">
            <img
              style={{ height: 150, objectFit: "cover" }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.tenKhoaHoc}</h5>
              <p >{ele.moTa}</p>

              <button onClick={()=> navigate(`/course-detail/${ele.maKhoaHoc}`)} className='btn btn-success'>Xem chi tiết</button>
            </div>

            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container my-5">
      <Button size="large" danger className="mr-2">
          Khóa học phổ biến
        </Button>
      <div className="row mt-4 ">
        
      {renderCourseList()}
      </div>
    </div>
  );
}
