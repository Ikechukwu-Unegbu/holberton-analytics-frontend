import React, { useEffect } from "react";
import Menu from "./components/Menu";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("ha_user");
    localStorage.removeItem("ha_accessToken");
    console.log("Successfully logged out");
  }, []);

  return (
    <div className="container">
        <Menu/>
      <h4 className="text-center">Successfully logged out</h4>
        <div className="container">
            <a href="" className="btn btn-sm btn-secondary">Go to Home Page</a>
        </div>
    </div>
  );
}
