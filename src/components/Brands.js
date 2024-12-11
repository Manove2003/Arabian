import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Brands.css";
import m1 from "../assets/1.png";
import m2 from "../assets/02.png";
import m3 from "../assets/3.png";
import m4 from "../assets/4.png";

const brands = [
  { id: 1, imgSrc: m1, alt: "Jeddah" }, // Assign m1 directly
  { id: 2, imgSrc: m2, alt: "Casablanca" },
  { id: 3, imgSrc: m3, alt: "Argentina" },
  { id: 4, imgSrc: m4, alt: "Baku" },
  { id: 5, imgSrc: m1, alt: "Tokyo" },
];

const Brands = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    setVisibleIndex((prev) => (prev + 1) % brands.length);
  };

  const visibleBrands = [
    ...brands.slice(visibleIndex, visibleIndex + itemsToShow),
    ...brands.slice(0, Math.max(0, visibleIndex + itemsToShow - brands.length)),
  ];

  return (
    <div className="brands-container">
      <h2>Explore Our Brands</h2>
      <div className="brands-slider-wrapper">
        <div className="brands-slider">
          {visibleBrands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <div className="brand-circle">
                <img src={brand.imgSrc} alt={brand.alt} className="brand-img" />
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Brands;
