// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// // import {AuthContext} from './contexts/AuthContext'
// import { AuthContext } from './contexts/AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { loggedIn } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return loggedIn ? <Component {...props} /> : <Navigate to="/login" />;
//       }}
//     />
//   );
// };

// export default ProtectedRoute;
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
    
    if(!user) {
      return (
        <Navigate to="/login" replace/>
      );
    }
  
    return children;
  }