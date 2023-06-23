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
