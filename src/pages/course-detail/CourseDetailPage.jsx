import React from "react";
import "./CourseDetailPage.scss";
import DetailItem from "./components/DetailItem";
import Discrible from "./components/Discrible";
import DetailRegister from "./components/DetailRegister";
import DetailIntroduce from "./components/DetailIntroduce";

export default function CourseDetailPage() {
  return (
    <div className="py-5 ">
      <div className="ml-5 mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-7 course-Detail">
            <h4>LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h4>
            <DetailIntroduce/>
            <Discrible/>
            <DetailItem/>
          </div>
          <DetailRegister/>
        </div>
      </div>
      <div></div>
    </div>
  );
}
