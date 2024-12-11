import React from "react";
import "./AdvertiseWithUs.css";
import advertiseImage from "../../assets/advertise.png"; // Update with the correct image path

class AdvertiseWithUs extends React.Component {
  render() {
    return (
      <section className="advertise-section">
        <div className="advertise-container">
          {/* Left Section - Text */}
          <div className="advertise-text">
            <h1 style={{ color: "#fff" }}>Advertise With Us</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.6) " }}>
              Arabian Broadcast is a leading advertising agency, specializing in
              creative and impactful broadcast solutions. We bring your brand to
              life through captivating visuals and compelling storytelling. With
              expertise in TV, radio, and digital media, we ensure your message
              reaches the right audience.
            </p>
            <button className="get-started-btn">Get Started</button>
          </div>

          {/* Right Section - Image */}
          <div className="advertise-image">
            <img src={advertiseImage} alt="Advertise" />
          </div>
        </div>
      </section>
    );
  }
}

export default AdvertiseWithUs;
