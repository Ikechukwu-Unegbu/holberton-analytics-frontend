import React, { useState } from 'react';

export default function UsersTable({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Number of users to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Get users to display on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle pagination button click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <div className="table-responsive users-table mt-3">
        <h3 className="text-center text-secondary">User Table</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fullname</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="actions">
                  <button className="btn btn-sm btn-danger">Del</button>
                  <button className="btn btn-sm btn-primary">Sites</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="User pagination">
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}
