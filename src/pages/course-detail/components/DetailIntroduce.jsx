import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCourseDetailApi } from '../../../services/course'

export default function DetailIntroduce() {
  
  const params = useParams();
  useEffect(()=>{
    getCourseDetail();
  },[]);
  const getCourseDetail = async() => {
    const result = await fetchCourseDetailApi(params.id);
    console.log(result); // Phần này đang bị lỗi
  }
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
                <p>Lập trình Backend</p>
              </div>
              <div className="col-lg-4">
                <i>
                  <strong>3.5</strong>
                </i>
                <p>100 đánh giá</p>
              </div>
            </div>
            <div>
              <p>
                React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
                dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
                đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu,
                từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản
                cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các
                khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn
                ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến
                ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng,
                có một lý do tại sao khóa học này lại rất lớn! Và trong trường
                hợp bạn thậm chí không biết tại sao bạn lại muốn học React và
                bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo
                lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà
                phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI
                SAO điều đó lại quan trọng!
              </p>
            </div>
            <hr style={{ width: "95%", alignItems: "center" }} />
            </div>
  )
}

