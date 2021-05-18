import React from "react";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";
import Power from "../Power";

const powerMyWork = [
  {
    id: 1,
    icon: faTachometerAlt,
    title: "Fast",
    details: "Fast load times and lag free interaction, my highest priority",
  },
  {
    id: 2,
    icon: faWindowRestore,
    title: "Responsive",
    details: "My layouts will work on any device, big or small.",
  },
  {
    id: 3,
    icon: faLightbulb,
    title: "Intuitive",
    details: "Strong preference for easy to use, intuitive UX/UI.",
  },
  {
    id: 4,
    icon: faRocket,
    title: "Dynamic",
    details: "Websites don't have to be static, I love making pages come to life",
  },
];

const PowerWork = () => {
  return (
    <Row>
      {powerMyWork.map((power) => (
        <Power key={power.id} power={power} />
      ))}
    </Row>
  );
};

export default PowerWork;
