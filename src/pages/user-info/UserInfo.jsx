import React from "react";
import "./styleUserInfo.scss";

export default function UserInfo() {
  return (
    <div className="infoPage">
      <div className="title pl-5">
        <h4>THÔNG TIN CÁ NHÂN</h4>
        <p>THÔNG TIN HỌC VIÊN</p>
      </div>
      <div className="infoPageContent">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="infoLeft p-5">
              <img src="./img/avatar.png" alt="" />
              <h6 className="pt-4">Robert Nguyễn</h6>
              <p>Lập trình viên Front-end</p>
              <button className="btn btn-success">Hồ sơ cá nhân</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-8">
            <div className="infoRight">
              <div className="tab mt-5">
                <button className="tabLink btn btn-info active">Thông tin cá nhân</button>
                <button className="tabLink btn btn-info ">Khóa học</button>
              </div>
              <div className="tabContent active">
                <section className="userInfo">
                  <div className="userInfoTop">
                    <div className="row mt-5">
                      <div className="col-md-7">
                        <div>
                          <p>Email: 
                            <span className="ml-2">hanhcp2013@gmail.com</span>
                          </p>
                          <p>Họ và tên: 
                            <span className="ml-2">Phước Hạnh</span>
                          </p>
                          <p>Số điện thoại: 
                            <span className="ml-2">0123456678</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <p>Tài khoản:
                        <span className="ml-2">Phuochanh</span>
                        </p>
                        <p>Nhóm:
                        <span className="ml-2">GP01</span>
                        </p>
                        <p>Đối tượng:
                        <span className="ml-2">Học viên</span>
                        </p>
                        <button className="btn btn-warning">CẬP NHẬT</button>
                      </div>
                    </div>
                  </div>
                  <div className="userInfoBot mb-5">
                    <h4>Kĩ năng của tôi</h4>
                    <div className="row">
                      <div className="skillAll col-xl-8 col-lg-6">
                        <div className="mySkill skillBtnHtml mt-4">
                          <button className="skillBtnCustom">HTML</button>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                          </div>
                        </div>
                        <div className="mySkill skillBtnCss mt-4">
                          <button className="skillBtnCustom skillBtnCss">CSS</button>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                          </div>
                        </div>
                        <div className="mySkill skillBtnJs mt-4">
                        <button className="skillBtnCustom skillBtnHtml">JS</button>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}></div>
                          </div>
                        </div>
                        <div className="mySkill skillBtnReact mt-4">
                        <button className="skillBtnCustom skillBtnHtml">REACT</button>
                          <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                          </div></div>
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
                </section>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
