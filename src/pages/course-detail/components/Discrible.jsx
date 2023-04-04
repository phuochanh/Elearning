import React from 'react'
import { CheckOutlined} from "@ant-design/icons";
import "./Discrible.scss";
export default function Discrible() {
  return (
    <div className='mt-4'>
              <h4>Những gì bạn sẽ học</h4>
              <div className="row mt-4">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                    với người dùng và phản ứng nhanh</span>
                    
                  </li>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ</span>
                    
                  </li>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng</span>
                    
                  </li>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Tìm hiểu tất cả về React Hooks và React Components</span>
                    
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
              <ul>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015</span>
                    
                  </li>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp</span>
                    
                  </li>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản</span>
                  </li>
                  <li>
                    <CheckOutlined style={{color: "#f6ba35", fontSize: "22px"}}/>
                    <span>Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux</span>
                  </li>
                </ul>
              </div>
              </div>
            </div>
  )
}
