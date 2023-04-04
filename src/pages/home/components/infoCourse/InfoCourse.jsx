import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import "./styleInfoCourse.scss";

export default function InfoCourse() {
  return (
    <div className="infoCourseBox ml-5 mr-5">
      <div className="infoCourseHome">
        <div className="infoItemHome infoLargeItem">
          <div className="infoItemContent">
            <h3>KHÓA HỌC</h3>
            <p>
              <span>Học qua dự án thực tế</span>, học đi đôi với hành, không lý
              thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví
              dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học
              xong làm được ngay
            </p>
            <ul>
              <li>
                <CheckOutlined />
                <span>Hơn 1000 bài tập và dự án thực tế</span>
              </li>
              <li>
                <CheckOutlined />
                <span>Công nghệ cập nhật mới nhất</span>
              </li>
              <li>
                <CheckOutlined />
                <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
              </li>
              <li>
                <CheckOutlined />
                <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong
                  dự án
                </span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoItemHome infoSmallItemA">
          <div className="infoItemContent">
            <h3>LỘ TRÌNH PHÙ HỢP</h3>

            <ul>
              <li>
                <CheckOutlined />
                <span>
                  Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao
                </span>
              </li>
              <li>
                <CheckOutlined />
                <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Huấn luyện để phát triển năng lực và niềm đam mê lập trình
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoItemHome infoSmallItemB">
          <div className="infoItemContent">
            <h3>GIẢNG VIÊN</h3>
            <ul>
              <li>
                <CheckOutlined />
                <span>
                  Tương tác cùng mentor và giảng viên qua phần thảo luận
                </span>
              </li>
              <li>
                <CheckOutlined />
                <span>Review code và đưa ra các nhận xét góp ý</span>
              </li>
              <li>
                <CheckOutlined />
                <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoItemHome infoSmallItemA">
          <div className="infoItemContent">
            <h3>HỆ THỐNG HỌC TẬP</h3>
            <ul>
              <li>
                <CheckOutlined />
                <span>
                  Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ
                  học viên
                </span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Thống kê lượt xem video, làm bài, điểm số theo chu kỳ
                </span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Thống kê, so sánh khả năng học của các học viên cùng level để
                  đưa ra mục tiêu học tập
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoItemHome infoSmallItemC">
          <div className="infoItemContent">
            <h3>CHỨNG NHẬN</h3>
            <ul>
              <li>
                <CheckOutlined />
                <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến
                  độc đáo
                </span>
              </li>
              <li>
                <CheckOutlined />
                <span>
                  Kết nối CV của bạn đến với các đối tác của V learning
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
