import React, { Component } from "react";
import "./AboutUs.css";
import aboutImage from "../assets/Img.png";

class AboutUs extends Component {
  render() {
    return (
      <section className="about-us">
        <div className="about-us__container">
          <h3 className="about-us__head1">ABOUT US</h3>
          <h1 className="about-us__title">Explore Who We Are?</h1>
          <div className="about-us__content">
            <div className="about-us__image-wrapper">
              <img
                src={aboutImage}
                alt="Our Team"
                className="about-us__image"
              />
            </div>
            <div className="about-us__text">
              <h2>Our Mission</h2>
              <p>
                Arabian Broadcast is a leading advertising agency, specializing
                in creative and impactful broadcast solutions. We bring your
                brand to life through captivating visuals and compelling
                storytelling.
              </p>
              <p>
                Our team combines innovation with strategy to create
                unforgettable campaigns. Let us help you amplify your brand and
                connect with consumers like never before.
              </p>
              <button className="about-us__button">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
