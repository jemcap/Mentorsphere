import React, { useState, useEffect } from "react";
import { User } from "../types";
import { userService } from "../api/services/user-service.service";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await userService.getUsers();
      console.log("Fetched users:", users);
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <ul>
      {users.map((user) => (
        <li>
          {user.name}
          {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
