// import React, { useEffect, useState } from 'react';
// import DashMenu from '../components/DashMenu';
// import SitesDropdown from './component/SitesDropdown';
// import DurationsDropdown from './component/DurationsDropdown';
// import { API_BASE_URL } from '../../config.js';
// import './Dashboard.css';

// type EventTypeCounts = {
//   click: number;
//   download: number;
//   submit: number;
// };

// type Site = {
//   id: string;
//   name: string;
//   // Add any other properties you have for a site
// };

// type Analytics = {
//   _id: string;
//   owner: string;
//   referral: string;
//   user_browser: string;
//   long:string;
//   lat:string;
//   user_os: {
//     architecture: string;
//     family: string;
//     version: string;
//   };
//   request: {
//     request_id: string;
//     request_returns: string | number;
//     request_duration: string | number;
//   };
//   events: {
//     _id: string;
//     eventType: string;
//     page_title: string;
//   }[];
//   pages: {
//     _id: string;
//     page_url: string;
//     page_title: string;
//     page_number: string;
//     perfomance: {
//       page_loadtime: string | number;
//       fcp: string | number;
//       tti: string | number;
//       fmp: string | string;
//       loadeventime: string | number;
//     }[];
//     // Add more properties as needed
//   }[];
// };

// type DashboardProps = {
//   // Define the props you want to pass to the component
// };

// const Dashboard: React.FC<DashboardProps> = (props) => {
//   const [sites, setSites] = useState<Site[]>([]);
//   const [analytics, setAnalytics] = useState<Analytics[]>([]);
//   const [selectedSite, setSelectedSite] = useState<string>('first');
//   const [selectedDuration, setSelectedDuration] = useState<string>('today');

//   useEffect(() => {
//     // Fetch sites data
//     // const userId = localStorage.getItem('ha_user');
//     const token = localStorage.getItem('ha_accessToken');

//     const userId = localStorage.getItem('ha_user');
//     const storedUserId = userId ? JSON.parse(userId) : null;

//     fetch(`${API_BASE_URL}/all-sites/${storedUserId._id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSites(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching sites:', error);
//       });
//   }, []);

//   const selectedSiteHandler = (siteName: string) => {
//     setSelectedSite(siteName);
//     console.log(`Selected site: ${siteName}`);
//     // Perform any additional actions with the selected site value
//   };

//   const onDurationHandler = (duration: string) => {
//     setSelectedDuration(duration);
//     console.log(`Selected duration: ${duration}`);
//     // Perform any additional actions with the selected duration value
//   };

//   useEffect(() => {
//     const callAnalyticsAPI = () => {
//       // const userId = localStorage.getItem('ha_user');
//       // const storedUserId = userId ? JSON.parse(userId) : null;
//       const token = localStorage.getItem('ha_accessToken');
//       let url = `${API_BASE_URL}/analytics/${selectedDuration}/${selectedSite}`;
//       console.log(url);
//       fetch(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Process the response data
//           setAnalytics(data);
//           console.log('Analytics data:', data);
//         })
//         .catch((error) => {
//           console.error('Error fetching analytics data:', error);
//         });
//     };

//     // Call the analytics API whenever selectedSite or selectedDuration changes
//     callAnalyticsAPI();
//   }, [selectedSite, selectedDuration]);

//   const getEventTypeCounts = (events: Analytics['events']) => {
//     const eventTypeCounts: EventTypeCounts = {
//       click: 0,
//       download: 0,
//       submit: 0,
//     };

//     events.forEach((event) => {
//       if (event.eventType === 'click') {
//         eventTypeCounts.click++;
//       } else if (event.eventType === 'download') {
//         eventTypeCounts.download++;
//       } else if (event.eventType === 'submit') {
//         eventTypeCounts.submit++;
//       }
//     });

//     return eventTypeCounts;
//   };

//   return (
//     <div>
//       <DashMenu />
//       <div className="container">
//         <div className="mt-3 dashboard-controls">
//           <SitesDropdown sitelists={sites} onSiteSelect={selectedSiteHandler} />
//           <DurationsDropdown onSiteSelect={onDurationHandler} />
//         </div>
//         <div className="analytics">
//           <div className="container">
//             {selectedSite === 'first' ? (
//               <h4 className="text-center">Select a Site</h4>
//             ) : (
//               // <p>This is not the first element.</p>
//               <h4 className="text-center"></h4>
//             )}
//           </div>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">UserAgent</th>
//                 <th scope="col">Request</th>
//                 <th scope="col">Referral</th>
//                 <th>Pages</th>
//                 <th>Page Titles</th>
//                 <th>Events</th>
//               </tr>
//             </thead>
//             <tbody>
//               {analytics.map((analytic, index) => (
//                 <tr key={analytic._id}>
//                   <th scope="row">{index}</th>
//                   <td>
//                     {analytic.user_browser} | {analytic.user_os.family} - {analytic.user_os.version}
//                   </td>
//                   <td>{analytic.request.request_returns}</td>
//                   <td>{analytic.referral}</td>
//                   <td>{analytic.pages.length}</td>
//                   <td>
//                     <ul className="list-group">
//                       {analytic.pages.map((page, index) => (
//                         <li className="list-group-item" key={index}>
//                           {page.page_title}
//                         </li>
//                       ))}
//                     </ul>
//                   </td>
//                   <td>
//                     {getEventTypeCounts(analytic.events).click} clicks,{' '}
//                     {getEventTypeCounts(analytic.events).download} downloads,{' '}
//                     {getEventTypeCounts(analytic.events).submit} submits
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;







// import React, { useEffect, useState } from 'react';
// import DashMenu from '../components/DashMenu';
// import SitesDropdown from './component/SitesDropdown';
// import DurationsDropdown from './component/DurationsDropdown';
// import { API_BASE_URL } from '../../config.js';
// import './Dashboard.css';

// type EventTypeCounts = {
//   click: number;
//   download: number;
//   submit: number;
// };

// type Site = {
//   id: string;
//   name: string;
//   // Add any other properties you have for a site
// };

// type Location = {
//   city: string;
//   country: string;
// };

// type Analytics = {
//   _id: string;
//   owner: string;
//   referral: string;
//   user_browser: string;
//   long: string;
//   lat: string;
//   user_os: {
//     architecture: string;
//     family: string;
//     version: string;
//   };
//   request: {
//     request_id: string;
//     request_returns: string | number;
//     request_duration: string | number;
//   };
//   events: {
//     _id: string;
//     eventType: string;
//     page_title: string;
//   }[];
//   pages: {
//     _id: string;
//     page_url: string;
//     page_title: string;
//     page_number: string;
//     perfomance: {
//       page_loadtime: string | number;
//       fcp: string | number;
//       tti: string | number;
//       fmp: string | string;
//       loadeventime: string | number;
//     }[];
//     // Add more properties as needed
//   }[];
// };

// type DashboardProps = {
//   // Define the props you want to pass to the component
// };

// const Dashboard: React.FC<DashboardProps> = (props) => {
//   const [sites, setSites] = useState<Site[]>([]);
//   const [analytics, setAnalytics] = useState<Analytics[]>([]);
//   const [selectedSite, setSelectedSite] = useState<string>('first');
//   const [selectedDuration, setSelectedDuration] = useState<string>('today');
//   const [locations, setLocations] = useState<{ [key: string]: Location }>({});

//   useEffect(() => {
//     const fetchSitesData = async () => {
//       try {
//         const token = localStorage.getItem('ha_accessToken');
//         const userId = localStorage.getItem('ha_user');
//         const storedUserId = userId ? JSON.parse(userId) : null;

//         const response = await fetch(`${API_BASE_URL}/all-sites/${storedUserId._id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         setSites(data);
//       } catch (error) {
//         console.error('Error fetching sites:', error);
//       }
//     };

//     fetchSitesData();
//   }, []);

//   useEffect(() => {
//     const fetchAnalyticsData = async () => {
//       try {
//         const token = localStorage.getItem('ha_accessToken');
//         const url = `${API_BASE_URL}/analytics/${selectedDuration}/${selectedSite}`;
//         const response = await fetch(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         setAnalytics(data);
//         console.log('Analytics data:', data);
//       } catch (error) {
//         console.error('Error fetching analytics data:', error);
//       }
//     };

//     fetchAnalyticsData();
//   }, [selectedSite, selectedDuration]);

//   useEffect(() => {
//     const fetchLocationData = async () => {
//       try {
//         // console.log(analyt)
//         const locationPromises = analytics.map((analytic) => {
//           console.log(analytic.lat)
//           console.log(analytic.long)
//           const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${analytic.lat}&lon=${analytic.long}`;
//           return fetch(url).then((response) => response.json());
//         });

//         const locationResponses = await Promise.all(locationPromises);

//         const newLocations: { [key: string]: Location } = {};

//         locationResponses.forEach((response, index) => {
//           const { city, country } = response.address;
//           const locationKey = `${analytics[index].lat}-${analytics[index].long}`;
//           newLocations[locationKey] = { city, country };
//         });

//         setLocations(newLocations);
//       } catch (error) {
//         console.error('Error fetching location data:', error);
//       }
//     };

//     fetchLocationData();
//   }, [analytics]);

//   const selectedSiteHandler = (siteName: string) => {
//     setSelectedSite(siteName);
//     console.log(`Selected site: ${siteName}`);
//     // Perform any additional actions with the selected site value
//   };

//   const onDurationHandler = (duration: string) => {
//     setSelectedDuration(duration);
//     console.log(`Selected duration: ${duration}`);
//     // Perform any additional actions with the selected duration value
//   };

//   const getEventTypeCounts = (events: Analytics['events']) => {
//     const eventTypeCounts: EventTypeCounts = {
//       click: 0,
//       download: 0,
//       submit: 0,
//     };

//     events.forEach((event) => {
//       if (event.eventType === 'click') {
//         eventTypeCounts.click++;
//       } else if (event.eventType === 'download') {
//         eventTypeCounts.download++;
//       } else if (event.eventType === 'submit') {
//         eventTypeCounts.submit++;
//       }
//     });

//     return eventTypeCounts;
//   };

//   return (
//     <div>
//       <DashMenu />
//       <div className="container">
//         <div className="mt-3 dashboard-controls">
//           <SitesDropdown sitelists={sites} onSiteSelect={selectedSiteHandler} />
//           <DurationsDropdown onSiteSelect={onDurationHandler} />
//         </div>
//         <div className="analytics">
//           <div className="container">
//             {selectedSite === 'first' ? (
//               <h4 className="text-center">Select a Site</h4>
//             ) : (
//               // <p>This is not the first element.</p>
//               <h4 className="text-center"></h4>
//             )}
//           </div>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">UserAgent</th>
//                 <th scope="col">Request</th>
//                 <th scope="col">Referral</th>
//                 <th>Pages</th>
//                 <th>Page Titles</th>
//                 <th>Location</th>
//                 <th>Events</th>
//               </tr>
//             </thead>
//             <tbody>
//               {analytics.map((analytic, index) => (
//                 <tr key={analytic._id}>
//                   <th scope="row">{index}</th>
//                   <td>
//                     {analytic.user_browser} | {analytic.user_os.family} - {analytic.user_os.version}
//                   </td>
//                   <td>{analytic.request.request_returns}</td>
//                   <td>{analytic.referral}</td>
//                   <td>{analytic.pages.length}</td>
//                   <td>
//                     <ul className="list-group">
//                       {analytic.pages.map((page, index) => (
//                         <li className="list-group-item" key={index}>
//                           {page.page_title}
//                         </li>
//                       ))}
//                     </ul>
//                   </td>
//                   <td>
//                     {locations[`${analytic.lat}-${analytic.long}`]?.city},{' '}
//                     {locations[`${analytic.lat}-${analytic.long}`]?.country}
//                   </td>
//                   <td>
//                     {getEventTypeCounts(analytic.events).click} clicks,{' '}
//                     {getEventTypeCounts(analytic.events).download} downloads,{' '}
//                     {getEventTypeCounts(analytic.events).submit} submits
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React, { useEffect, useState } from 'react';
import DashMenu from '../components/DashMenu';
import SitesDropdown from './component/SitesDropdown';
import DurationsDropdown from './component/DurationsDropdown';
import { API_BASE_URL } from '../../config.js';
import './Dashboard.css';

type EventTypeCounts = {
  click: number;
  download: number;
  submit: number;
};

type Site = {
  id: string;
  name: string;
  // Add any other properties you have for a site
};

type Location = {
  city: string;
  country: string;
};

type Analytics = {
  _id: string;
  owner: string;
  referral: string;
  user_browser: string;
  long: string;
  lat: string;
  user_os: {
    architecture: string;
    family: string;
    version: string;
  };
  request: {
    request_id: string;
    request_returns: string | number;
    request_duration: string | number;
  };
  events: {
    _id: string;
    eventType: string;
    page_title: string;
  }[];
  pages: {
    _id: string;
    page_url: string;
    page_title: string;
    page_number: string;
    perfomance: {
      page_loadtime: string | number;
      fcp: string | number;
      tti: string | number;
      fmp: string | string;
      loadeventime: string | number;
    }[];
    // Add more properties as needed
  }[];
};

type DashboardProps = {
  // Define the props you want to pass to the component
};

const Dashboard: React.FC<DashboardProps> = (props) => {
  const [sites, setSites] = useState<Site[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [selectedSite, setSelectedSite] = useState<string>('first');
  const [siteName, setSiteName] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('today');
  const [locations, setLocations] = useState<{ [key: string]: Location }>({});

  useEffect(() => {
    const fetchSitesData = async () => {
      try {
        const token = localStorage.getItem('ha_accessToken');
        const userId = localStorage.getItem('ha_user');
        const storedUserId = userId ? JSON.parse(userId) : null;

        const response = await fetch(`${API_BASE_URL}/all-sites/${storedUserId._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setSites(data);
      } catch (error) {
        console.error('Error fetching sites:', error);
      }
    };

    fetchSitesData();
  }, []);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const token = localStorage.getItem('ha_accessToken');
        const url = `${API_BASE_URL}/analytics/${selectedDuration}/${selectedSite}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setAnalytics(data);
        console.log('Analytics data:', data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchAnalyticsData();
  }, [selectedSite, selectedDuration]);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const locationPromises = analytics.map((analytic) => {
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${analytic.lat}&lon=${analytic.long}`;
          return fetch(url)
            .then((response) => response.json())
            .catch((error) => {
              console.error('Error fetching location data:', error);
              return null;
            });
        });

        const locationResponses = await Promise.all(locationPromises);

        const newLocations: { [key: string]: Location } = {};

        locationResponses.forEach((response, index) => {
          if (response && response.address) {
            const { city, country } = response.address;
            const locationKey = `${analytics[index].lat}-${analytics[index].long}`;
            newLocations[locationKey] = { city, country };
          }
        });

        setLocations(newLocations);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, [analytics]);

  const selectedSiteHandler = (siteName: string) => {
    setSelectedSite(siteName);
    console.log(`Selected site: ${siteName}`);
    // Perform any additional actions with the selected site value
  };

  const siteNameHandler = (siteName: string) => {
    setSiteName(siteName);
    console.log(`Selected site: ${siteName}`);
    // Perform any additional actions with the selected site value
  };

  const onDurationHandler = (duration: string) => {
    setSelectedDuration(duration);
    console.log(`Selected duration: ${duration}`);
    // Perform any additional actions with the selected duration value
  };

  const getEventTypeCounts = (events: Analytics['events']) => {
    const eventTypeCounts: EventTypeCounts = {
      click: 0,
      download: 0,
      submit: 0,
    };

    events.forEach((event) => {
      if (event.eventType === 'click') {
        eventTypeCounts.click++;
      } else if (event.eventType === 'download') {
        eventTypeCounts.download++;
      } else if (event.eventType === 'submit') {
        eventTypeCounts.submit++;
      }
    });

    return eventTypeCounts;
  };

  return (
    <div>
      <DashMenu />
      <div className="container">
        <div className="mt-3 dashboard-controls">
          <SitesDropdown sitelists={sites} onSiteSelect={selectedSiteHandler} getSiteName={siteNameHandler}/>
          <DurationsDropdown onSiteSelect={onDurationHandler} />
        </div>
        <div className="analytics">
         
          <h4 className="mt-3 text-center">
            {siteName ? `${siteName}'s Analytics` : 'Select Site Please'}
          </h4>

          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UserAgent</th>
                <th scope="col">Request</th>
                <th scope="col">Referral</th>
                <th>Pages</th>
                <th>Page Titles</th>
                <th>Location</th>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              {analytics.map((analytic, index) => (
                <tr key={analytic._id}>
                  <th scope="row">{index}</th>
                  <td>
                    {analytic.user_browser} | {analytic.user_os.family} - {analytic.user_os.version}
                  </td>
                  <td>{analytic.request.request_returns}</td>
                  <td>{analytic.referral}</td>
                  <td>{analytic.pages.length}</td>
                  <td>
                    <ul className="list-group">
                      {analytic.pages.map((page, index) => (
                        <li className="list-group-item" key={index}>
                          {page.page_title} ({page.page_number})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    {locations[`${analytic.lat}-${analytic.long}`]?.city} -{' '}
                    {locations[`${analytic.lat}-${analytic.long}`]?.country}
                  </td>
                  <td>
                    {getEventTypeCounts(analytic.events).click} clicks,{' '}
                    {getEventTypeCounts(analytic.events).download} downloads,{' '}
                    {getEventTypeCounts(analytic.events).submit} submits
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
