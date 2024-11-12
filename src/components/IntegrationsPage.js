import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShoppingCart, faHeadset } from '@fortawesome/free-solid-svg-icons';

const IntegrationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'CRM Systems', 'E-commerce Platforms', 'Helpdesk Systems'
  ];

  const integrations = [
    { category: 'CRM Systems', name: "CRM Systems", description: "Sync customer data to provide context-aware interactions based on user history.", icon: faChartLine },
    { category: 'E-commerce Platforms', name: "E-commerce Platforms", description: "Guide customers through their shopping journey with AI-driven support across channels.", icon: faShoppingCart },
    { category: 'Helpdesk Systems', name: "Helpdesk Systems", description: "Integrate voice and chat inquiries within your helpdesk for streamlined support management.", icon: faHeadset },
  ];

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', padding: '20px 0', minHeight: '100vh', boxSizing: 'border-box' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff', borderRadius: '10px', marginBottom: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#333', marginBottom: '15px', lineHeight: '1.4' }}>
          Effortless Integration with <br /> Your Tools
        </h1>
        <p style={{ fontSize: '1rem', color: '#666', maxWidth: '700px', margin: '0 auto 30px' }}>
          Connect Yugaa AI’s voice and chat agents to your CRM, helpdesk,<br /> and more for a seamless customer experience.
        </p>
        <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>Integration Options</p>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', padding: '0 20px', gap: '20px', boxSizing: 'border-box' }}>
        {/* Sidebar for Categories */}
        <aside style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          flex: '1',
          maxWidth: '100%', 
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '15px', color: '#333', textAlign: 'center' }}>Categories</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {categories.map((category, index) => (
              <li 
                key={index} 
                onClick={() => setSelectedCategory(category)}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  cursor: 'pointer',
                  fontWeight: selectedCategory === category ? 'bold' : 'normal',
                  color: selectedCategory === category ? '#fff' : '#333',
                  backgroundColor: selectedCategory === category ? 'black' : '#f8f9fa',
                  borderRadius: '5px',
                  textAlign: 'center',
                  transition: 'background-color 0.3s',
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Display Selected Category Integrations */}
        <section style={{
          display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%'
        }}>
          {filteredIntegrations.map((integration, index) => (
            <div
              key={index}
              style={{
                width: '100%', maxWidth: '300px', padding: '20px', borderRadius: '10px',
                backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px', color: 'black' }}>
                <FontAwesomeIcon icon={integration.icon} />
              </div>
              <h3 style={{
                fontSize: '18px',
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}>
                {integration.name}
              </h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
                {integration.description}
              </p>
              <a href="#learn-more" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                Learn More →
              </a>
            </div>
          ))}
        </section>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 0.9rem;
          }
          section, aside {
            width: 100%;
            margin-bottom: 20px;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          aside {
            padding: 10px;
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default IntegrationsPage;
