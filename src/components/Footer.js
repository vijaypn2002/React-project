import React from "react";
import { Link } from "react-router-dom"; 
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerContent}>
        
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src="/images/LOGO.png" alt="Company Logo" style={styles.logo} />
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
            <li style={styles.linkItem}>
              <Link to="/#resources" style={styles.link}>Resources</Link>
            </li>
            <li style={styles.linkItem}>
            <Link to="/contact"style={styles.link}>Contact</Link>
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
    marginBottom: "10px",
  },
  logo: {
    width: "40px",
    height: "auto",
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
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "14px",
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
