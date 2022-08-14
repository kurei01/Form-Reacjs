import React, { useState } from "react";
import Form from "./Form";
import UserList from "./UserList";

function Home() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  //didmount, didupdate, willunmount
  // useEffect(() => {
  //   console.log("did mount");
  //   //call api
  //   return () => {
  //     console.log("will unMount");
  //   };
  // }, []);

  function createUser(user) {
    const foundUser = userList.find((item) => {
      return item.username === user.username;
    });

    if (foundUser) return alert("username is valid");

    setUserList([...userList, user]);
  }

  function deleteUser(userId) {
    const cloneUserList = [...userList];
    const index = cloneUserList.findIndex((user) => user.id === userId);
    if (index === -1) return;
    cloneUserList.splice(index, 1);
    setUserList([...cloneUserList]);
  }

  function getUpdateUser(user) {
    setSelectedUser(user);
  }

  function updateUser(user) {
    const cloneUserList = [...userList];
    const index = cloneUserList.findIndex((item) => item.id === user.id);
    if (index === -1) return;
    cloneUserList[index] = user;
    //automatic batching
    setUserList([...cloneUserList]);
    setSelectedUser(null);
  }

  return (
    <div>
      <h1 style={{ marginLeft: "1.5rem" }}>Quản Lý User</h1>
      <Form
        createUser={createUser}
        selectedUser={selectedUser}
        updateUser={updateUser}
      />
      <UserList
        getUpdateUser={getUpdateUser}
        deleteUser={deleteUser}
        users={userList}
      />
    </div>
  );
}

export default Home;
