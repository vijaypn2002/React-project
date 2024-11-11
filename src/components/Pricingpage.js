import React, { useState } from 'react';
import Footer from './Footer'; // Import the Footer component

const PricingPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>Flexible Pricing for <br /> AI Voice and Chat Solutions</h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '20px' }}>
          Choose the right plan for your business needs, <br />with options for AI voice, chat, or a combination of both.
        </p>
        <button style={{
          padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#6c63ff',
          color: '#fff', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a53d0'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c63ff'}>
          View Pricing
        </button>
      </section>

      {/* Pricing Comparison Table */}
      <section style={{
        display: 'flex', justifyContent: 'center', gap: '20px', padding: '0 20px', flexWrap: 'wrap', marginBottom: '40px'
      }}>
        
        {/* Pricing Plans */}
        {["Basic", "Professional", "Enterprise"].map((plan, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(plan)}
            style={{
              width: '100%', maxWidth: '300px', padding: '20px', borderRadius: '15px',
              backgroundColor: '#fff', boxShadow: activeCard === plan ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'left', border: activeCard === plan ? '2px solid' : '1px solid #ddd',
              borderImage: activeCard === plan ? 'linear-gradient(45deg, #6c63ff, #a1c4fd) 1' : 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', transform: activeCard === plan ? 'scale(1.05)' : 'scale(1)',
              cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              height: '450px', margin: '10px'
            }}
          >
            <div>
              <h2 style={{
                fontSize: '20px', background: 'linear-gradient(45deg, #6c63ff, #a1c4fd)',
                WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 'bold', marginBottom: '10px'
              }}>{plan} Plan</h2>
              <p style={{ color: '#666' }}>
                {plan === "Basic" && "Zero in on your ICP with our rich database of verified B2B contacts."}
                {plan === "Professional" && "Understand your prospects inside and out with dozens of built-in enrichment sources."}
                {plan === "Enterprise" && "Our message generation pipeline utilizes the most advanced LLMs for high-quality, human-sounding emails."}
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, color: '#555', marginTop: '15px' }}>
                {plan === "Basic" && ["✔️ 300M+ high-quality B2B contacts", "✔️ E-commerce data with 60+ relevant filters", "✔️ Local business data with Google reviews", "✔️ Built-in email bounce-testing and validation", "✔️ And more"].map((item, i) => <li key={i}>{item}</li>)}
                {plan === "Professional" && ["✔️ LinkedIn post scraping", "✔️ X (formerly Twitter) post scraping", "✔️ Fundraising and company news", "✔️ Technographic data", "✔️ Hiring news", "✔️ And more"].map((item, i) => <li key={i}>{item}</li>)}
                {plan === "Enterprise" && ["✔️ Personalization Waterfall for lead customization", "✔️ 10+ tone of voice options", "✔️ Custom CTAs", "✔️ The best email quality in the industry"].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <button style={{
              width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#6c63ff', color: '#fff',
              border: 'none', cursor: 'pointer', marginTop: '15px', transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a53d0'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c63ff'}>
              Request Pricing
            </button>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <Footer style={{ width: '100%', backgroundColor: '#333', color: '#fff', padding: '20px 0', marginTop: 'auto' }} />

      {/* CSS for responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
          }
          button {
            font-size: 1rem;
            padding: 8px 16px;
          }
          section {
            padding: 20px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
          button {
            font-size: 0.9rem;
            padding: 8px 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPage;