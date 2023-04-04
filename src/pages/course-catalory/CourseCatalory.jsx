import React from "react";
import { Button } from "antd";
import "./styleCourseCatalory.scss";

export default function CourseCatalory() {
  return (
    <div>
      <div className="titleCourse">
        <h3>KHÓA HỌC THEO DANH MỤC</h3>
        <p>HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
      </div>
      <div>
        <Button>Lập trình Front end</Button>
      </div>
    </div>
  );
}
