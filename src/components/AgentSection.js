import React, { useEffect } from 'react';
import { FaIndustry } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AgentSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Ensure animations replay on each scroll
  }, []);

  const solutions = [
    { title: 'E Commerce', features: ['AI-Powered Sales Boost', '24/7 Customer Support'] },
    { title: 'Education', features: ['AI Enrollment Assistance', 'Student Support'] },
    { title: 'Healthcare', features: ['Automated Patient Support', 'Medical Information'] },
    { title: 'Financial Services', features: ['Secure Transactions', 'AI Financial Assistance'] },
    { title: 'Real Estate', features: ['Property Inquiry Support', 'Automated Scheduling'] },
    { title: 'Hospitality', features: ['Booking Assistance', '24/7 Customer Support'] },
    { title: 'Retail', features: ['Inventory Management', 'Customer Support'] },
    { title: 'Logistics', features: ['Supply Chain Optimization', 'Tracking Assistance'] },
    { title: 'Travel', features: ['Booking Assistance', 'Travel Support'] },
  ];

  const styles = {
    section: {
      backgroundColor: '#0b0f29',
      color: '#ffffff',
      padding: '80px 20px',
      fontFamily: "'Arial', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headingContainer: {
      textAlign: 'center',
      width: '100%',
      maxWidth: '1000px',
      marginBottom: '40px',
    },
    heading: {
      fontSize: '36px',
      fontWeight: '800',
      color: '#fff',
      marginBottom: '10px',
    },
    subheading: {
      fontSize: '16px',
      color: '#fff',
      lineHeight: '1.6',
      maxWidth: '90%',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns for desktop
      gap: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#151A30',
      borderRadius: '12px',
      padding: '25px',
      textAlign: 'left',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      border: '1px solid #2D3347',
    },
    icon: {
      fontSize: '30px',
      color: '#fff',
      marginBottom: '10px',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '10px',
    },
    featureList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      fontSize: '14px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
    },
    featureDot: {
      marginRight: '8px',
      color: '#ffab40',
      fontSize: '10px',
    },
  };

  return (
    <section style={styles.section}>
      {/* Internal CSS for responsive styling */}
      <style>
        {`
          /* Mobile Styles */
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr; /* Single column layout for mobile */
              gap: 15px;
            }
            .heading {
              font-size: 28px;
              margin-bottom: 10px;
            }
            .subheading {
              font-size: 14px;
              margin-bottom: 15px;
            }
            .card {
              padding: 15px;
            }
          }

          /* Tablet Styles */
          @media (min-width: 769px) and (max-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr); /* Two columns for tablets */
              gap: 20px;
            }
          }
        `}
      </style>

      <div style={styles.headingContainer} data-aos="fade-right">
        <h2 className="heading" style={styles.heading}>AI Solutions for Every Industry</h2>
        <p className="subheading" style={styles.subheading} data-aos="fade-left">
          Yugaa AI transforms businesses across industries, from eCommerce to healthcare, by
          automating customer interactions and sales processes.
        </p>
      </div>
      <div className="grid-container" style={styles.grid}>
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="card"
            style={styles.card}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <FaIndustry style={styles.icon} />
            <h3 style={styles.cardTitle}>{solution.title}</h3>
            <ul style={styles.featureList}>
              {solution.features.map((feature, i) => (
                <li key={i} style={styles.featureItem}>
                  <span style={styles.featureDot}>•</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AgentSection;
