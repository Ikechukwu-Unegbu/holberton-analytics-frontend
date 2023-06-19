import React, { useState } from 'react';
import DashMenu from '../../components/DashMenu';
import './Sites.css';

type NewsiteProps = {
  // Define the props you want to pass to the component
};

const Newsite: React.FC<NewsiteProps> = (props) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [siteType, setSiteType] = useState('Primary site');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setName(e.target.value);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSiteType(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Retrieve access token and user ID from local storage
    const accessToken = localStorage.getItem("ha_accessToken");
    const userData = localStorage.getItem("ha_user");
    const userId = userData ? JSON.parse(userData) : null;
  
    if (!accessToken || !userId) {
      setMessage("Error: Access token or user ID not found.");
      return;
    }
  
    // Perform form submission to the desired endpoint
    // You can make an API request using fetch or axios
  
    // Example API request using fetch
    fetch(`http://localhost:5000/post_site/${userId?.username}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        url,
        owner: userId?.email,
        primary:siteType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('posted')
        console.log(data)
        setMessage("Form submitted successfully!");
        // Clear the form fields
        setName("");
        setUrl("");
        setSiteType("Primary site");
      })
      .catch((error) => {
        setMessage("Error submitting the form. Please try again.");
        console.error("Error:", error);
      });
  };
  

  return (
    <div>
      <DashMenu />
      <div className="container p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <h4 className="text-dark text-center">Add Site to Track</h4>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="sitename"
              className="form-control"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="" className="form-label">
              Url
            </label>
            <input
              type="text"
              placeholder="https://"
              className="form-control"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="" className="form-label">
              Site type:
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={siteType}
              onChange={handleSiteTypeChange}
            >
              <option value="Primary site">Primary site</option>
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <button type="submit" className="btn float_btn btn-primary">
              Add New Site
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Newsite;
