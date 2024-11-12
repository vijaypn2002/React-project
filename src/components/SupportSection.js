import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineComment, AiOutlineRobot, AiOutlineBook, AiOutlineLaptop } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SupportSection() {

  const [activeButton, setActiveButton] = useState('AI Voice Agent for Sales');
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  
  const features = [
    { heading: 'Key Product Features' },
    { 
      title: 'AI Voice Agent for Sales', 
      icon: <AiOutlinePhone />, 
      description: "Automate sales calls and follow-ups with human-like, conversational AI.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'AI Chat Agent for Support', 
      icon: <AiOutlineComment />, 
      description: "Provide instant chat responses to resolve inquiries and boost satisfaction.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'Dynamic AI Responses', 
      icon: <AiOutlineRobot />, 
      description: "Our generative AI adapts to conversations, learning and improving with each interaction.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'Sales & Support Playbooks', 
      icon: <AiOutlineBook />, 
      description: "Customize workflows with proven strategies to guide customer journeys.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: 'Omnichannel Communication', 
      icon: <AiOutlineLaptop />, 
      description: "Unify voice and chat across platforms for a seamless customer experience.",
      image: "/images/Chat-bot2.gif"
    },
    { heading: 'Analytics and Insights' },
    { 
      title: 'Engagement Analytics', 
      icon: <AiOutlineLaptop />, 
      description: "Track engagement trends and improve your strategy with in-depth analytics.",
      image: "/images/Chat-bot2.gif"
    },
    { heading: 'Use Cases' },
    { 
      title: 'Sales Automation', 
      icon: <AiOutlinePhone />, 
      description: "Automate lead engagement, follow-ups, and scheduling to increase conversions.",
      image: "/images/Chat-bot2.gif"
    },
    { 
      title: '24/7 Customer Support', 
      icon: <AiOutlineComment />, 
      description: "Provide continuous support through voice and chat for timely, relevant assistance.",
      image: "/images/Chat-bot2.gif"
    }
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
        <h1 style={styles.heading}>AI Solutions for Sales <br /> and Customer Support</h1>
        <p style={styles.subheading}>
          Yugaa AI’s voice and chat agents enable lifelike,<br /> real-time interactions across your sales and support channels.
        </p>
        <button style={styles.button}>Explore Product</button>
      </motion.div>

      <div style={styles.container}>
        <div style={styles.sidebar}>
          {features.map((feature, index) => (
            feature.heading ? (
              <div key={feature.heading} style={styles.sidebarHeading}>
                {feature.heading}
              </div>
            ) : (
              <motion.button
                key={feature.title}
                onClick={() => setActiveButton(feature.title)}
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                style={{
                  ...styles.sidebarItem,
                  ...(activeButton === feature.title ? styles.activeSidebarItem : {}),
                }}
              >
                {feature.icon} {feature.title}
              </motion.button>
            )
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
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
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
    gap: '10px',
    color: '#9ba3b2',
  },
  sidebarHeading: {
    fontSize: '16px',
    padding: '10px 0',
    fontWeight: 'bold',
    color: '#ffffff',
    borderBottom: '1px solid #9ba3b2',
    textTransform: 'uppercase',
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
