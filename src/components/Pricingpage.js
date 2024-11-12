import React, { useState, useEffect, useRef } from 'react';

const PricingPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

 
  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref, index) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight * 0.9) {
          ref.style.opacity = 1;
          ref.style.transform = 'translateY(0)';
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#333'
    }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center', padding: '40px 20px', backgroundColor: '#f9f9f9', borderRadius: '0 0 40px 40px'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Flexible Pricing for AI Voice & Chat</h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
          Select the right plan for your business needs, with options for voice, chat, or a combination of both.
        </p>
        <button style={{
          padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: 'black',
          color: '#fff', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease, transform 0.3s ease',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'gray'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'black'}
        >
          View Pricing
        </button>
      </section>

      {/* Pricing Comparison Table */}
      <section style={{
        display: 'flex', justifyContent: 'center', gap: '20px', padding: '50px 20px', flexWrap: 'wrap', marginBottom: '40px'
      }}>
        {/* Pricing Plans */}
        {["Basic", "Professional", "Enterprise"].map((plan, index) => (
          <div
            key={index}
            ref={(el) => cardRefs.current[index] = el}
            onClick={() => handleCardClick(plan)}
            style={{
              width: '100%', maxWidth: '300px', padding: '25px', borderRadius: '15px',
              backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'left', border: activeCard === plan ? '2px solid #000' : '1px solid #ddd',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', transform: activeCard === plan ? 'scale(1.05)' : 'scale(1)',
              cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              height: '450px', margin: '10px', overflow: 'hidden',
              opacity: 0, transform: 'translateY(50px)', transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
          >
            <div>
              <h2 style={{
                fontSize: '20px', color: 'black', fontWeight: 'bold', marginBottom: '10px'
              }}>{plan} Plan</h2>
              <p style={{ color: '#666' }}>
                {plan === "Basic" && "Ideal for small businesses starting with AI-driven voice or chat."}
                {plan === "Professional" && "Designed for growing businesses with advanced needs."}
                {plan === "Enterprise" && "Customized for large enterprises with specific requirements."}
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, color: '#555', marginTop: '15px' }}>
                {plan === "Basic" && ["✔️ Core capabilities", "✔️ Essential analytics", "✔️ Basic support", "✔️ Quick setup and easy onboarding", "✔️ Standard data privacy compliance"].map((item, i) => <li key={i}>{item}</li>)}
                {plan === "Professional" && ["✔️ Enhanced analytics", "✔️ Multichannel support", "✔️ Integrated voice and chat", "✔️ Customizable AI workflows", "✔️ Priority support with faster response times", "✔️ Access to AI playbooks for automation", "✔️ Data encryption and security compliance"].map((item, i) => <li key={i}>{item}</li>)}
                {plan === "Enterprise" && ["✔️ Tailored configurations", "✔️ Full-suite advanced analytics", "✔️ Dedicated management", "✔️ Priority support", "✔️ Custom integration with CRM and helpdesk", "✔️ Advanced Security and compliance (GDPR, HIPAA)", "✔️ Training and onboarding for your team", "✔️ Custom AI playbooks and workflows"].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '15px', color: '#333' }}>
              {plan === "Basic" && "Contact for Pricing"}
              {plan === "Professional" && "Contact for Pricing"}
              {plan === "Enterprise" && "Contact for Pricing"}
            </p>
            <button style={{
              width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: 'black', color: '#fff',
              border: 'none', cursor: 'pointer', marginTop: '15px', transition: 'background-color 0.3s ease'
            }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'gray'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'black'}
            >
              Request Pricing
            </button>
          </div>
        ))}
      </section>

      {/* CSS for responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
          button {
            font-size: 1rem;
            padding: 10px 20px;
          }
          section {
            padding: 30px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 0.9rem;
          }
          button {
            font-size: 0.9rem;
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPage;
