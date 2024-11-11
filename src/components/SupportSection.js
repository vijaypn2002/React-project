import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineComment, AiOutlineRobot, AiOutlineBook, AiOutlineLaptop } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SupportSection() {
  const [activeButton, setActiveButton] = useState('AI Voice Agent for Sales');

  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    { 
      title: 'AI Voice Agent for Sales', 
      icon: <AiOutlinePhone />, 
      description:  "Automate personalized sales calls and lead follow-ups, guiding prospects through purchase decisions with conversational, human-like interactions.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'AI Chat Agent for Customer Support', 
      icon: <AiOutlineComment />, 
      description:  "Deliver instant, helpful responses via chat, resolving inquiries quickly and improving customer satisfaction.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'Generative AI for Dynamic Responses', 
      icon: <AiOutlineRobot />, 
      description: "Our generative AI provides context-aware, non-scripted responses, adapting to each conversation dynamically and continuously learning from interactions.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'Sales and Support Playbooks', 
      icon: <AiOutlineBook />, 
      description:  "Customize workflows with Yugaa AI’s playbooks, built from proven sales and support strategies to optimize customer journeys.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'Omnichannel Communication', 
      icon: <AiOutlineLaptop />, 
      description: "Integrate voice and chat into a cohesive experience, allowing customers to engage across multiple platforms seamlessly.",
      image: "/images/Chat-bot2.gif"
    },
  ];

  const activeFeature = features.find((feature) => feature.title === activeButton);

  return (
    <section ref={sectionRef} style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={styles.headingContainer}
      >
        <h1 style={styles.heading}>"AI Solutions Tailored for Sales  <br /> and Customer Support</h1>
        <p style={styles.subheading}>
        "Yugaa AI offers flexible, intelligent voice and chat agents that automate customer engagement, <br />  enabling you to deliver lifelike, real-time interactions across sales and support channels."

        </p>
      </motion.div>

      <div style={styles.container}>
        <div style={styles.sidebar}>
          {features.map((feature) => (
            <motion.button
              key={feature.title}
              onClick={() => setActiveButton(feature.title)}
              initial={{ opacity: 0, x: -20 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * features.indexOf(feature) }}
              style={{
                ...styles.sidebarItem,
                ...(activeButton === feature.title ? styles.activeSidebarItem : {}),
              }}
            >
              {feature.icon} {feature.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={styles.contentPanel}
        >
          <motion.div 
            style={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={styles.cardTitle}>{activeFeature.icon} {activeFeature.title}</h3>
            <p style={styles.cardText}>{activeFeature.description}</p>
          </motion.div>

          <motion.div style={styles.imageContainer}>
            <img src={activeFeature.image} alt={activeFeature.title} style={styles.image} />
          </motion.div>
        </motion.div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              width: 100%;
              padding: 0;
            }
            .sidebar {
              display: flex;
              flex-direction: row;
              overflow-x: auto;
              gap: 10px;
              padding: 10px;
              margin-bottom: 15px;
              width: 100%;
              box-sizing: border-box;
            }
            .sidebarItem {
              font-size: 14px;
              padding: 8px;
              min-width: 160px;
              flex: 1;
              text-align: center;
            }
            .contentPanel {
              padding: 10px;
              align-items: center;
              text-align: center;
              width: 100%;
              box-sizing: border-box;
            }
            .card {
              padding: 10px;
              width: 100%;
              box-sizing: border-box;
            }
            .heading {
              font-size: 20px;
            }
            .subheading {
              font-size: 14px;
              padding: 0 10px;
            }
            .imageContainer {
              width: 100%;
              display: flex;
              justify-content: center;
              padding: 10px;
              box-sizing: border-box;
            }
            .image {
              width: 100%;
              max-width: 300px;
              height: auto;
              border-radius: 8px;
              object-fit: cover;
            }
          }
        `}
      </style>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0d0f1b',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
  },
  headingContainer: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: '1.3',
    textShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  subheading: {
    fontSize: '18px',
    color: '#9ba3b2',
    lineHeight: '1.6',
    marginTop: '10px',
    fontWeight: 'normal',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  container: {
    display: 'flex',
    backgroundColor: '#131724',
    padding: '20px',
    borderRadius: '15px',
    maxWidth: '1000px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
  },
  sidebar: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    color: '#9ba3b2',
  },
  sidebarItem: {
    fontSize: '16px',
    padding: '10px 20px',
    textAlign: 'left',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#9ba3b2',
    cursor: 'pointer',
  },
  activeSidebarItem: {
    backgroundColor: '#1b2030',
    color: '#fff',
    fontWeight: 'bold',
  },
  contentPanel: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#1b2030',
    borderRadius: '10px',
    padding: '20px',
    color: '#fff',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '14px',
    color: '#c5cad6',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
  },
};

export default SupportSection;
