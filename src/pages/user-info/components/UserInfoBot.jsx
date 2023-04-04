import React from "react";
import "../styleUserInfo.scss";

export default function UserInfoBot() {
  return (
    <div className="userInfoBot mb-5">
      <h4>Kĩ năng của tôi</h4>
      <div className="row">
        <div className="skillAll col-xl-8 col-lg-6">
          <div className="mySkill skillBtnHtml mt-4">
            <button className="skillBtnCustom">HTML</button>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="mySkill skillBtnCss mt-4">
            <button className="skillBtnCustom skillBtnCss">CSS</button>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="mySkill skillBtnJs mt-4">
            <button className="skillBtnCustom skillBtnHtml">JS</button>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="mySkill skillBtnReact mt-4">
            <button className="skillBtnCustom skillBtnHtml">REACT</button>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="timeStudy">
            <div className="timeStudyItem">
              {/* <i className="fas fa-user-clock mr-2"></i> */}
              <div>
                <h6>Giờ học</h6>
                <p>80</p>
              </div>
            </div>
            <div className="timeStudyItem">
              {/* <i className="fas fa-user-clock mr-2"></i> */}
              <div>
                <h6>Điểm tổng</h6>
                <p>80</p>
              </div>
            </div>
            <div className="timeStudyItem">
              {/* <i className="fas fa-user-clock mr-2"></i> */}
              <div>
                <h6>Buổi học</h6>
                <p>40</p>
              </div>
            </div>
            <div className="timeStudyItem">
              {/* <i className="fas fa-user-clock mr-2"></i> */}
              <div>
                <h6>Cấp độ</h6>
                <p>Trung cấp</p>
              </div>
            </div>
            <div className="timeStudyItem">
              {/* <i className="fas fa-user-clock mr-2"></i> */}
              <div>
                <h6>Học lực</h6>
                <p>Khá</p>
              </div>
            </div>
            <div className="timeStudyItem">
              {/* <i className="fas fa-user-clock mr-2"></i> */}
              <div>
                <h6>Bài tập</h6>
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
