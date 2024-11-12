import React, { useState, useEffect } from "react";

function HeroSection() {
 
  const images = ["/images/Chat-bot2.gif",];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-heading">
        "Human-Like AI Interactions for Voice & Chat—Engage, Support, and Convert"
        </h1>
        <p className="hero-paragraph">
        "Yugaa AI offers lifelike AI voice and chat agents to enhance customer engagement, streamline support, and boost sales. Experience real-time conversations tailored to each user."

        </p>
        <div className="hero-buttons">
          <button className="hero-button-primary">
            <i className="fas fa-arrow-right" style={{ marginRight: "8px" }}></i>
            Get Started with Yugaa AI
          </button>
          <button className="hero-button-secondary">
            <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }}></i>
            Request a Demo
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="sliding-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
