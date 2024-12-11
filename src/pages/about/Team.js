import React from "react";
import "./Team.css";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";

const teamMembers = [
  {
    name: "Roselyn Ward",
    title: "Founder & CEO",
    description:
      "Dictum et volutpat duis faucibus mauris nec. At quam molestie.",
    imgUrl: t1,
  },
  {
    name: "Joan Hansen",
    title: "Founder & CEO",
    description:
      "Dictum et volutpat duis faucibus mauris nec. At quam molestie.",
    imgUrl: t2,
  },
  {
    name: "Averi Davies",
    title: "Founder & CEO",
    description:
      "Dictum et volutpat duis faucibus mauris nec. At quam molestie.",
    imgUrl: t3,
  },
  {
    name: "Kelvin Levy",
    title: "Founder & CEO",
    description:
      "Dictum et volutpat duis faucibus mauris nec. At quam molestie.",
    imgUrl: t4,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        OUR TEAM
      </h3>
      <h2>Meet Our Professional Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.imgUrl} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
