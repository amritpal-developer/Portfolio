import React from "react";
import "./Services.css";
import glasses from "../../Images/glasses.png";
import heartEmoji from "../../Images/heartEmoji.png";
import humble from "../../Images/humble.png";
import { Card } from "../Card/Card";
import Resume from "./resume.pdf";
export const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          reiciendis. Nobis
          <br /> quod sint voluptatem hic architecto officiis vitae facilis
          aperiam quae delectus atque <br /> obcaecati aliquam porro veniam,
          reprehenderit, provident non.
        </span>
        <a href={Resume} download={true}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "12rem" }}>
          <Card
            emoji={heartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch ,Adobe"}
          />
        </div>
        <div style={{ left: "-10rem", top: "17rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={
              "React Native, Javascript ,Native Android, IOS development, HTML 5, CSS 3"
            }
          />
        </div>
        <div style={{ left: "10rem", top: "22rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"Figma, Sketch ,Adobe"}
          />
        </div>
        <div className="blur s-blur2" style={{background:"rgb(238 210 255)"}}></div>
      </div>
    </div>
  );
};
