/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Lottie from "lottie-react";
import animationData from "../../assets/animations/githubAnimation.json";
export default function WorkCards(props) {
  return (
    <>
      <div
        id="card"
        className="relative bg-[#121212] text-white p-8 rounded-lg shadow-lg"
      >
        {/* <!-- Bookmark button with GitHub logo as an avatar --> */}
        <a
          href="#"
          className="absolute top-3 right-5 md:top-1 md:right-4 p-2  text-white rounded-full"
        >
          <Lottie
            className="w-12 h-12 md:w-20 md:h-20 rounded-full"
            loop={true}
            animationData={animationData}
          />
        </a>

        {/* <!-- Image Area --> */}
        <div className="mb-8">
          {/* <!-- Your image goes here --> */}
          <img
            src="https://images.unsplash.com/photo-1430132594682-16e1185b17c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* <!-- Description Area --> */}
        <div>
          {/* <!-- Your description content goes here --> */}
          <h2 className="text-2xl font-semibold mb-4 text-start">
            {props.title}
          </h2>
          <p className="text-gray-300 text-start">{props.desc}</p>
        </div>
      </div>
    </>
  );
}
