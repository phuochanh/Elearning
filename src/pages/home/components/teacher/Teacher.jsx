import React from "react";
import "./styleTeacher.scss";
import { StarFilled } from "@ant-design/icons";

export default function Teacher() {
  return (
    <div className="ml-5 mr-5 mt-5">
      <h4 style={{ fontSize: 18 }}>Giảng viên hàng đầu</h4>
      <div className="row mt-5 ">
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 teacherItem">
          <div className="teacher">
            <img src="./img/gv.jpg" alt="" />
            <h6>Big DadMoon</h6>
          </div>
          <div className="textContent">
            <p>Chuyên gia lĩnh vực</p>
            <p>lập trình</p>
          </div>
          <p className="review">
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <span>4.9</span>
          </p>
          <span className="textReview">100 Đánh giá</span>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 teacherItem">
          <div className="teacher">
            <img src="./img/pic6.jpg" alt="" />
            <h6>Bladin Slaham</h6>
          </div>
          <div className="textContent">
            <p>Chuyên gia hệ thống</p>
            <p>máy tính</p>
          </div>
          <p className="review">
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <span>4.9</span>
          </p>
          <span className="textReview">100 Đánh giá</span>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 teacherItem">
          <div className="teacher">
            <img src="./img/pic7.jpg" alt="" />
            <h6>Chris Andersan</h6>
          </div>
          <div className="textContent">
            <p>Chuyên gia lĩnh vực</p>
            <p>Full Skill</p>
          </div>
          <p className="review">
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <span>4.9</span>
          </p>
          <span className="textReview">100 Đánh giá</span>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 teacherItem">
          <div className="teacher">
            <img src="./img/pic8.jpg" alt="" />
            <h6>VueLo Gadi</h6>
          </div>
          <div className="textContent">
            <p>Chuyên gia lĩnh vực</p>
            <p>Phân tích</p>
          </div>
          <p className="review">
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <span>4.9</span>
          </p>
          <span className="textReview">100 Đánh giá</span>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 teacherItem">
          <div className="teacher">
            <img src="./img/pic9.jpg" alt="" />
            <h6>Hoàng Nam</h6>
          </div>
          <div className="textContent">
            <p>Chuyên gia lĩnh vực</p>
            <p>PHP</p>
          </div>
          <p className="review">
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <span>4.9</span>
          </p>
          <span className="textReview">100 Đánh giá</span>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 teacherItem">
          <div className="teacher">
            <img src="./img/pic10.jpg" alt="" />
            <h6>David Ngô Savani</h6>
          </div>
          <div className="textContent">
            <p>Chuyên gia lĩnh vực</p>
            <p>Front End</p>
          </div>
          <p className="review">
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <StarFilled style={{ fontSize: "16px", color: "#f6ba35" }} />
            <span>4.9</span>
          </p>
          <span className="textReview">100 Đánh giá</span>
        </div>
      </div>
    </div>
  );
}
