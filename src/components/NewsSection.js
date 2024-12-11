import React from "react";
import "./NewsSection.css";
import { FaArrowRight } from "react-icons/fa";
import new3 from "../assets/new1.png";
import new2 from "../assets/new2.png";
import new1 from "../assets/new3.png";
const newsData = [
  {
    id: 1,
    image: new1, // Replace with your image URL
    date: "March 12, 2024",
    category: "Development",
    title: "Eu Amettristique Nibh Sit Porttitor Ipsum Nullam Velit...",
    link: "#",
  },
  {
    id: 2,
    image: new2, // Replace with your image URL
    date: "March 12, 2024",
    category: "Development",
    title: "Donec Amet Sit Purus Inconsectetur Nisl Met...",
    link: "#",
  },
  {
    id: 3,
    image: new3, // Replace with your image URL
    date: "March 12, 2024",
    category: "Cyber Security",
    title: "Blandit Imperdiet Amet Ut Aenean Viverra.",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h3 className="about-us__head1">LATEST NEWS</h3>
      <h2>Explore Newses</h2>
      <div className="news-cards">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-info">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className="news-date">{news.date}</p>
                <span className="news-category">{news.category}</span>
              </div>
              <h4 className="news-title">{news.title}</h4>
              <a href={news.link} className="read-more">
                Read more <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
