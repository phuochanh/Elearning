import React, { useEffect } from "react";
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Select,
  notification,
} from "antd";
import { useState } from "react";
import {
  addCourseApi,
  editCourseApi,
  editCourseUploadApi,
  fetchCourseDetailApi,
} from "../../services/course";
import { useCatalogList } from "../../hooks/useCatalogList";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import moment from "moment";
export default function CourseForm() {
  const [imagePreview, setImagePreview] = useState();
  const [file, setFile] = useState();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const userState = useSelector((state) => state.userReducer);
  const params = useParams();

  const navigate = useNavigate();
  const [form] = useForm();
  const handleFile = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
  };

  useEffect(() => {
    if (params.maKhoaHoc) {
      getCourseDetail();
    }
  }, [params.movieId]);

  const getCourseDetail = async () => {
    let result;
    try {
      result = await fetchCourseDetailApi(params.maKhoaHoc);
    } catch ({ response }) {
      notification.error({
        message: response.data || " Lỗi kết nối dữ liệu !",
      });
    }
    console.log(result.data);

    const {
      maKhoaHoc,
      tenKhoaHoc,
      biDanh,
      moTa,
      luotXem,
      maNhom,

      danhGia,
      danhMucKhoaHoc,
      nguoiTao,
      hinhAnh,
    } = result.data;

    form.setFieldsValue({
      maKhoaHoc: maKhoaHoc,
      tenKhoaHoc: tenKhoaHoc,
      biDanh: biDanh,
      moTa: moTa,
      luotXem: luotXem,
      danhGia: danhGia,
      maNhom: maNhom,

      maDanhMucKhoaHoc: danhMucKhoaHoc.tenDanhMucKhoaHoc,
      taiKhoanNguoiTao: nguoiTao.hoTen,
      hinhAnh: hinhAnh,
    });
    setImagePreview(hinhAnh);
  };
  const onFinish = async (values) => {
    values.ngayTao = values.ngayTao.format("DD/MM/YYYY");
    const data = {
      maKhoaHoc: values.maKhoaHoc,
      biDanh: values.biDanh,
      tenKhoaHoc: values.tenKhoaHoc,
      moTa: values.moTa,
      luotXem: Number(values.luotXem),
      danhGia: Number(values.danhGia),
      maNhom: values.maNhom,
      ngayTao: values.ngayTao,
      maDanhMucKhoaHoc: values.maDanhMucKhoaHoc,
      taiKhoanNguoiTao: values.taiKhoanNguoiTao,
      hinhAnh: file ? file.name : "xxx",
    };

    const formData = new FormData();
    formData.append("maKhoaHoc", values.maKhoaHoc);
    formData.append("tenKhoaHoc", values.tenKhoaHoc);
    formData.append("biDanh", values.biDanh);
    formData.append("moTa", values.moTa);
    formData.append("luotXem", Number(values.luotXem));
    formData.append("danhGia", Number(values.danhGia));
    formData.append("maNhom", values.maNhom);
    formData.append("ngayTao", values.ngayTao);
    formData.append("maDanhMucKhoaHoc", values.maDanhMucKhoaHoc);
    formData.append("taiKhoanNguoiTao", values.taiKhoanNguoiTao);
    file && formData.append("hinhAnh", file, file.name);
    console.log(values.ngayTao);

    try {
      if (params.maKhoaHoc) {
        if (file) {
          await editCourseUploadApi(formData);

          notification.success({
            message: "Sửa khóa học thành công",
          });
        } else {
          await editCourseApi(data);

          notification.success({
            message: "Sửa khóa học thành công",
          });
        }
      } else {
        await addCourseApi(formData);
        notification.success({
          message: "Thêm phim thành công",
        });
      }

      navigate("/admin/elearning-management/");
    } catch ({ response }) {
      console.log(response);
      notification.error({
        message: response.data || " Có lỗi khi cập nhật !",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const result = useCatalogList();
  return (
    <Form
      form={form}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
        maKhoaHoc: "",
        tenKhoaHoc: "",
        biDanh: "",
        moTa: "",
        luotXem: "0",
        danhGia: "0",
        maNhom: "",
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: userState.userInfo.taiKhoan,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Mã khóa học" name="maKhoaHoc">
        <Input />
      </Form.Item>
      <Form.Item label="Tên khóa học" name="tenKhoaHoc">
        <Input />
      </Form.Item>
      <Form.Item label="Bí danh" name="biDanh">
        <Input />
      </Form.Item>
      <Form.Item label="Mô tả" name="moTa">
        <Input />
      </Form.Item>
      <Form.Item label="Lượt xem" name="luotXem">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Đánh giá" name="danhGia">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" name="hinhAnh" onChange={handleFile} />
      </Form.Item>
      <Image src={imagePreview} />
      <Form.Item label="Mã nhóm" name="maNhom">
        <Select>
          <Select.Option value="GP01">GP01</Select.Option>
          <Select.Option value="GP02">GP02</Select.Option>
          <Select.Option value="GP03">GP03</Select.Option>
          <Select.Option value="GP04">GP04</Select.Option>
          <Select.Option value="GP05">GP05</Select.Option>
          <Select.Option value="GP06">GP06</Select.Option>
          <Select.Option value="GP07">GP07</Select.Option>
          <Select.Option value="GP08">GP08</Select.Option>
          <Select.Option value="GP09">GP09</Select.Option>
          <Select.Option value="GP10">GP10</Select.Option>
          <Select.Option value="GP11">GP11</Select.Option>
          <Select.Option value="GP12">GP12</Select.Option>
          <Select.Option value="GP13">GP13</Select.Option>
          <Select.Option value="GP14">GP14</Select.Option>
          <Select.Option value="GP15">GP15</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Ngày tạo" name="ngayTao">
        <DatePicker defaultValue={moment()} />
      </Form.Item>
      <Form.Item label="Danh mục khóa học" name="maDanhMucKhoaHoc">
        <Select>
          {result.map((option) => (
            <Select.Option key={option.maDanhMuc} value={option.maDanhMuc}>
              {option.tenDanhMuc}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Tài khoản người tạo" name="taiKhoanNguoiTao">
        <Input disabled />
      </Form.Item>

      <Form.Item label="Thêm hoặc sửa">
        <Button htmlType="submit">Lưu</Button>
      </Form.Item>
    </Form>
  );
}
