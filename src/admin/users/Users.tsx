import React, { Fragment } from 'react';
import DashMenu from '../components/DashMenu';

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
    <Fragment>
      <DashMenu/>
      <main className="container">
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Fragment>
  );
};

export default Users;
