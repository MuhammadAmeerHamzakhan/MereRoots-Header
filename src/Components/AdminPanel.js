// src/components/AdminPanel.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
      if (decodedToken.role !== 'admin') {
        navigate('/'); // Redirect if user is not an admin
      } else {
        setIsAdmin(true);
      }
    } else {
      navigate('/login'); // Redirect to login if no token
    }
  }, [navigate]);

  if (!isAdmin) return null; // Don't render anything until we confirm the role

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, you are logged in as an Admin!</p>
    </div>
  );
};

export default AdminPanel;
