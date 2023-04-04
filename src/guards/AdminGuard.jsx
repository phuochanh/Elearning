import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminGuard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userState.userInfo) {
      notification.warning({
        message: "Vui lòng đăng nhập !",
      });
      navigate("/login");
    } else {
      if (userState.userInfo.maLoaiNguoiDung === "HV") {
        notification.warning({
          message: "Học viên không có quyển truy cập !",
        });
        navigate("/");
      }

      if (userState.userInfo.maLoaiNguoiDung === "GV") {
        notification.success({
          message: "Vào thành công trang quản lý !",
        });
        navigate("/admin/elearning-management");
      }
    }
  }, []);

  return <Outlet />;
}
