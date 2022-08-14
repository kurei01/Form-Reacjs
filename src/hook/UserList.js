import React from "react";
import { Button, Card, Space, Table, Tag } from "antd";

function UserList(props) {
  // const userList = [
  //   {
  //     id: 1,
  //     key: 1,
  //     username: "hieudang",
  //     name: "Hieu Dang",
  //     phone: "0123123",
  //     email: "hieu@gmail.com",
  //     role: "khachHang",
  //   },
  //   {
  //     id: 2,
  //     key: 2,
  //     username: "dunghoang",
  //     name: "Dung Hoang",
  //     phone: "23823092034",
  //     email: "dung@gmail.com",
  //     role: "quanTri",
  //   },
  // ];
  const column = [
    { title: "ID", dataIndex: "id" },
    {
      title: "Tài khoản",
      dataIndex: "username",
      render: (_, user) => {
        return <b>{user.username}</b>;
      },
    },
    { title: "Họ tên", dataIndex: "name" },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, user) => {
        return <i> {user.email}</i>;
      },
    },
    { title: "Số điện thoại", dataIndex: "phone" },
    { title: "Mã loại người dùng", dataIndex: "role" },
    {
      title: "",
      key: "action",
      render: (_, user) => {
        return (
          <>
            <Button onClick={() => props.getUpdateUser(user)} type="primary">
              Chỉnh sửa
            </Button>
            <Button onClick={() => props.deleteUser(user.id)} type="danger">
              Xoá
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Card
      title="Danh sách người dùng"
      headStyle={{
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Table
        dataSource={props.users.map((user) => {
          return { ...user, key: user.id };
        })}
        columns={column}
      />
    </Card>
  );
}

export default UserList;
