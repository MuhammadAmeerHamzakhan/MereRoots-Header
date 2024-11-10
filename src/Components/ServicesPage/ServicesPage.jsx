// src/Components/ServicesPage/ServicesPage.jsx
import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <section className="intro-section">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-text">
          At [Your Company Name], we offer a wide range of services designed to make your life easier. Whether you're looking to book travel tickets, purchase local products, or manage bills, we've got you covered. Our services are tailored to meet your needs and exceed your expectations.
        </p>
      </section>

      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Travel & Tickets</h3>
            <p>We manage your travel bookings, ensuring a smooth and hassle-free journey for you and your loved ones.</p>
          </div>
          <div className="service-item">
            <h3>Purchasing</h3>
            <p>We offer a convenient solution for purchasing goods from local markets, saving you time and effort.</p>
          </div>
          <div className="service-item">
            <h3>Elder's Care</h3>
            <p>Our elder care services ensure your elderly family members travel comfortably and receive the best care possible.</p>
          </div>
          <div className="service-item">
            <h3>Utility Bills</h3>
            <p>We simplify the process of paying your utility bills, making it easy to stay on top of your monthly expenses.</p>
          </div>
          <div className="service-item">
            <h3>Send Gifts</h3>
            <p>We help you send personalized gifts to your loved ones, making their special occasions even more memorable.</p>
          </div>
          <div className="service-item">
            <h3>Education</h3>
            <p>We assist you in managing educational needs for your relatives, from school supplies to tuition assistance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
