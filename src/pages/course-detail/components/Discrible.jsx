import React from 'react'
import { CheckOutlined} from "@ant-design/icons";
export default function Discrible() {
  return (
    <div>
              <h4>Những gì bạn sẽ học</h4>
              <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <CheckOutlined />
                    Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                    với người dùng và phản ứng nhanh
                  </li>
                  <li>
                    <CheckOutlined />
                    Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ
                  </li>
                  <li>
                    <CheckOutlined />
                    Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng
                  </li>
                  <li>
                    <CheckOutlined />
                    Tìm hiểu tất cả về React Hooks và React Components
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
              <ul>
                  <li>
                    <CheckOutlined />
                    Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015
                  </li>
                  <li>
                    <CheckOutlined />
                    Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
                  </li>
                  <li>
                    <CheckOutlined />
                    Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                  </li>
                  <li>
                    <CheckOutlined />
                    Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux
                  </li>
                </ul>
              </div>
              </div>
            </div>
  )
}
