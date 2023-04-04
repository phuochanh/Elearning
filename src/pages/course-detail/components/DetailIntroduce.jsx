import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetailApi } from "../../../services/course";

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
      <div className="row">
        <div className="col-lg-4">
          <div>
            <img src="./img/gv.jpg" alt="" />
          </div>
          <div>
            <p>Giảng viên</p>
            <p>Robert Ngô Ngọc</p>
          </div>
        </div>
        <div className="col-lg-4">
          <i></i>
          <p>Lĩnh vực</p>
          <p>{courseDetailState.tenKhoaHoc}</p>
        </div>
        <div className="col-lg-4">
          <i>
            <strong>3.5</strong>
          </i>
          <p>100 đánh giá</p>
        </div>
      </div>
      <div>
        <p>{courseDetailState.moTa}</p>
      </div>
      <hr style={{ width: "95%", alignItems: "center" }} />
    </div>
  );
}
