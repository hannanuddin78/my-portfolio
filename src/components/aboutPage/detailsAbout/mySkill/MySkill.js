import React from "react";
import { SkillBars } from "react-skills";

const skills = [
  {
    name: "HTML5",
    level: 99.9,
    color: "#45bfbb",
  },
  {
    name: "CSS3",
    level: 99.9,
    color: "#45bfbb",
  },
  {
    name: "Bootstrap",
    level: 90,
    color: "#45bfbb",
  },
  {
    name: "JavaScript",
    level: 80,
    color: "#0e4543",
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
    color: "#206966",
  },
  {
    name: "Redux",
    level: 80,
    color: "#357573",
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
