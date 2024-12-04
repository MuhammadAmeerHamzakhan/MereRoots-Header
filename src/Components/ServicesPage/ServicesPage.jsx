import React from 'react';
import './ServicesPage.css';
import travelImage from '../../assets/train.png';
import purchasingImage from '../../assets/vegetables.png';
import elderCareImage from '../../assets/elders.png';
import utilityBillsImage from '../../assets/bills.png';
import sendGiftsImage from '../../assets/gifts.png';
import educationImage from '../../assets/books.png';

const services = [
  {
    title: 'Travel & Tickets',
    description: 'We manage your travel bookings, ensuring a smooth and hassle-free journey for you and your loved ones.',
    image: travelImage,
  },
  {
    title: 'Purchasing',
    description: 'We offer a convenient solution for purchasing goods from local markets, saving you time and effort.',
    image: purchasingImage,
  },
  {
    title: "Elder's Care",
    description: 'Our elder care services ensure your elderly family members travel comfortably and receive the best care possible.',
    image: elderCareImage,
  },
  {
    title: 'Utility Bills',
    description: 'We simplify the process of paying your utility bills, making it easy to stay on top of your monthly expenses.',
    image: utilityBillsImage,
  },
  {
    title: 'Send Gifts',
    description: 'We help you send personalized gifts to your loved ones, making their special occasions even more memorable.',
    image: sendGiftsImage,
  },
  {
    title: 'Education',
    description: 'We assist you in managing educational needs for your relatives, from school supplies to tuition assistance.',
    image: educationImage,
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <section className="intro-section">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-text">
          At MereRoots, we offer a wide range of services designed to make your life easier. Whether you're looking to book travel tickets, purchase local products, or manage bills, we've got you covered. Our services are tailored to meet your needs and exceed your expectations.
        </p>
      </section>

      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
