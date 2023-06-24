// libs/admincalls.js
import {API_BASE_URL} from '../config.js';
// Function to make an API call to fetch admin metrics
export const getAdminMetric = async () => {
    try {
      // Retrieve the access token and logged-in user ID from localStorage
      const accessToken = localStorage.getItem('ha_accessToken');
      const userId = localStorage.getItem('ha_user');
      
      // Make sure the access token and user ID are available
      if (!accessToken || !userId) {
        throw new Error('Access token or user ID not found');
      }
      
      // Construct the headers with the access token
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
  
      // Make the API call using the Fetch API with the headers
      const response = await fetch(API_BASE_URL+'/admin/metrics', { headers });
      
      // Check if the response was successful
      if (!response.ok) {
        throw new Error('Failed to fetch admin metrics');
      }
      
      // Parse the response data as JSON
      const data = await response.json();
      
      // Return the response data
      return data;
    } catch (error) {
      // Handle any error that occurs during the API call
      console.error('Error fetching admin metric:', error);
      throw error; // Optionally rethrow the error or handle it in a specific way
    }
  };
  