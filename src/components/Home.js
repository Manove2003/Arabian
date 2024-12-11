import React, { Component } from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Brands from "./Brands";
import NewsSection from "./NewsSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Brands />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;
