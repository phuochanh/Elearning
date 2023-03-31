import React from 'react'
import "./styleUserInfo.scss";

export default function UserInfo() {
  return (
    <div className='infoPage'>
      <div className='title pl-5'>
        <h4>THÔNG TIN CÁ NHÂN</h4>
        <p>THÔNG TIN HỌC VIÊN</p>
      </div>
      <div className='infoPageContent'>
        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            <div className='infoLeft p-5'>
              <img src="./img/avatar.png" alt="" />
              <h6 className='pt-4'>Robert Nguyễn</h6>
              <p>Lập trình viên Front-end</p>
              <button className='btn btn-success'>Hồ sơ cá nhân</button>
            </div>
          </div>

          <div className='col-lg-9 col-md-8'>
            <div className='infoRight'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
