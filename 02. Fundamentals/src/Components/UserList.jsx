import React from "react";

const UserList = () => {
  const Users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div>
      {Users.map((u) => (
        <div key={u.id}>
          <p>name:{u.name}</p>
          <p>age:{u.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
