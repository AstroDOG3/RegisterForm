import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated && isAuthenticated.username === 'mixzapop153' && isAuthenticated.password === 'mixzas123' ? (
    <Route {...rest} element={element} />
    
  ) : (
    <Navigate to = "/homepage"/>
  );
};


export default ProtectedRoute;
