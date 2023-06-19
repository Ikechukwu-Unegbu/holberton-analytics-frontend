import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DurationsDropdown({  onSiteSelect }) {
  const handleItemClick = (value) => {
    onSiteSelect(value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Period 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
                href=''
                onClick={() => handleItemClick('today')}
            >Today</Dropdown.Item>
               <Dropdown.Item
                href=''
                onClick={() => handleItemClick('week')}
            >Week</Dropdown.Item>
               <Dropdown.Item
                href=''
                onClick={() => handleItemClick('month')}
            >Month</Dropdown.Item>
               <Dropdown.Item
                href=''
                onClick={() => handleItemClick('infinity')}
            >Infinity</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DurationsDropdown;
