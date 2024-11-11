import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

function EnterprisePage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Page Title */}
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Autonomous AI Agents, Built for Enterprise
        </motion.h1>

        {/* Main Description */}
        <motion.p
          style={styles.paragraph}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Yugaa AI empowers large organizations with cutting-edge, autonomous AI agents that handle customer engagement, sales, and support across both voice and chat. Designed to operate independently 24/7, our AI agents provide exceptional scalability, efficiency, and customer satisfaction without the overhead of additional staffing.
        </motion.p>

        {/* Why Choose Section */}
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Why Choose Yugaa AI for Your Enterprise?
        </motion.h2>
        <motion.ul style={styles.list} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <li style={styles.listItem}>
            <strong>Maximize Efficiency, Minimize Costs:</strong> Our autonomous AI agents reduce operational costs by managing complex interactions without human intervention, allowing your team to focus on strategic tasks.
          </li>
          <li style={styles.listItem}>
            <strong>Multi-Channel Engagement:</strong> Yugaa AI consolidates voice and chat capabilities into one platform, delivering consistent, high-quality interactions across channels to meet your customers wherever they are.
          </li>
          <li style={styles.listItem}>
            <strong>Replicate Proven Success:</strong> Transform your best-performing strategies into AI-driven playbooks that continuously learn and optimize, driving conversions and support excellence at scale.
          </li>
          <li style={styles.listItem}>
            <strong>Focus on High-Value Activities:</strong> By automating routine inquiries and follow-ups, your team can focus on relationship building and complex problem-solving, where human input adds the most value.
          </li>
        </motion.ul>

        {/* Integration Section */}
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          Seamless Integration & Easy Onboarding
        </motion.h2>
        <motion.p style={styles.paragraph} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}>
          Switching to Yugaa AI is effortless. Our dedicated team works closely with you to integrate our platform into your existing workflows, ensuring a smooth transition with minimal disruption.
        </motion.p>
        
        <motion.ul style={styles.list} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
          <li style={styles.listItem}><strong>Phase 1: Pilot Program</strong></li>
          <li style={styles.listItem}>- Discovery Call: Understand your current workflows and enterprise goals.</li>
          <li style={styles.listItem}>- Proposal & Implementation Strategy: Custom-fit Yugaa AI to your needs.</li>
          <li style={styles.listItem}>- Pilot Launch: Test a sample with your team for feedback.</li>
          <li style={styles.listItem}>- Ongoing Optimization: Weekly syncs with your dedicated account manager.</li>
          <li style={styles.listItem}><strong>Phase 2: Full Rollout</strong></li>
          <li style={styles.listItem}>- Transition Strategy: Reflect on pilot outcomes and prepare for full deployment.</li>
          <li style={styles.listItem}>- Full System Integration: Seamless connection with your enterprise tech stack.</li>
          <li style={styles.listItem}>- Custom Feature Development: Tailored features to maximize effectiveness.</li>
          <li style={styles.listItem}>- Comprehensive Training: Onboard your team with Yugaa AI’s capabilities.</li>
          <li style={styles.listItem}>- Dedicated Support: Hands-on assistance and ongoing account management.</li>
        </motion.ul>

        {/* Security Section */}
        <motion.h2
          style={styles.sectionTitle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
        >
          Enterprise-Grade Security and Compliance
        </motion.h2>
        <motion.p style={styles.paragraph} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}>
          Yugaa AI is committed to upholding the highest standards in data security and compliance. Your customer data is protected with stringent security protocols, ensuring privacy and trust.
        </motion.p>

        {/* Call-to-Action */}
        <motion.p
          style={styles.callToAction}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
        >
          Ready to Transform Your Enterprise with Autonomous AI? <a href="#get-started" style={styles.link}>Get Started Today or Contact Sales</a>
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    width: "100vw",
    fontFamily: "Arial, sans-serif",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
    marginTop: "30px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  listItem: {
    color: "#666",
    lineHeight: "1.6",
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

export default EnterprisePage;
