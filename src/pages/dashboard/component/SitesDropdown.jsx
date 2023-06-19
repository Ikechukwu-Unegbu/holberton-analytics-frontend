import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function SitesDropdown({ sitelists, onSiteSelect }) {
  const handleItemClick = (value) => {
    onSiteSelect(value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Select Site
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {sitelists.map((site) => (
          <Dropdown.Item
            key={site._id}
            id={site._id}
            href={`#${site._id}`}
            onClick={() => handleItemClick(site._id)}
          >
            {site.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SitesDropdown;
