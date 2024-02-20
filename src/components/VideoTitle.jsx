import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-l w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-4 w-24 rounded-lg hover:bg-opacity-80">
          {" "}
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="bg-gray-600 text-white ml-4 p-2 px-4 w-[125px] rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faInfoCircle} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
