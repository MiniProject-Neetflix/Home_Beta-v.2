import React from "react";
import DummySlider from "../Assets/slider.png";
import Star from "../Star/Star";

const AiringMovie = () => {
  return (
    <div className="airing-box">
      <img
        className="airing-images"
        src={DummySlider}
        alt=""
        width={"90px"}
        height={"85px"}
      />
      <div className="airing-text-container">
        <p className="airing-film-title">Spiderman No Way Home</p>
        <p className="airing-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Star />
      </div>
    </div>
  );
};

export default AiringMovie;
