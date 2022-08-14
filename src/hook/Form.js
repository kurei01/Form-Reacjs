import React, { useEffect, useState } from "react";
import { Button, Card, Input, message, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./form.module.css";
import * as yup from "yup";
import isEmpty from "lodash.isempty";
const { Option } = Select;

let userSchema = yup.object().shape({
  username: yup.string().required("*Vui lòng nhập tài khoản"),
  password: yup
    .string()
    .required("*Vui lòng nhập mật khẩu")
    .min(8, "*Nhập ít nhất 8 ký tự")
    .max(16, "*Nhập tối đa 16 ký tự"),
  name: yup
    .string()
    .required("*Vui lòng nhập họ tên")
    .matches(/^[A-Za-z ]+$/g, "*Họ tên phải nhập chữ"),
  phone: yup
    .string()
    .required("*Vui lòng nhập số điện thoại")
    .matches(/^[0-9]+$/g),
  email: yup
    .string()
    .required("*Vui lòng nhập email")
    .email("*Email không đúng định dạng"),
  role: yup.string().required("*Vui lòng nhập mã loại người dùng"),
});

function Form(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    email: "",
    role: "",
  });

  const [errors, setError] = useState([]);

  useEffect(() => {
    if (!props.selectedUser) return;
    if (props.selectedUser.id === user.id) return;

    setUser(props.selectedUser);
  }, [props.selectedUser]); //eslint-disable-line

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSelect(name, value) {
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) return;

    if (props.selectedUser) props.updateUser(user);
    else
      props.createUser({ ...user, id: Math.floor(Math.random() * 1000 + 1) });
    resetForm();
  }

  async function validateForm() {
    const validationErrors = {};
    try {
      await userSchema.validate(user, { abortEarly: false });
    } catch (error) {
      const errObj = { ...error };
      errObj.inner.forEach((validationError) => {
        if (validationErrors[validationError.path]) return;
        validationErrors[validationError.path] = validationError.message;
      });
      console.log(validationErrors);
      setError(validationErrors);
    }

    return isEmpty(validationErrors);
  }

  function resetForm() {
    setUser({
      username: "",
      password: "",
      name: "",
      phone: "",
      email: "",
      role: "",
    });
  }

  return (
    <Card
      title="Form Đăng ký"
      headStyle={{
        backgroundColor: "#000",
        color: "#fff",
      }}
      size="default"
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Tài khoản</label>
          <Input
            value={user?.username}
            name="username"
            onChange={handleChange}
            placeholder="Tài khoản"
            prefix={<UserOutlined />}
          />
          <span>{errors.username}</span>
        </div>

        <div className={styles.formGroup}>
          <label>Họ tên</label>
          <Input
            value={user?.name}
            name="name"
            onChange={handleChange}
            placeholder="Họ tên"
            prefix={<UserOutlined />}
          />
          <span>{errors.name}</span>
        </div>

        <div className={styles.formGroup}>
          <label>Mật khẩu</label>
          <Input
            name="password"
            value={user?.password}
            onChange={handleChange}
            placeholder="Mật khẩu"
            type="password"
            prefix={<UserOutlined />}
          />
          <span>{errors.password}</span>
        </div>

        <div className={styles.formGroup}>
          <label>Số điện thoại</label>
          <Input
            value={user?.phone}
            name="phone"
            onChange={handleChange}
            placeholder="Số điện thoại"
            prefix={<UserOutlined />}
          />
          <span>{errors.phone}</span>
        </div>

        <div className={styles.formGroup}>
          <label>email</label>
          <Input
            value={user?.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
            prefix={<UserOutlined />}
          />
          <span>{errors.email}</span>
        </div>

        <div className={styles.formGroup}>
          <label>Mã loại người dùng</label>
          <Select
            value={user?.role}
            onChange={(val) => handleSelect("role", val)}
            className={styles.select}
          >
            <Option value="khachHang">Khách hàng</Option>
            <Select.Option value="quanTri">Quản trị viên</Select.Option>
          </Select>
          <span>{errors.role}</span>
        </div>

        <div className={styles.btn}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button onClick={resetForm} type="danger">
            Reset
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
