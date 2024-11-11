import React, { useState, useEffect } from "react";

function HeroSection() {
  // Array of images for the slider
  const images = ["/images/Chat-bot2.gif", "/images/Chat-bot3.gif"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to handle automatic slide transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-heading">
          Deliver Human-Like AI Interactions Across Voice and Chat—Engage, Support, and Convert Seamlessly
        </h1>
        <p className="hero-paragraph">
          Yugaa AI empowers businesses with lifelike AI voice and chat agents designed to enhance customer engagement, streamline support, and boost sales. Experience intelligent, real-time conversations that adapt to each user’s needs.
        </p>
        <div className="hero-buttons">
          <button className="hero-button-primary">
            <i className="fas fa-arrow-right" style={{ marginRight: "8px" }}></i>
            Get Started with Yuga AI
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
