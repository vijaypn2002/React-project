import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus, FaShieldAlt, FaUniversity, FaHome } from "react-icons/fa";

function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const cardData = [
    {
      title: "Health, Wellness & Fitness",
      Need: "High demand for patient engagement and wellness management.",
      solution: "Automate scheduling, wellness inquiries, and provide 24/7 support.",
      benefits: " Increased satisfaction with streamlined support and wellness assistance.",
      cta: "Learn More about AI for Health and Wellness",
      icon: <FaPlus />,
      image: "/images/Fitness.webp",
    },
    {
      title: "Insurance",
      Need: "High volumes of routinec claims and policy enquiries.",
      solution: "Automate claims,policy management, and customer support.",
      benefits: "Faster processing, reduced costs,and improved efficiency.",
      cta: "Explore AI Solutions for Insurance",
      icon: <FaShieldAlt />,
      image: "/images/Insurance.png",
    },
    {
      title: "Financial Services",
      Need: "High volume of banking inquiries and account management.",
      solution: "Automate transaction and compliance support with real-time responses.",
      benefits: " Increased client satisfaction and cost savings.",
      cta: "Get Started with AI for Financial Services",
      icon: <FaUniversity />,
      image: "/images/FinancialService.jpg",
    },
    {
      title: "Real Estate",
      Need: "High demand for managing property inquiries and scheduling.",
      solution: " Automate property inquiries, viewings, and lead follow-ups.",
      benefits: "Enhanced lead conversion and efficient property management.",
      cta: "Discover AI Solutions for Real Estate",
      icon: <FaHome />,
      image: "/images/RealEstate.webp",
    },
    {
      title: "Telecommunications",
      Need: "High call volumes for troubleshooting and billing.",
      solution: " Automate support for troubleshooting and billing inquiries.",
      benefits: "Fast resolution, reduced operational load, and higher satisfaction.",
      cta: "Discover AI Solutions for Telecommunications",
      icon: <FaHome />,
      image: "/images/RealEstate.webp",
    },
    {
      title: "Education Managemen",
      Need: "Handling student inquiries, admissions, and personalized support.",
      solution: " Automate admissions, student support, and streamline administrative tasks.",
      benefits: "Efficient admissions, enhanced student support, and time savings.",
      cta: "Discover AI Solutions for School Management",
      icon: <FaHome />,
      image: "/images/RealEstate.webp",
    },
    {
      title: "E commerce",
      Need: ":  High demand for instant support, product inquiries, and personalized shopping assistance.",
      solution: " Automate product recommendations, cart recovery, and 24/7 support.",
      benefits: "Boosted conversions, reduced cart abandonment, and enhanced customer satisfaction.",
      cta: "Discover AI Solutions for E commerce",
      icon: <FaHome />,
      image: "/images/RealEstate.webp",
    },
    
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % cardData.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + cardData.length) % cardData.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      backgroundColor: "#0A0F1B",
      padding: "60px 20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#FFFFFF",
    },
    heading: {
      fontSize: isMobile ? "1.8em" : "2.5em",
      fontWeight: "bold",
      marginBottom: isMobile ? "20px" : "40px",
    },
    cardStack: {
      position: "relative",
      width: "100%",
      maxWidth: isMobile ? "90%" : "800px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cardContainer: {
      width: "100%",
      maxWidth: isMobile ? "100%" : "800px",
      backgroundColor: "#1A213B",
      borderRadius: "15px",
      padding: isMobile ? "20px" : "30px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
      opacity: 1,
      transition: "opacity 0.5s ease",
      overflow: "hidden",
      color: "#E0E0E0",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "center" : "flex-start",
      gap: isMobile ? "15px" : "20px",
      textAlign: isMobile ? "center" : "left",
    },
    cardContent: {
      width: isMobile ? "100%" : "60%",
    },
    cardTitle: {
      fontSize: "1.5em",
      fontWeight: "600",
      color: "#FFFFFF",
      marginBottom: "10px",
    },
    cardText: {
      color: "#B0BEC5",
      marginBottom: "10px",
      fontSize: isMobile ? "0.9em" : "1em",
      lineHeight: "1.4",
    },
    imageContainer: {
      width: isMobile ? "100%" : "35%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: isMobile ? "15px" : "0",
    },
    image: {
      width: isMobile ? "80%" : "100%",
      borderRadius: "10px",
      objectFit: "cover",
    },
    ctaButton: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      padding: isMobile ? "10px 15px" : "10px 20px",
      borderRadius: "5px",
      border: "1px solid #FFFFFF",
      cursor: "pointer",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      marginTop: "15px",
      width: isMobile ? "100%" : "auto",
    },
    arrowContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100px",
      marginTop: "20px",
    },
    arrowButton: {
      fontSize: isMobile ? "1.5em" : "2em",
      cursor: "pointer",
      color: "#FFFFFF",
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Industry-Specific AI Solutions</h2>
      <div style={styles.cardStack}>
        {cardData.map((card, index) => (
          <div key={index} style={{ ...styles.cardContainer, display: activeIndex === index ? "flex" : "none" }}>
            <div style={styles.imageContainer}>
              <img src={card.image} alt={card.title} style={styles.image} />
            </div>
            <div style={styles.cardContent}>
              <div style={styles.cardTitle}>{card.title}</div>
              <div style={styles.cardText}><strong>Why AI is Needed:</strong> {card.why}</div>
              <div style={styles.cardText}><strong>Solution:</strong> {card.solution}</div>
              <div style={styles.cardText}><strong>Key Benefits:</strong> {card.benefits}</div>
              <button
                style={styles.ctaButton}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {card.icon} {card.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.arrowContainer}>
        <div style={styles.arrowButton} onClick={handlePrev}>
          <FaArrowLeft />
        </div>
        <div style={styles.arrowButton} onClick={handleNext}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
