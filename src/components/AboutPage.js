import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div style={styles.container}>
      {/* Title with fade-in animation */}
      <motion.h1 
        style={styles.title} 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About Us
      </motion.h1>

      {/* Subtitle with a subtle fade-in animation */}
      <motion.p 
        style={styles.subtitle} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Empowering Businesses with Autonomous AI Agents
      </motion.p>

      {/* Animated Paragraphs */}
      <motion.p 
        style={styles.paragraph} 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        At Yugaa AI, we’re building the future of intelligent automation. We develop autonomous AI agents that work independently, handling complex sales and customer service tasks across voice and chat. Our agents don’t just assist—they actively engage, support, and drive results around the clock.
      </motion.p>

      {/* Section Title with a simple fade-in */}
      <motion.h2 
        style={styles.sectionTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        What Makes Us Different?
      </motion.h2>

      {/* Animated List Items */}
      <motion.ul 
        style={styles.list}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delay: 0.8 } }
        }}
      >
        {[ 
          { text: "Truly Autonomous: Our agents are designed to operate independently, managing entire customer journeys from start to finish without human intervention." },
          { text: "Multi-Channel Expertise: Yugaa AI agents seamlessly integrate across voice and chat, ensuring customers receive cohesive and consistent support on their preferred channels." },
          { text: "Continuous Learning and Adaptability: Each interaction helps our AI agents grow smarter, learning from past experiences to provide more personalized and efficient responses over time." },
          { text: "Scalable for Any Business: From small businesses to large enterprises, our solutions are designed to scale, offering flexible plans and features that evolve with your business needs." }
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * index }}
            style={styles.listItem}
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>

      {/* Vision Section */}
      <motion.h2 
        style={styles.sectionTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      >
        Our Vision for the Future
      </motion.h2>
      <motion.p 
        style={styles.paragraph}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
      >
        Yugaa AI is just getting started. While our first generation of AI agents is focused on sales and customer service, our vision is to expand into a full suite of autonomous agents that support various business functions. We envision a world where AI not only assists but actively works across different tasks, helping businesses optimize operations and deliver superior customer experiences.
      </motion.p>

      {/* Call-to-Action Section */}
      <motion.p 
        style={styles.callToAction}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
      >
        Ready to see the future of AI? <a href="#get-started" style={styles.link}>Get Started with Yugaa AI</a>
      </motion.p>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          h1, h2 {
            font-size: 1.8rem;
          }
          p, li {
            font-size: 0.9rem;
          }
          .callToAction {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1.2rem;
          }
          p, li {
            font-size: 0.8rem;
          }
          .callToAction {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    marginBottom: "30px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
    marginTop: "30px",
    textAlign: "center",
  },
  list: {
    color: "#666",
    lineHeight: "1.6",
    paddingLeft: "20px",
    marginBottom: "20px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  listItem: {
    marginBottom: "10px",
  },
  callToAction: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: "40px",
  },
  link: {
    color: "#ff4081",
    textDecoration: "none",
  },
};

export default AboutPage;
