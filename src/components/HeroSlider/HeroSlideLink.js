import React from "react";

function HeroSlideLink({ title, linkId, active }) {
  return (
    <div className="hero-slide-link" onClick={linkId}>
      <div className="hero-slide-link__progressbar">
        <div className={active ? "hero-slide-link__progressbar__bar active" : "hero-slide-link__progressbar__bar"}></div>
      </div>
      <h3 className="hero-slide-link__title">{title}</h3>
    </div>
  );
}

export default HeroSlideLink;
