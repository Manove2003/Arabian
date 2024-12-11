import React, { Component } from "react";
import "./Header.css";
import logo from "../assets/image 1 (1).png";
import { FaBars, FaTimes } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className={`nav ${this.state.isMenuOpen ? "nav--open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/brand">Brands</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger/Close Icon */}
        <div className="menu-icon" onClick={this.toggleMenu}>
          {this.state.isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    );
  }
}

export default Header;
