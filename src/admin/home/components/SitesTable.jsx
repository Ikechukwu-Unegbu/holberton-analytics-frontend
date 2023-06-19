import React, { useState } from 'react';

const SitesTable = ({ sites }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sitesPerPage = 5; // Number of sites to display per page

  // Calculate total number of pages
  const totalPages = Math.ceil(sites.length / sitesPerPage);

  // Get sites to display on the current page
  const indexOfLastSite = currentPage * sitesPerPage;
  const indexOfFirstSite = indexOfLastSite - sitesPerPage;
  const currentSites = sites.slice(indexOfFirstSite, indexOfLastSite);

  // Handle pagination button click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <div className="table-responsive sites-table mt-3">
        <h3 className="text-center text-secondary">Sites Table</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">URL</th>
              <th scope="col">Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentSites.map((site, index) => (
              <tr key={site._id}>
                <th scope="row">{index + 1}</th>
                <td>{site.name}</td>
                <td>{site.url}</td>
                <td>{site.owner}</td>
                <td className="actions">
                  <button className="btn btn-sm btn-danger">Sups.</button>
                  <button className="btn btn-sm btn-primary">Owner</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <nav aria-label="Site pagination">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
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
      )}
    </React.Fragment>
  );
};

export default SitesTable;
