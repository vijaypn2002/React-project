import React from "react";

function Footer() {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <div style={styles.logoSection}>
          <img src="/images/LOGO.png" alt="Company Logo" style={styles.logo} />
          <div style={styles.socialIcons}>
            <i className="fab fa-instagram" style={styles.icon}></i>
            <i className="fab fa-twitter" style={styles.icon}></i>
            <i className="fab fa-linkedin" style={styles.icon}></i>
          </div>
        </div>

        <div style={styles.linksSection}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <a href="#product" style={styles.link}>Product</a>
            </li>
            <li style={styles.linkItem}>
              <a href="#pricing" style={styles.link}>Pricing</a>
            </li>
            <li style={styles.linkItem}>
              <a href="#integrations" style={styles.link}>Integrations</a>
            </li>
            <li style={styles.linkItem}>
              <a href="#resources" style={styles.link}>Resources</a>
            </li>
            <li style={styles.linkItem}>
              <a href="#contact" style={styles.link}>Contact Us</a>
            </li>
          </ul>
        </div>

        <div style={styles.contactSection}>
          <h3 style={styles.sectionTitle}>Contact Information</h3>
          <p style={styles.contactText}>Email: support@example.com</p>
          <p style={styles.contactText}>Phone: (123) 456-7890</p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.footerBottomText}>© 2024 Your Company. All rights reserved.</p>
      </div>
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
    color: "#FFFFFF",
    cursor: "pointer",
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

// Responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .footerContent {
      flex-direction: column;
      align-items: center;
    }
    .footerContainer {
      padding: 20px;
    }
  }
`;

// Inject media query styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default Footer;