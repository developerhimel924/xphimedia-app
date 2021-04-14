import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
// Slider Images Import
import sliderImage1 from "./SliderImages/image1.jpg";
import sliderImage2 from "./SliderImages/image2.jpg";
import sliderImage3 from "./SliderImages/image3.jpg";
import sliderImage4 from "./SliderImages/image4.jpg";
import sliderImage5 from "./SliderImages/image5.jpg";
import sliderImage6 from "./SliderImages/image6.jpg";
import sliderImage7 from "./SliderImages/image7.jpg";
import sliderImage8 from "./SliderImages/image8.jpg";
import sliderImage9 from "./SliderImages/image9.jpg";

const Slider = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={4000}>
        <img className="d-block w-100" src={sliderImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage5} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage6} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage7} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage8} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={sliderImage9} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
