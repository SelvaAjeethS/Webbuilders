import React, { useState } from "react";
import "./PricingSection.css";

function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  const handleBillingToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="mb-4">
          Plans <span className="highlight">to suit your needs</span>
        </h2>

        <div className="pricing-card">
          <div className="tabs-wrapper">
            <div className="tabs">
              {["Tier 1", "Tier 2", "Tier 3", "Tier 4"].map((tier, index) => (
                <button
                  key={index}
                  className={`tab ${index === 0 ? "active" : ""}`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div className="billing-toggle">
            <span
              className={`toggle-option ${billingCycle === "Monthly" ? "active" : ""
                }`}
              onClick={() => handleBillingToggle("Monthly")}
            >
              Monthly
            </span>
            <span
              className={`toggle-option ${billingCycle === "Yearly" ? "active" : ""
                }`}
              onClick={() => handleBillingToggle("Yearly")}
            >
              Yearly (Save 20%)
            </span>
          </div>

          <p className="experience">
            OVERALL - USER EXPERIENCE: <span>GOOD</span>
          </p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: billingCycle === "Monthly" ? "70%" : "100%",
              }}
            ></div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <ul className="features-list">
                <li>
                  <i className="fa fa-check-circle"></i> Basic Design
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> 1-3 Page Website
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> Beginner Data Protection
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> Unlimited Revisions
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> AI-powered tools
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="features-list">
                <li>
                  <i className="fa fa-check-circle"></i> Basic SEO Optimized
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> Semi-Customizable
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> 1-3 Day Delivery
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> Monthly Performance Summaries
                </li>
              </ul>
            </div>
          </div>

          <div className="price">
            <h3>
              ${billingCycle === "Monthly" ? "299" : "2990"}
              <span>/ {billingCycle}</span>
            </h3>
          </div>

          <button className="get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
