import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetailApi } from "../../../services/course";
import "./styleIntroduce.scss";
import { StarFilled } from "@ant-design/icons";

export default function DetailIntroduce() {
  const [courseDetailState, setCourseDetailState] = useState({});

  const params = useParams();

  useEffect(() => {
    getCourseDetail();
  }, []);

  const getCourseDetail = async () => {
    const result = await fetchCourseDetailApi(params.id);
    setCourseDetailState(result.data);
  };
  return (
    <div className="introduce">
      <div className="row mt-5">
        <div className="col-lg-4 introduceItem">
          <div>
            <img src="../img/gv.jpg" alt="" />
          </div>
          <div className="content ml-3">
            <p className="GV">Giảng viên</p>
            <p>Robert Ngô Ngọc</p>
          </div>
        </div>
        <div className="col-lg-4 introduceItem">
          <div>
            <img src="../img/pic12.png" alt="" />
          </div>
          <div className="content ml-3">
            <p className="GV">Lĩnh vực</p>
            <p>{courseDetailState.tenKhoaHoc}</p>
          </div>
        </div>
        <div className="col-lg-4 introduceItem">
          <div>
            <StarFilled style={{ fontSize: "26px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "26px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "26px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "26px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "26px", color: "#f6ba35" }} />
            <span className="text-center ml-2" style={{fontSize: "20px"}}>5</span>
            <p className="introduceItemReview">100 đánh giá</p>
          </div>
        </div>
      </div>
      <div className="mt-5" >
        <p style={{color:"#7b7a78", lineHeight: "30px"}}>{courseDetailState.moTa}</p>
      </div>
      <hr style={{ width: "95%", alignItems: "center" }} />
    </div>
  );
}
