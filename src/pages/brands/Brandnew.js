import React, { useState } from "react";
import "./Brandnew.css";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/c9.png";
import c10 from "../../assets/c10.png";
import c11 from "../../assets/c11.png";
import c12 from "../../assets/c12.png";
import c13 from "../../assets/c13.png";
import c14 from "../../assets/c14.png";
import c15 from "../../assets/c15.png";
import c16 from "../../assets/c16.png";
import c17 from "../../assets/c17.png";
import c18 from "../../assets/c18.png";
import c19 from "../../assets/c19.png";
import c20 from "../../assets/c20.png";
import c21 from "../../assets/c21.png";
import c22 from "../../assets/c22.png";
import c23 from "../../assets/c23.png";
import c24 from "../../assets/c24.png";
import c25 from "../../assets/c25.png";
import c26 from "../../assets/c26.png";
import c27 from "../../assets/c27.png";
import c28 from "../../assets/c28.png";
import c29 from "../../assets/c29.png";
import c30 from "../../assets/c30.png";
import c31 from "../../assets/c31.png";

const cities = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
  c31,
];

// const urls = [
//   "GoodMorningJeddah.com",
//   "GoodMorningCasablanca.com",
//   "GoodMorningArgentina.com",
//   "GoodMorningBaku.com",
//   "GoodMorningSingapore.com",
//   "GoodMorningTelaviv.com",
//   "GoodMorningBurj.com",
//   "GoodMorningAthens.com",
//   "GoodMorningBeijing.com",
//   "GoodMorningEgypt.com",
//   "GoodMorningSeoul.com",
//   "GoodMorningGreece.com",
//   "GoodMorningMuscat.com",
//   "GoodMorningAmman.com",
//   "GoodMorningMalaysia.com",
//   "GoodMorningNewDelhi.com",
//   "GoodMorningMiddleEast.com",
//   "GoodMorningMoscow.com",
//   "GoodMorningLebanon.com",
//   "GoodMorningLagos.com",
//   "GoodMorningDoha.com",
//   "GoodMorningDamascus.com",
//   "GoodMorningSaudiArabia.com",
//   "GoodMorningLibya.com",
//   "GoodMorningTehran.com",
//   "GoodMorningBagdad.com",
//   "GoodMorningBrazil.com",
//   "GoodMorningTaiwan.com",
//   "GoodMorningBeirut.com",
//   "GoodMorningTunisia.com",
//   "GoodMorningRiyadh.com",
// ];
const urls = [
  "http://GoodMorningJeddah.com",
  "http://GoodMorningCasablanca.com",
  "http://GoodMorningArgentina.com",
  "http://GoodMorningBaku.com",
  "http://GoodMorningSingapore.com",
  "http://GoodMorningTelaviv.com",
  "http://GoodMorningBurj.com",
  "http://GoodMorningAthens.com",
  "http://GoodMorningBeijing.com",
  "http://GoodMorningEgypt.com",
  "http://GoodMorningSeoul.com",
  "http://GoodMorningGreece.com",
  "http://GoodMorningMuscat.com",
  "http://GoodMorningAmman.com",
  "http://GoodMorningMalaysia.com",
  "http://GoodMorningNewDelhi.com",
  "http://GoodMorningMiddleEast.com",
  "http://GoodMorningMoscow.com",
  "http://GoodMorningLebanon.com",
  "http://GoodMorningLagos.com",
  "http://GoodMorningDoha.com",
  "http://GoodMorningDamascus.com",
  "http://GoodMorningSaudiArabia.com",
  "http://GoodMorningLibya.com",
  "http://GoodMorningTehran.com",
  "http://GoodMorningBagdad.com",
  "http://GoodMorningBrazil.com",
  "http://GoodMorningTaiwan.com",
  "http://GoodMorningBeirut.com",
  "http://GoodMorningTunisia.com",
  "http://GoodMorningRiyadh.com",
];

const Brandnew = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedImages = showMore ? cities : cities.slice(0, 12);

  return (
    <div className="container">
      <h1>Arabian Broadcast Available Across The World</h1>
      <div className="image-grid">
        {displayedImages.map((image, index) => (
          <a
            key={index}
            href={urls[index] || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image} alt={`City ${index + 1}`} className="city-image" />
          </a>
        ))}
      </div>
      <button className="toggle-button" onClick={toggleShowMore}>
        {showMore ? "Show Less" : "More Cities"}
      </button>
    </div>
  );
};

export default Brandnew;
