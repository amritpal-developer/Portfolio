import React from "react";
import "./Intro.css";
import github from "../../Images/github.png";
import linkedin from "../../Images/linkedin.png";
import crown from "../../Images/crown.png";
import boy from "../../Images/boy.png";
import vector1 from "../../Images/Vector1.png";
import vector2 from "../../Images/Vector2.png";
import thumbup from "../../Images/thumbup.png";
import glassImoji from "../../Images/glassesimoji.png";
import Floating from "../FloatingDev/Floating";
export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>{"Amritpal"}</span>
          <span>
            Dedicated and results-driven Software Developer with over one year
            of professional experience in designing, developing, and maintaining
            robust software solutions. Proficient in multiple programming
            languages, including JavaScript, React-Native, Android Studio, IOS
            Development and adept at collaborating with cross-functional teams
            to deliver high-quality products within specified timelines.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={github} alt="error" />
          <a href="https://www.linkedin.com/in/amritpal25/">
            <img src={linkedin} alt="error" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="error" />
        <img src={vector2} alt="error" />
        <img src={boy} alt="error" />
        <img src={glassImoji} alt="error" />
        <div style={{ top: "-3%", left: "57%" }}>
          <Floating
            content={{
              image: crown,
              text1: "Web",
              text2: "Development",
            }}
          />
        </div>
        <div style={{ top: "23rem", left: "4rem" }}>
          <Floating
            content={{
              image: thumbup,
              text1: "Best",
              text2: "Design",
            }}
          />
        </div>
        <div className="blur" style={{ background: "rgb(233 210 255)" }}></div>
        <div className="blur" style={{ background: '#C1F5FF',top:'17rem',width:'21rem',height:'11rem' ,left:'-6rem'}}></div>
      </div>
    </div>
  );
}
