import React from "react";
import DummySlider from "../../Components/Assets/slider.png";
import "./Home.scss";
import ListFilm from "../../Components/ListFilm/ListFilm";
import AiringMovie from "../../Components/AiringMovie/AiringMovie";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="landingPages">
          <div className="scrolling-film-container">
            <Slider {...settings}>
              <img src={DummySlider} alt="" width={"720px"} height={"460px"} />
              <img src={DummySlider} alt="" width={"720px"} height={"460px"} />
              <img src={DummySlider} alt="" width={"720px"} height={"460px"} />
              <img src={DummySlider} alt="" width={"720px"} height={"460px"} />
            </Slider>
          </div>
          <div className="airing-container">
            <p className="airing-title">Top Airing Movie</p>
            <AiringMovie />
            <AiringMovie />
            <AiringMovie />
            <AiringMovie />
          </div>
        </div>
        <div>
          <ListFilm />
          <ListFilm />
          <ListFilm />
          <ListFilm />
          <ListFilm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
