import React from 'react'
import {CaretRightOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button} from 'antd';
export default function DetailItem() {
  return (
    <div className='mt-5'>
              <h4>Nội dung khóa học</h4>
              <div className="courseDetail mt-5">
              <div className="courseDetailItem" style={{backgroundColor:"#fafafa"}}>
                <span>MỤC 1: GIỚI THIỆU</span>
                <Button className="ml-5">XEM TRƯỚC</Button>
              </div>
              <p>Bài học</p>
              <div className="lessonContainer">
                <div className="lessonContainer mt-1">
                  <span>
                  <CaretRightOutlined />Các khái niệm về React Component
                  </span>
                  <span className="ml-5">
                  <ClockCircleOutlined />14:35
                  </span>
                </div>
              </div>
              </div>
              <div className="courseDetail mt-5">
              <div className="courseDetailItem">
                <span>MỤC 2: KIẾN THỨC CĂN BẢN</span>
                <Button className="ml-5">XEM TRƯỚC</Button>
              </div>
              <p>Bài học</p>
              <div className="lessonContainer">
                <div className="lessonContainer mt-1">
                  <span>
                  <CaretRightOutlined />Các khái niệm về React Component
                  </span>
                  <span className="ml-5">
                  <ClockCircleOutlined />14:35
                  </span>
                </div>
              </div>
              </div>
              <div className="courseDetail mt-5">
              <div className="courseDetailItem">
                <span>MỤC 3: KIẾN THỨC CHUYÊN SÂU</span>
                <Button className="ml-5">XEM TRƯỚC</Button>
              </div>
              <p>Bài học</p>
              <div className="lessonContainer">
                <div className="lessonContainer mt-1">
                  <span>
                  <CaretRightOutlined />Các khái niệm về React Component
                  </span>
                  <span className="ml-5">
                  <ClockCircleOutlined />14:35
                  </span>
                </div>
              </div>
              </div>
              
            </div>
  )
}
