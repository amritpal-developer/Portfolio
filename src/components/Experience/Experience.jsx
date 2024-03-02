import React from "react";
import "./Experience.css";
export const Experience = () => {
  const item = [
    {
      title: "8+",
      h2: "years",
      h3: "Experience",
    },
    {
      title: "30+",
      h2: "completed",
      h3: "Projects",
    },
    {
      title: "2+",
      h2: "companies",
      h3: "work",
    },
  ];
  function ExperienceItem(data) {
    return (
      <li className="achievement">
        <div className="circle">{data?.title}</div>
        <span>{data?.h2}</span>
        <br />
        <span>{data?.h3}</span>
      </li>
    );
  }
  return (
    <div className="experience">
      <ul>{item.map((data) => ExperienceItem(data))}</ul>
    </div>
  );
};
