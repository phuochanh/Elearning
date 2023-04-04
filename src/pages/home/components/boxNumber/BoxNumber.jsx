import React from 'react'
import "./styleBoxNumber.scss";

export default function BoxNumber() {
  return (
    <div className='mt-5 number'>
        <div className='row '>
            <div className='col-lg-3 p-4 col-md-6 mt-4 mb-4'>
                <div className='boxNumber'>
                    <div>
                        <img className='imgIcon' src="./img/pic2.png" alt=""/>
                    </div>
                    <div className='textNumber'>
                        <span>9000</span>
                    </div>
                    <p className='textNumberTitle'>Học viên</p>
                </div>
            </div>
            <div className='col-lg-3 p-4 col-md-6 mt-4 mb-4'>
                <div className='boxNumber'>
                    <div>
                        <img className='imgIcon' src="./img/pic3.png" alt=""/>
                    </div>
                    <div className='textNumber'>
                        <span>1000</span>
                    </div>
                    <p className='textNumberTitle'>Khóa học</p>
                </div>
            </div>
            <div className='col-lg-3 p-4 col-md-6 mt-4 mb-4'>
                <div className='boxNumber'>
                    <div>
                        <img className='imgIcon' src="./img/pic4.png" alt=""/>
                    </div>
                    <div className='textNumber'>
                        <span>33200</span>
                    </div>
                    <p className='textNumberTitle'>Giờ học</p>
                </div>
            </div>
            <div className='col-lg-3 p-4 col-md-6 mt-4 mb-4'>
                <div className='boxNumber'>
                    <div>
                        <img className='imgIcon' src="./img/pic5.png" alt=""/>
                    </div>
                    <div className='textNumber'>
                        <span>400</span>
                    </div>
                    <p className='textNumberTitle'>Giảng viên</p>
                </div>
            </div>
        </div>
    </div>
  )
}
