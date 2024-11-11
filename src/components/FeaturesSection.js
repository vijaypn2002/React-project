import React from "react";
import { useInView } from "react-intersection-observer";

function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <section className="features-section" ref={ref}>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
        <i className="fas fa-microphone feature-icon"></i>
        <h4>Lifelike AI Voice Agent</h4>
        <p>Engage customers with human-like voice interactions, perfect for sales inquiries, follow-ups, and customer support, 24/7.</p>
      </div>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInRight' : ''}`}>
        <i className="fas fa-comments feature-icon"></i>
        <h4>Intelligent AI Chat Agent</h4>
        <p>Provide instant, customized support through chat, handling inquiries, scheduling, and personalized recommendations seamlessly.</p>
      </div>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
        <i className="fas fa-puzzle-piece feature-icon"></i>
        <h4>Developer-Friendly API and Easy Integration</h4>
        <p>Easily integrate Yugaa AI’s voice and chat capabilities into your existing systems. Our flexible API and zero-lift integration make setup effortless.</p>
      </div>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInRight' : ''}`}>
        <i className="fas fa-chart-line feature-icon"></i>
        <h4>Advanced Analytics and Insights</h4>
        <p>Gain actionable insights from every interaction with Yugaa AI’s robust analytics, helping you continuously optimize support and engagement strategies.</p>
      </div>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
        <i className="fas fa-tachometer-alt feature-icon"></i>
        <h4>Real Results</h4>
        <p>Increase productivity by 50%, reduce support costs by 40%, and improve response times by 70% with Yugaa AI.</p>
      </div>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInRight' : ''}`}>
        <i className="fas fa-award feature-icon"></i>
        <h4>Trusted by Leading Brands</h4>
        <p>“Since using Yugaa AI, we’ve seen a 30% improvement in response times and a 50% increase in customer satisfaction.” — John D., E-commerce</p>
      </div>
      <div className={`feature-item ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}>
        <i className="fas fa-industry feature-icon"></i>
        <h4>Tailored to Your Industry</h4>
        <p>Explore solutions customized for your specific industry needs.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;
