import React, { Component } from "react";
import "./AdvertiseWithUs.css";
import advertiseImage from "../../assets/advertisecontact.png";

class AdvertiseWithUs extends Component {
  render() {
    return (
      <section className="advertise">
        <div className="advertise__container">
          <div className="advertise__text">
            <h1 style={{ textAlign: "left", color: "#fff" }}>
              Advertise With Us
            </h1>
            <p>
              Arabian Broadcast is a leading advertising agency, specializing in
              creative and impactful broadcast solutions. We bring your brand to
              life through captivating visuals and compelling storytelling. With
              expertise in TV, radio, and digital media, we ensure your message
              reaches the right audience.
            </p>
            <button className="advertise__button">Get Started</button>
          </div>
          <div className="advertise__image-wrapper">
            <img
              src={advertiseImage}
              alt="Advertise With Us"
              className="advertise__image"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default AdvertiseWithUs;
