import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
  const features = [
    {
      id: 1,
      number: "01. ",
      title: "Purchase",
      description:
        "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business needs.",
      content: (
        <div className="toggle-container">
          <div className="plan-options">
            <button className="plan-btn">Basic</button>
            <button className="plan-btn">Pro</button>
            <button className="plan-btn">Custom</button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      number: "02. ",
      title: "Request",
      description:
        "Start requesting the functions you need. Your developers are right there to transform your ideas into reality.",
      content: (
        <div className="icon-grid">
          <i className="fab fa-stripe fa-3x"></i>
          <i className="fab fa-github fa-3x"></i>
          <i className="fab fa-react fa-3x"></i>
          <i className="fab fa-node fa-3x"></i>
        </div>
      ),
    },
    {
      id: 3,
      number: "03. ",
      title: "Build",
      description:
        "Our developers swiftly begin building your custom website, prioritizing speed without compromising on quality.",
      content: (
        <div className="code-snippet">
          <pre>
            <code>
              {`const App = () => {
  return (
    <>
      <Header />
      <FeatureSection />
      <Footer />
    </>
  );}`}
            </code>
          </pre>
        </div>
      ),
    },
    {
      id: 4,
      number: "04. ",
      title: "Test & optimize",
      description:
        "You either approve or request revisions – we're dedicated to refining our builds until you're fully satisfied.",
      content: (
        <div className="progress-bars">
          <div className="progress-item">
            <span>Speed</span>
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
          <div className="progress-item">
            <span>Security</span>
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <div className="progress-item">
            <span>Accuracy</span>
            <div className="progress-bar" style={{ width: "90%" }}></div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      number: "05. ",
      title: "Become an industry leader",
      description:
        "Continue requesting as many revisions or updates as you wish, and transform your business into a worldwide industry leader.",
      content: (
        <div className="globe-animation">
          <img src={`${process.env.PUBLIC_URL}/assets/feature5.png`} alt="Globe Animation" />
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="features-section">
      <h2 className="section-title">
        Our <span className="highlight1">process</span>
      </h2>
      <div className="features-flex">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-content-container">
            <div className="feature-content">{feature.content}</div>
            </div>
            <h3>{feature.number}<span>{feature.title}</span></h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
