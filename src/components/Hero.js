import React from "react";
import { Button } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/feature5.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.2,
          zIndex: 2,
          pointerEvents: "none",
        }}
      ></div>
      <div>
        <h1 className="display-3 fw-bold">
          Driving growth with <span className="highlight4">sites</span>.
        </h1>
        <p className="mt-3 fs-5">
          We craft amazing websites for amazing companies.
        </p>
        <div className="mt-4">
          <Button variant="outline-light" className="me-3 px-4 py-2">
            Our process
          </Button>
          <Button variant="light" className="px-4 py-2">
            Get in touch ↗
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
