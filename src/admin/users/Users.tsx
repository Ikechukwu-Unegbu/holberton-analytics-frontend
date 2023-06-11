import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersProps {
  users: User[][];
}

const Users: React.FC<UsersProps> = () => {
  const userList1: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  const userList2: User[] = [
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
  ];

  const users: User[][] = [userList1, userList2];

  return (
    <div>
      <h1>Users</h1>
      {users.map((userList, index) => (
        <ul key={index}>
          {userList.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Users;
