import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function Footer() {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Logo and Social Media Section */}
        <div style={styles.logoSection}>
          <img src="/images/LOGO.png" alt="Company Logo" style={styles.logo} />
          <div style={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/yugaaai" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div style={styles.linksSection}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <Link to="/" style={styles.link}>Product</Link>
            </li>
            <li style={styles.linkItem}>
              <Link to="/pricing" style={styles.link}>Pricing</Link>
            </li>
            <li style={styles.linkItem}>
              <Link to="/integrations" style={styles.link}>Integrations</Link>
            </li>
            <li style={styles.linkItem}>
              <Link to="/#resources" style={styles.link}>Resources</Link> {/* Adjust if Resources has a route */}
            </li>
            <li style={styles.linkItem}>
              <Link to="/#contact" style={styles.link}>Contact Us</Link> {/* Adjust if Contact has a route */}
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div style={styles.contactSection}>
          <h3 style={styles.sectionTitle}>Contact Information</h3>
          <p style={styles.contactText}>Email: <a href="mailto:hello@yugaa.tech" style={styles.contactLink}>hello@yugaa.tech</a></p>
          <p style={styles.contactText}>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={styles.footerBottom}>
        <p style={styles.footerBottomText}>© 2024 Your Company. All rights reserved.</p>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .footerContent {
            flex-direction: column;
            align-items: center;
          }
          .footerContainer {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: "#0A0A2A", 
    color: "#FFFFFF", 
    padding: "40px 20px",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logoSection: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
    textAlign: "center",
  },
  logo: {
    width: "40px",
    height: "auto",
  },
  socialIcons: {
    marginTop: "10px",
  },
  icon: {
    fontSize: "24px",
    margin: "0 10px",
    color: "#FFFFFF",
    transition: "color 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
  },
  linksSection: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: "10px",
  },
  linkList: {
    listStyleType: "none",
    padding: "0",
  },
  linkItem: {
    margin: "5px 0",
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  contactSection: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
    textAlign: "center",
  },
  contactText: {
    margin: "5px 0",
    color: "#FFFFFF",
  },
  contactLink: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  footerBottom: {
    borderTop: "1px solid #2A2A5A",
    paddingTop: "20px",
    marginTop: "20px",
  },
  footerBottomText: {
    fontSize: "14px",
    color: "#FFFFFF",
  },
};

export default Footer;
