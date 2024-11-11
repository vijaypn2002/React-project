import React from "react";
import Footer from "./Footer"; // Import only Footer

function ContactPage() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>
          Have an inquiry? Drop us a message, and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.contactInfo}>
          <h3 style={styles.infoTitle}>Yuga AI</h3>
          <p style={styles.infoText}></p>
          <p style={styles.infoText}>
            <i className="fas fa-phone-alt"></i>  (123) 456-7890
          </p>
          <p style={styles.infoText}>
            <i className="fas fa-envelope"></i> <a href="mailto:hello@yugaa.tech" style={styles.link}>hello@yugaa.tech</a>
          </p>
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
        
        <form style={styles.form}>
          <div style={styles.row}>
            <input type="text" placeholder="First Name" style={styles.input} required />
            <input type="text" placeholder="Last Name" style={styles.input} required />
          </div>
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="tel" placeholder="Phone" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    width: "100vw",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginTop: "10px",
  },
  formContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px 20px",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contactInfo: {
    maxWidth: "300px",
    marginBottom: "20px",
    color: "#333",
  },
  infoTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  infoText: {
    fontSize: "1rem",
    color: "#666",
    margin: "5px 0",
  },
  link: {
    color: "#333",
    textDecoration: "none",
  },
  socialIcons: {
    marginTop: "10px",
  },
  icon: {
    fontSize: "20px",
    margin: "0 10px",
    color: "#333",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    width: "100%",
  },
  row: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    marginBottom: "20px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  textarea: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    height: "100px",
    marginBottom: "20px",
    resize: "vertical",
  },
  submitButton: {
    padding: "12px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "black",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Responsive styles using media query
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .contact-info,
    .form {
      width: 100%;
      padding: 0 10px;
    }
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 0.9rem;
    }
    .row {
      flex-direction: column;
    }
  }
`;

// Adding media query styles dynamically to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

export default ContactPage;
