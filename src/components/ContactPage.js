import React from "react";

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
          <h3 style={styles.infoTitle}>Yugaa AI</h3>
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

      <style>
        {`
          @media (max-width: 768px) {
            .contactInfo, .form {
              width: 70%; /* Reduced width for medium screens */
              margin: 0 auto;
              padding: 0;
            }
            h1 {
              font-size: 1.8rem;
            }
            .subtitle, .infoText {
              font-size: 1rem;
            }
            .infoTitle {
              font-size: 1.4rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.6rem;
            }
            .subtitle, .infoText {
              font-size: 0.85rem;
            }
            .infoTitle {
              font-size: 1.2rem;
            }
            .form {
              width: 80%; /* Reduced width for small screens */
              padding: 0;
              gap: 8px;
            }
            .input, .textarea, .submitButton {
              font-size: 0.85rem;
              padding: 10px;
              width: 100%;
              box-sizing: border-box;
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
    padding: "10px 0",
  },
  header: {
    textAlign: "center",
    padding: "15px 10px",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#666",
    marginTop: "8px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "10px",
  },
  contactInfo: {
    textAlign: "center",
    color: "#333",
    width: "100%",
    maxWidth: "500px",
  },
  infoTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  infoText: {
    fontSize: "0.9rem",
    color: "#666",
    margin: "4px 0",
  },
  link: {
    color: "#333",
    textDecoration: "none",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "8px",
  },
  icon: {
    fontSize: "18px",
    color: "#333",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "450px",
    margin: "0 auto",
    padding: "0",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    height: "100px",
    resize: "vertical",
    width: "100%",
    boxSizing: "border-box",
  },
  submitButton: {
    padding: "10px 15px",
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
