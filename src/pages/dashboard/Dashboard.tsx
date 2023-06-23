import React, { useEffect, useState } from 'react';
import DashMenu from '../components/DashMenu';
import SitesDropdown from './component/SitesDropdown';
import DurationsDropdown from './component/DurationsDropdown';
import {API_BASE_URL} from '../../config.js'

type Site = {
  id: string;
  name: string;
  // Add any other properties you have for a site
};

type DashboardProps = {
  // Define the props you want to pass to the component
};

const Dashboard: React.FC<DashboardProps> = (props) => {
  const [sites, setSites] = useState<Site[]>([]);
  const [selectedSite, setSelectedSite] = useState<string>('first');
  const [selectedDuration, setSelectedDuration] = useState<string>('today');

  useEffect(() => {
    // Fetch sites data
    // const userId = localStorage.getItem('ha_user');
    const token = localStorage.getItem('ha_accessToken');

    const userId = localStorage.getItem('ha_user');
    const storedUserId = userId ? JSON.parse(userId) : null;

    fetch(`${API_BASE_URL}/all-sites/${storedUserId._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSites(data);
      })
      .catch((error) => {
        console.error('Error fetching sites:', error);
      });
  }, []);

  const selectedSiteHandler = (siteName: string) => {
    setSelectedSite(siteName);
    console.log(`Selected site: ${siteName}`);
    // Perform any additional actions with the selected site value
  };

  const onDurationHandler = (duration: string) => {
    setSelectedDuration(duration);
    console.log(`Selected duration: ${duration}`);
    // Perform any additional actions with the selected duration value
  };

  useEffect(() => {
    const callAnalyticsAPI = () => {
      // const userId = localStorage.getItem('ha_user');
      // const storedUserId = userId ? JSON.parse(userId) : null;
      const token = localStorage.getItem('ha_accessToken')

      fetch(`${API_BASE_URL}/analytics/${selectedDuration}/${selectedSite}`, {
        headers: { 
          Authorization: `Bearer ${token}`,
        },
      }) 
        .then((response) => response.json())
        .then((data) => {
          // Process the response data
          console.log('Analytics data:', data);
        })
        .catch((error) => {
          console.error('Error fetching analytics data:', error);
        });
    };

    // Call the analytics API whenever selectedSite or selectedDuration changes
    callAnalyticsAPI();
  }, [selectedSite, selectedDuration]);

  return (
    <div>
      <DashMenu />
      <div className="container">
        <div className="mt-3">
          <SitesDropdown sitelists={sites} onSiteSelect={selectedSiteHandler} />
          <DurationsDropdown onSiteSelect={onDurationHandler} />
        </div>
        <div className="analytics">{/* Display analytics data here */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
