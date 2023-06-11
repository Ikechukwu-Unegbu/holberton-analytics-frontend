import React from 'react';

interface SitesProps {
  title: string;
}

const Sites: React.FC<SitesProps> = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>This is the Sites component.</p>
    </div>
  );
};

export default Sites;
