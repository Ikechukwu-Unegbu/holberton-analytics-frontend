import React, { useEffect, useState } from "react";
import DashMenu from "../../components/DashMenu";

const SiteList = () => {
  const [sites, setSites] = useState([]);
  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("ha_user");
    const storedAccessToken = localStorage.getItem("ha_accessToken");

    setUserId(storedUserId);
    setAccessToken(storedAccessToken);
  }, []);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch(`/sites/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setSites(data);
      } catch (error) {
        console.error("Error fetching sites:", error);
      }
    };

    if (userId && accessToken) {
      fetchSites();
    }
  }, [userId, accessToken]);

  return (
    <div>
      <DashMenu/>
      <h1>Site List</h1>
      {sites.map((site) => (
        <div key={site.id}>
          <h3>{site.name}</h3>
          <p>{site.description}</p>
          <p>Owner: {site.owner}</p>
        </div>
      ))}
    </div>
  );
};

export default SiteList;
