import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SupportSection from "./components/SupportSection";
import SolutionSection from "./components/SolutionSection";
import AgentSection from "./components/AgentSection";
import Footer from "./components/Footer"; // Import Footer
import Pricingpage from "./components/Pricingpage";
import IntegrationsPage from "./components/IntegrationsPage";
import AboutPage from "./components/AboutPage";
import EnterprisePage from "./components/EnterprisePage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Main Home Route with all sections */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <SupportSection />
                <SolutionSection />
                {/* <AgentSection /> */}
              </>
            }
          />

          {/* Support Page Route */}
          <Route path="/support" element={<SupportSection />} />

          {/* Pricing Page Route */}
          <Route path="/pricing" element={<Pricingpage />} />

          {/* Integrations Page Route */}
          <Route path="/integrations" element={<IntegrationsPage />} />

          {/* About Us Page Route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Enterprise Page Route */}
          <Route path="/enterprise" element={<EnterprisePage />} />

          {/* Contact Us Page Route */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer rendered once for all routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
