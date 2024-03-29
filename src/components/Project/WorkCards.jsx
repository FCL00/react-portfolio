import Lottie from "lottie-react";
import animationData from "src/assets/animations/githubAnimation.json";

export default function WorkCards(props) {
  return (
    <>
      <div
        id="card"
        className="relative bg-[#121212] text-white p-8 rounded-lg shadow-lg"
      >
        {/* <!-- Bookmark button with GitHub logo as an avatar --> */}
        <a
          href={props.link}
          target="_blank"
          className="absolute top-3 right-5 md:top-1 md:right-4 "
        >
          <Lottie
            className="w-12 h-12 md:w-20 md:h-20 "
            loop={true}
            animationData={animationData}
          />
        </a>

        {/* <!-- Image Area --> */}
        <div className="mb-8">
          {/* <!-- Your image goes here --> */}
          <img
            src={props.img}
            alt="Card Image"
            className="w-full h-[200px] rounded-lg object-cover"
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
