import React, { useEffect } from 'react';
import { FaShoppingCart, FaGraduationCap, FaHeartbeat, FaPiggyBank, FaHome, FaHotel } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AgentSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const solutions = [
    { title: 'E Commerce', features: ['AI-Powered Sales Boost', '24/7 Customer Support'], icon: <FaShoppingCart /> },
    { title: 'Education', features: ['AI Enrollment Assistance', 'Student Support'], icon: <FaGraduationCap /> },
    { title: 'Healthcare', features: ['Automated Patient Support', 'Medical Information'], icon: <FaHeartbeat /> },
    { title: 'Financial Services', features: ['Secure Transactions', 'AI Financial Assistance'], icon: <FaPiggyBank /> },
    { title: 'Real Estate', features: ['Property Inquiry Support', 'Automated Scheduling'], icon: <FaHome /> },
    { title: 'Hospitality', features: ['Booking Assistance', '24/7 Customer Support'], icon: <FaHotel /> },
  ];

  const styles = {
    section: {
      backgroundColor: '#0b0f29',
      color: '#ffffff',
      padding: '60px 20px',
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
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      maxWidth: '1000px',
      width: '100%',
    },
    card: {
      backgroundColor: '#151A30',
      borderRadius: '12px',
      padding: '25px',
      textAlign: 'left',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      border: '1px solid #2D3347',
      flex: '1 1 calc(33.33% - 20px)', 
      minWidth: '250px', 
      maxWidth: '100%',
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
      <style>
        {`
          /* Mobile - single column */
          @media (max-width: 600px) {
            .card {
              flex: 1 1 100%; /* Full width on mobile */
            }
          }

          /* Tablet - two columns */
          @media (min-width: 601px) and (max-width: 1024px) {
            .card {
              flex: 1 1 calc(50% - 20px); /* Two columns on tablet */
            }
          }

          /* Desktop - three columns */
          @media (min-width: 1025px) {
            .card {
              flex: 1 1 calc(33.33% - 20px); /* Three columns on desktop */
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
      <div style={styles.container}>
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="card"
            style={styles.card}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div style={styles.icon}>{solution.icon}</div>
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
