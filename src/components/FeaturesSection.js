import React from "react";
import { useInView } from "react-intersection-observer";

function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderFeatureItem = (iconClass, title, description, animationClass, delayClass) => (
    <div className={`feature-item ${inView ? `slide-in ${animationClass} ${delayClass}` : ''}`}>
      <i className={`${iconClass} feature-icon`} aria-hidden="true"></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );

  return (
    <section className="features-section" ref={ref}>
      <h1>Core Capabilities</h1>
      <div className="features-group">
        {renderFeatureItem(
          "fas fa-microphone",
          "Lifelike AI Voice Agent",
          "Engage customers with natural voice interactions for sales, support, and follow-ups—available 24/7.",
          'animate__animated animate__fadeInLeft',
          'delay-1'
        )}
        {renderFeatureItem(
          "fas fa-comments",
          "Smart AI Chat Agent",
          "Deliver instant, personalized chat support, handling inquiries, scheduling, and recommendations.",
          'animate__animated animate__fadeInRight',
          'delay-2'
        )}
        {renderFeatureItem(
          "fas fa-puzzle-piece",
          "Developer-Friendly API",
          "Seamlessly integrate Yugaa AI into your systems with our flexible API and effortless setup.",
          'animate__animated animate__fadeInLeft',
          'delay-3'
        )}
        {renderFeatureItem(
          "fas fa-chart-line",
          "Advanced Analytics",
          "Unlock insights from each interaction to optimize support and engagement strategies.",
          'animate__animated animate__fadeInRight',
          'delay-4'
        )}
      </div>

      <h1>AI Solutions for Every Industry</h1>
      <div className="features-group">
        {renderFeatureItem(
          "fas fa-tachometer-alt",
          "E-Commerce",
          "Increase sales and reduce cart abandonment with personalized AI-driven support.",
          'animate__animated animate__fadeInLeft',
          'delay-5'
        )}
        {renderFeatureItem(
          "fas fa-award",
          "Healthcare",
          "Automate scheduling and wellness inquiries to enhance patient care.",
          'animate__animated animate__fadeInRight',
          'delay-6'
        )}
        {renderFeatureItem(
          "fas fa-industry",
          "Telecommunications",
          "Handle high call volumes with fast responses for troubleshooting and billing.Explore solutions customized for your specific industry needs.",
          'animate__animated animate__fadeInLeft',
          'delay-7'
        )}
              {renderFeatureItem(
          "fas fa-industry",
          "Financial Services",
          "Automate account management and transaction support for efficient, compliant service.",
          'animate__animated animate__fadeInLeft',
          'delay-7'
        )}
      </div>
    </section>
  );
}

export default FeaturesSection;
