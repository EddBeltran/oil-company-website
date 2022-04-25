import React from "react";
import HeroCarousel from "./HeroCarousel";
import sliderData from './sliderData.json';
import img1 from '../../assets/images/slideOne.webp';
import img2 from '../../assets/images/slideTwo.webp';
import img3 from '../../assets/images/slideThree.webp';

function Hero() {
  const slidesData = sliderData.slides;
  const slidesImages = [img1, img2, img3]

  return (
    <>
      <HeroCarousel data={slidesData} images={slidesImages} showButtons={true} autoPlay={true} />
    </>
  );
}

export default Hero;
