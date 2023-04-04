import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./styleCourseCatalory.scss";
import { fetchCourseByCatagogyApi } from "services/course";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseCatalory() {
   const params = useParams();
    const navigate = useNavigate();
  const [aState, setState] = useState([]);
  
  useEffect(() => {
    getCourseCatalory();
  }, []);

  const getCourseCatalory = async () => {
    const result = await fetchCourseByCatagogyApi(params.id);
    // console.log(result.data);
    setState(result.data);
    
    // if(result.data.danhMucKhoaHoc.some((item) => item.maDanhMucKhoahoc == "BackEnd")){
    //     console.log("2");
    // }
  };

  const renderCourseCatalory = () => {
    return aState.map((ele) => {
        return (<div className="col-md-6 col-xl-3 mt-4 courseList" key={ele.maKhoaHoc}>
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
          <div className="card-body mt-2"
          style={{height: 180, width: 260}}>
            <p >{ele.moTa}</p>
            <div className="cardIcon">
              <img className="card1" src="./img/pic11.png" alt="" />
              <span className="ml-2 ">Elon Musk</span>
            </div>
            <hr />
            <div className="price">
              <p className="price1" style={{fontSize: "12px", color: "#8c8c8c"}}>800.000
                <sup>đ</sup>
              </p >
              <p className="price2" style={{fontWeight: 500, color: "#41b294"}}>400.000
              <sup>đ</sup>
              </p>
            </div>
            <button onClick={()=> navigate(`/course-detail/${ele.maKhoaHoc}`)} className='btn btn-success movieDetail '>Xem chi tiết</button>
          </div>
          </a>
        </div>
      </div>)
    })
  }
  return (
    <div>
      <div className="titleCourse">
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>
      <div className="mt-5 ml-5">
        <Button>{aState.danhMucKhoaHoc}</Button>
        <div className="row mt-2 ml-1 mr-4">
          {renderCourseCatalory()}
        </div>
      </div>
    </div>
  );
}
