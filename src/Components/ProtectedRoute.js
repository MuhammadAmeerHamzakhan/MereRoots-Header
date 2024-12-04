import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  // Get the token from localStorage
  const token = localStorage.getItem('token');

  // Check if the user is authenticated (token exists)
  const isAuthenticated = token !== null;

  // If authenticated, render the element (i.e., the protected component)
  // Otherwise, redirect to the login page
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
