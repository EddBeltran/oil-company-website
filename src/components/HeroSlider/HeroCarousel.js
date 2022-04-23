import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import HeroSlideLink from "./HeroSlideLink";

function HeroCarousel({ data, images, showButtons, autoPlay }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);
  const [animate, setAnimate] = useState(new Array(images.length).fill(false))

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? index < images.length - 1 : index > 0;
      const nextIndex = next
        ? condition
          ? index + 1
          : 0
        : condition
        ? index - 1
        : images.length - 1;

        const newArray = [...animate].fill(false)
        newArray[nextIndex] = true 
        setAnimate(newArray)

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  function showId(id) {
    const prevId = id -1
    selectNewImage(prevId, images)
  }

  return (
    <div className="hero-carousel big-container">
      <img
        src={selectedImage}
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />

      <div className="hero-carousel__shadow">
        <div className="hero-carousel__shadow__content  small-container">
          <HeroCard
            title={data[selectedIndex].title}
            paragraph={data[selectedIndex].paragraph}
            callToAction="Abrir enlace"
            active={loaded ? "active" : ""}
          />

          {showButtons && (
            <div className="hero-carousel__shadow__content__buttons">
              {data.map((item) => (
                <HeroSlideLink
                  key={item.id}
                  title={item.title}
                  linkId={() => showId(item.id)}
                  active={animate[item.id]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
