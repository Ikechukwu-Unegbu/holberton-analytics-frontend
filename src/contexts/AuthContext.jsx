import React, { createContext, useState } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider component
export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Method to update the login state
  const login = () => {
    setLoggedIn(true);
  };

  // Method to update the logout state
  const logout = () => {
    setLoggedIn(false);
  };

  // Create the context value object
  const authContextValue = {
    loggedIn,
    login,
    logout,
  };

  // Provide the authContextValue to the children components
  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
