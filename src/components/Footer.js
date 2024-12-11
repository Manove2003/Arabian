import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/image 1 (1).png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src={logo} // Replace with your logo URL
          alt="Arabian Broadcast Logo"
        />
      </div>
      <div className="footer-links">
        <nav className="footer-nav">
          <a href="/about">About Us</a>
          <a href="/brand">Brands</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <nav className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#cookie">Cookie Policy</a>
        </nav>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; Copyright {new Date().getFullYear()} Arabian Broadcast. All
          Rights Reserved
        </p>
        <div className="footer-social">
          <a href="#facebook">
            <FaFacebookF />
          </a>
          <a href="#twitter">
            <FaTwitter />
          </a>
          <a href="#instagram">
            <FaInstagram />
          </a>
          <a href="#youtube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
