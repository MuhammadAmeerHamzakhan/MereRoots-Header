// src/App.js
import { useState, useEffect } from "react";
import Background from "./Components/Background/background";
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import ServicesPage from './Components/ServicesPage/ServicesPage'; // Import the ServicesPage component

const App = () => {
  const heroData = [
    { text1: "Travel & Tickets", text2: "We Manage Your Traveling Reuirements" },
    { text1: "Purchasing", text2: "Serve To Purchase From Local Market" },
    { text1: "Elder's Care", text2: "We Take Care Of your Elders Travel" },
    { text1: "Utility Bills", text2: "We Serve To Pay Your Utility Bills" },
    { text1: "Send Gift's", text2: "Send Personalized Gifts To Your Loved Ones" },
    { text1: "Education", text2: "We Help You To Manage Your Relatives Educational Needs" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />

      {/* Add the ServicesPage below the Hero section */}
      <ServicesPage />
    </div>
  );
};

export default App;
