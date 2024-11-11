import React from "react";
import Footer from "./Footer";

function ContactPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>
          Have an inquiry? Drop us a message, and we’ll get back to you as soon as possible.
        </p>
      </header>

      <main style={styles.content}>
        <div style={styles.contactInfo}>
          <h3 style={styles.infoTitle}>Yuga AI</h3>
          <p style={styles.infoText}>Reach out to us via phone or email:</p>
          <p style={styles.infoText}>
            <i className="fas fa-phone-alt"></i> (123) 456-7890
          </p>
          <p style={styles.infoText}>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:hello@yugaa.tech" style={styles.link}>
              hello@yugaa.tech
            </a>
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
          <input type="text" placeholder="First Name" style={styles.input} required />
          <input type="text" placeholder="Last Name" style={styles.input} required />
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="tel" placeholder="Phone" style={styles.input} required />
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </main>

      <Footer />

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .formContainer {
              flex-direction: column;
              align-items: center;
              padding: 20px;
              text-align: center;
            }
            h1 {
              font-size: 2rem;
            }
            .subtitle {
              font-size: 0.9rem;
              text-align: center;
            }
            .infoTitle {
              font-size: 1.2rem;
            }
            .input, .textarea, .submitButton {
              font-size: 0.9rem;
              padding: 10px;
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.8rem;
            }
            .subtitle {
              font-size: 0.8rem;
              text-align: center;
            }
            .infoTitle {
              font-size: 1.1rem;
            }
            .input, .textarea {
              font-size: 0.8rem;
              padding: 8px;
            }
            .submitButton {
              font-size: 0.8rem;
              padding: 10px;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    padding: "20px 10px",
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
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
  },
  contactInfo: {
    textAlign: "center",
    color: "#333",
  },
  infoTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
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
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  icon: {
    fontSize: "20px",
    color: "#333",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    height: "120px",
    resize: "vertical",
    width: "100%",
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
    alignSelf: "center",
  },
};

export default ContactPage;
