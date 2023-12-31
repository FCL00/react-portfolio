import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export default function SkillCard(props) {
  return (
    <>
      <div className="w-full md:w-1/4 flex flex-col justify-around h-full text-white  p-4 rounded-xl]">
        <div className="flex justify-center mb-4 ]">
          <Lottie
            className="h-[20rem] w-48"
            animationData={props.animationData}
          />
        </div>
        <h1 className="text-white text-center font-semibold">{props.skill}</h1>
      </div>
    </>
  );
}

{
  /* from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] */
}
{
  /* <div className="rounded-xl w-52 h-64 mx-auto  mt-10 bg-gradient-to-r p-[4px] from-[#181818] to-[#6EE7B7]">
        <div className="flex flex-col justify-around h-full bg-[#181818] text-white rounded-lg p-4">
          <div className="flex justify-center mb-4">
            <Lottie className="h-48 w-48" animationData={props.animationData} />
          </div>
          <h1 className="text-white text-center font-semibold">
            {props.skill}
          </h1>
        </div>
      </div> */
}
