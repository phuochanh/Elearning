import React from 'react'
import { Button} from 'antd';
export default function DetailRegister() {
  return (
    <div className="col-lg-4 col-md-5">
    <img src="" alt="" />
    <div>
      <p>
        <strong>500.000đ</strong>
        </p>
        <Button>ĐĂNG KÝ</Button>
        <div className="row">
          <ul>
            <li>
              <p>Ghi danh:
                <span>10 học viên</span>
              </p>
            </li>
            <li>
              <p>Thời gian:
                <span>18 giờ</span>
              </p>
            </li>
            <li>
              <p>Bài học:
                <span>10</span>
              </p>
            </li>
            <li>
              <p>Video:
                <span>14</span>
              </p>
            </li>
            <li>
              <p>Trình độ:
                <span>Người mới bắt đầu</span>
              </p>
            </li>
          </ul>
          <hr style={{ width: "95%", alignItems: "center" }} />
          <form action="">
            <input type="text" placeholder="Nhập mã" />
          </form>
        </div>
    </div>
  </div>
  )
}
