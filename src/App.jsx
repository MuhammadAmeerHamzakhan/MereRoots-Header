import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Background from "./Components/Background/background";
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import ServicesPage from './Components/ServicesPage/ServicesPage'; 
import Login from './Components/Login';  
import Signup from './Components/Signup'; 
import AdminPanel from './Components/AdminPanel'; 
import ProtectedRoute from './Components/ProtectedRoute'; 
import "./App.css"; 

const App = () => {
  const heroData = [
    { text1: "Travel & Tickets", text2: "We Manage Your Traveling Requirements" },
    { text1: "Purchasing", text2: "Serve To Purchase From Local Market" },
    { text1: "Elder's Care", text2: "We Take Care Of Your Elders Travel" },
    { text1: "Utility Bills", text2: "We Serve To Pay Your Utility Bills" },
    { text1: "Send Gift's", text2: "Send Personalized Gifts To Your Loved Ones" },
    { text1: "Education", text2: "We Help You To Manage Your Relatives Educational Needs" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [heroData.length]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div>
        {/* Background Component */}
        <Background heroCount={heroCount} />

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
        />
        
        {/* Scroll Button to Navigate to Services */}
        <div className="scroll-button-container">
          <button onClick={scrollToServices} className="scroll-button">
            Explore Our Services
          </button>
        </div>

        {/* Services Section */}
        <section id="services-section">
          <ServicesPage />
        </section>

        {/* Route Definitions */}
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/admin"
            element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}  
          />

          {/* Catch-all Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
