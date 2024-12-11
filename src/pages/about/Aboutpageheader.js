import React, { Component } from "react";
import "./Aboutpageheader.css";
import logo from "../../assets/image 1 (1).png";
import { FaBars, FaTimes } from "react-icons/fa";
import mapimg from "../../assets/Map Image.png";

class Aboutpageheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isMobile: window.innerWidth <= 768, // Track mobile screen size
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  // Update the screen size and layout when the window is resized
  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 768,
    });
  };

  componentDidMount() {
    // Add event listener for resizing
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // Clean up the event listener on unmount
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { isMobile, isMenuOpen } = this.state;

    const containerStyle = {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      flexWrap: isMobile ? "wrap" : "nowrap",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      backgroundColor: "#1d2939",
      color: "#ffffff",
    };

    const textStyle = {
      flex: "1 1 50%",
      padding: "20px",
      fontSize: "16px",
      textAlign: "left",
      order: 1, // Text comes first by default
    };

    const headingStyle = {
      fontSize: "36px",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#fff",
    };

    const subheadingStyle = {
      fontSize: "24px",
      color: "#ff5722", // Orange color
      textTransform: "uppercase",
      textAlign: isMobile ? "center" : "left",
    };

    const imageStyle = {
      flex: "1 1 50%",
      height: "400px",
      border: "2px solid #ff5722", // Orange border
      borderRadius: "10px",
      overflow: "hidden",
      backgroundSize: "cover", // Ensures the image covers the container
      backgroundPosition: "center",
      order: 2, // Image comes second by default
    };

    const mobileStyle = isMobile
      ? {
          flex: "1 1 100%",
          textAlign: "center",
          height: "300px",
        }
      : {};

    const mobileTextStyle = isMobile
      ? {
          textAlign: "center",
        }
      : {};

    const mobileImageStyle = isMobile
      ? {
          height: "200px",
          order: 1, // Image comes after text on mobile
        }
      : {};

    return (
      <>
        {/* Header Section */}
        <header
          className="header1"
          style={{
            backgroundColor: "#1d2939",
            display: "flex",
            justifyContent: isMobile ? "space-between" : "space-around", // Change justifyContent based on screen size
            alignItems: "center",
            padding: "0 5%",
            height: "auto",
            paddingTop: "1rem",
          }}
        >
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
            <ul>
              <li>
                <a href="/">Home</a>
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
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </header>

        {/* Hero Section */}
        <div style={containerStyle}>
          <div style={{ ...textStyle, ...mobileTextStyle }}>
            <h3 style={subheadingStyle}>ABOUT US!</h3>
            <h1 style={headingStyle}>Explore More About Us!</h1>
            <p style={{ color: "#fff" }}>
              Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc
              aliquam magna lacinia nulla risus. Montes magna praesent
              scelerisque pharetra.
            </p>
          </div>
          <div style={{ ...imageStyle, ...mobileImageStyle }}>
            <img
              src={mapimg}
              alt="About Us"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Aboutpageheader;
