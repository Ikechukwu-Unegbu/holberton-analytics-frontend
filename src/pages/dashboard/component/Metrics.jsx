// import React, { Fragment } from "react";
// import MetricCard from "../../../admin/home/components/MetricCard";
// import './Metrics.css'
// import { useState } from "react";
// import { useEffect } from "react";
// import { API_BASE_URL } from "../../../config";

// export default function Metrics({siteId, duration}){
//     const [metricsData, setMetricsData] = useState([]);
//     // console.log(siteId, "inside metrics")

//     useEffect(() => {
//         // console.log(siteId)
//     const fetchMetricsData = async () => {
//         try {
//         const response = await fetch(`${API_BASE_URL}/read-analytics-met/${siteId}/${duration}`);
        
//         const data = await response.json();
//         setMetricsData(data);
//         console.log('Metrics data:', data);
//         } catch (error) {
//         console.error('Error fetching metrics data:', error);
//         }
//     };
    
//     fetchMetricsData();
//     }, [siteId, duration]);

//     console.log(metricsData)
//     return (
//         <Fragment>
//             <div className="container metrics-container">
//             <MetricCard title="Most Visited Page" text={String(metricsData.mostVisitedPageTitle)} />
// <MetricCard title="Unique Visits" text={String(metricsData.totalRecords)} />
// <MetricCard title="All visits" text={String(metricsData.totalPageVisits)} />
// <MetricCard title="Top events" text={String(metricsData.mostRampantEvent)} />

//                 {/* <MetricCard title="Most Visited Page" text={metricsData.mostVisitedPageTitle} />
//                 <MetricCard title="Unique Visits" text={metricsData.totalRecords} />
//                 <MetricCard title="All visits" text={metricsData.totalPageVisits} />
//                 <MetricCard title="Top events" text={metricsData.mostRampantEvent} /> */}

//             </div>
//         </Fragment>
//     )
// }


import React, { Fragment, useEffect, useState } from "react";
import MetricCard from "../../../admin/home/components/MetricCard";
import './Metrics.css'
import { API_BASE_URL } from "../../../config";

export default function Metrics({ siteId, duration }) {
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    const fetchMetricsData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/read-analytics-met/${siteId}/${duration}`);
        const data = await response.json();
        console.log('Received Metrics data:', data);
        setMetricsData(data);
      } catch (error) {
        console.error('Error fetching metrics data:', error);
      }
    };

    fetchMetricsData();
  }, [siteId, duration]);

  console.log('Metrics Data:', metricsData);

  return (
    <Fragment>
      <div className="container metrics-container">
        <MetricCard title="Most Visited Page" text={(metricsData.mostVisitedPageTitle)} />
        <MetricCard title="Unique Visits" text={(metricsData.totalRecords)} />
        <MetricCard title="All visits" text={(metricsData.totalPageVisits)} />
        <MetricCard title="Top events" text={(metricsData.mostRampantEvent)} />
      </div>
    </Fragment>
  );
}
