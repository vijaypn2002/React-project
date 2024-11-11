import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SupportSection from "./components/SupportSection";
import SolutionSection from "./components/SolutionSection";
import AgentSection from "./components/AgentSection";
import BusinessSolutionsSection from "./components/BusinessSolutionsSection";
import Footer from "./components/Footer";
import PricingPage from "./components/Pricingpage"; // Import the Pricing Page component
import IntegrationsPage from "./components/IntegrationsPage"; // Import the Integrations Page component
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

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
                <AgentSection />
                <Footer /> {/* Footer included within home route */}
              </>
            }
          />
          {/* Pricing Route */}
          <Route path="/pricing" element={<PricingPage />} />
          {/* Integrations Route */}
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
