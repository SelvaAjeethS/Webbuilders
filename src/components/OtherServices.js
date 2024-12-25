import React from "react";
import "./OtherServices.css";

function OtherServices() {
  return (
    <div id="services" className="other-services-section">
      <h2>
        Other <span className="highlight2">services</span>
      </h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-content">
            <div className="icon-section">
              <i className="fas fa-bolt"></i> Framer
              <p>New contact form submission</p>
            </div>
            <div className="icon-section">
              <i className="fas fa-database"></i> Airtable
              <p>Add data to Airtable</p>
            </div>
            <div className="icon-section">
              <i className="fas fa-brain"></i> OpenAI
              <p>Write personalized messages</p>
            </div>
          </div>
          <h3>Workflow automations</h3>
          <p>
            We automate your website by connecting your favorite applications.
            Boosting efficiency and enhancing productivity.
          </p>
        </div>

        <div className="service-card">
          <div className="service-content">
            <img src="/assets/feature5.png" alt="Globe Animation" />
          </div>
          <h3>Chatbot development</h3>
          <p>
            We develop advanced chatbots that are reactive, understand nuances,
            and are capable of solving extremely complicated queries.
          </p>
        </div>

        <div className="service-card">
          <div className="service-content">
            <img src="/assets/feature2.png" alt="Graph" />
          </div>
          <h3>Business consulting</h3>
          <p>
            Using our expertise, we dive deep into your business and consult you
            on how a new website could enhance your operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
