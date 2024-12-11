import React from "react";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";

const WorkSection = () => {
  const workItems = [
    {
      id: 1,
      date: "March 12, 2024",
      title: "Eu Amettristique Nibhsit Porttitor Ipsum Nullam Velit...",
      image: w1,
      category: "Studio",
    },
    {
      id: 2,
      date: "March 12, 2024",
      title: "Donec Amet Sitpurus Inconsectetur NisImet...",
      image: w2,
      category: "Studio",
    },
    {
      id: 3,
      date: "March 12, 2024",
      title: "Blandit Imperdiet Amet Ut Aenean Viverra.",
      image: w3,
      category: "Studio",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "40px" }}>Our Work</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {workItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  {item.date}
                </p>
                <span
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {item.category}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  margin: "10px 0",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
