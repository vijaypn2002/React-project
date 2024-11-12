import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const [showResources, setShowResources] = useState(false);

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerContent}>
        
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src="/images/LOGO.png" alt="Company Logo" style={styles.logo} />
          <span style={styles.logoText}>Yugaa AI</span>
        </div>

        {/* Social Media Icons Section */}
        <div style={styles.socialIcons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/yugaaai" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin />
          </a>
        </div>

        {/* Quick Links Section */}
        <div style={styles.linksSection}>
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
            <li style={styles.linkItem} onClick={toggleResources}>
              <span style={{ ...styles.link, cursor: "pointer" }}>Resources</span>
              <div
                style={{
                  ...styles.dropdown,
                  maxHeight: showResources ? "200px" : "0",
                  opacity: showResources ? "1" : "0",
                }}
              >
                <ul style={styles.dropdownList}>
                  <li>
                    <Link to="/about" style={styles.dropdownLink}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact" style={styles.dropdownLink}>Contact</Link>
                  </li>
                  <li>
                    <Link to="/integrations" style={styles.dropdownLink}>Integrations</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={styles.footerBottom}>
        <hr style={styles.divider} />
        <p style={styles.footerBottomText}>© 2024 Your Company. All rights reserved.</p>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500&display=swap');

        @media (max-width: 768px) {
          .footerContent {
            flex-direction: column;
            align-items: center;
          }
          .logoSection {
            margin-bottom: 10px;
          }
          .socialIcons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 10px;
          }
          .linkList {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
          }
          .link {
            font-size: 12px;
          }
          .footerBottom {
            margin-top: 5px;
            padding-top: 5px;
          }
          .divider {
            margin: 5px 0;
            width: 80%;
          }
          .footerBottomText {
            font-size: 12px;
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
    padding: "20px 40px",
  },
  footerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  logo: {
    width: "40px",
    height: "auto",
    marginRight: "10px",
  },
  logoText: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "18px",
    color: "#FFFFFF",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "20px",
    color: "#FFFFFF",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  linksSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "10px",
  },
  linkList: {
    display: "flex",
    gap: "15px",
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  linkItem: {
    margin: "0",
    position: "relative",
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#1A1A3A",
    padding: "10px 15px",
    borderRadius: "5px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    transition: "max-height 0.3s ease, opacity 0.3s ease",
    maxHeight: "0",
    opacity: "0",
  },
  dropdownList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  dropdownLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "13px",
    padding: "5px 0",
    transition: "color 0.3s",
  },
  footerBottom: {
    marginTop: "10px",
    paddingTop: "5px",
    textAlign: "center",
  },
  divider: {
    borderTop: "1px solid #2A2A5A",
    margin: "5px 0",
  },
  footerBottomText: {
    fontSize: "14px",
    color: "#FFFFFF",
  },
};

export default Footer;
