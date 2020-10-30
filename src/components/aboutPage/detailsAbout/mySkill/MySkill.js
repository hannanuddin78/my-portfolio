import React from "react";
import { SkillBars } from "react-skills";

const skills = [
  {
    name: "HTML5",
    level: 99.9,
    color: "#6cc24a",
  },
  {
    name: "CSS3",
    level: 99.9,
    color: "#00758f",
  },
  {
    name: "Bootstrap",
    level: 90,
    color: "#e535ab",
  },
  {
    name: "JavaScript",
    level: 80,
    color: "#6cc24a",
  },
  {
    name: "Express JS",
    level: 95,
    color: "#6cc24a",
  },
  {
    name: "Node Js",
    level: 90,
    color: "#00758f",
  },
  {
    name: "MongoDB",
    level: 99.9,
    color: "#e535ab",
  },
  {
    name: "Redux",
    level: 80,
    color: "#371777",
  },
  {
    name: "React JS",
    level: 90,
    color: "#050f2c",
  },
];

const MySkill = () => {
  return (
    <div className="skills">
      <SkillBars skills={skills} />
    </div>
  );
};

export default MySkill;
