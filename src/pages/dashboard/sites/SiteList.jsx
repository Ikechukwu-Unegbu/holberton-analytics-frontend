import React, { useEffect, useState } from "react";
import DashMenu from "../../components/DashMenu";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Sites.css';
// import { Link } from "react-router-dom";

const SiteList = () => {
  const [sites, setSites] = useState([]);
  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [selectedSite, setSelectedSite] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("ha_user");
    const storedAccessToken = localStorage.getItem("ha_accessToken");
    // const token
    const storedUserId = userId ? JSON.parse(userId) : null;

    if (!storedUserId || !storedAccessToken) {
      console.error("Error: Access token or user ID not found.");
      return;
    }

    setUserId(storedUserId);
    setAccessToken(storedAccessToken);
  }, []);

  useEffect(() => {
    // const storedAccessToken = localStorage.getItem("ha_accessToken");
    // const token
    const userId = localStorage.getItem("ha_user");
    const storedUserId = userId ? JSON.parse(userId) : null;
    const fetchSites = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-sites/"+storedUserId?._id, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching sites");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setSites(data);
        } else {
          console.error("Error: Invalid response data");
        }
      } catch (error) {
        console.error("Error fetching sites:", error);
      }
    };

    if (userId && accessToken) {
      fetchSites();
    }
  }, [userId, accessToken]);

  const handleDeleteClick = (site) => {
    setSelectedSite(site);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedSite(null);
    setShowDeleteModal(false);
  };

  const handleDeleteSite = async () => {
    if (selectedSite) {
      try {
        await fetch(`http://localhost:5000/sites/delete/${selectedSite._id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const updatedSites = sites.filter(site => site._id !== selectedSite._id);
        setSites(updatedSites);
      } catch (error) {
        console.error("Error deleting site:", error);
      }
    }

    handleCloseDeleteModal();
  };

  const handleEditClick = (site) => {
    setSelectedSite(site);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      <DashMenu />
      <h3 className="text-center text-secondary">Site List</h3>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">URL</th>
              <th scope="col">Name</th>
              <th scope="col">Primary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site._id}>
                <td>{site.url}</td>
                <td>{site.name}</td>
                <td>{site.primary}</td>
                <td className="action_holder">
                  <button className="btn btn-sm btn-primary">View</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(site)}>Del</button>
                  <button className="btn btn-sm btn-primary" onClick={() => handleEditClick(site)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Site</Modal.Title>
        </Modal.Header>
        {selectedSite && (
          <Modal.Body>
            <p>Are you sure you want to delete the following site?</p>
            <p>URL: {selectedSite.url}</p>
            <p>Name: {selectedSite.name}</p>
            <p>Primary: {selectedSite.primary}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteSite}>
            Delete site
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={handleCloseEditModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Site</Modal.Title>
        </Modal.Header>
        {selectedSite && (
          <Modal.Body>
            <p>Edit the following site:</p>
            <p>URL: {selectedSite.url}</p>
            <p>Name: {selectedSite.name}</p>
            <p>Primary: {selectedSite.primary}</p>
            {/* Add form fields for editing the site */}
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SiteList;
