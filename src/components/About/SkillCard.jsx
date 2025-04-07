import React from "react";
import { motion } from "framer-motion";

export default function SkillCard(props) {
  return (
    <>
      <div className="skill-card">
        <div className="skill-card-header">
          <Lottie
            className="h-[20rem] w-48"
            animationData={props.animationData}
          />
        </div>
        <h1 className="font-semibold text-center text-white">{props.skill}</h1>
      </div>
    </>
  );
}

