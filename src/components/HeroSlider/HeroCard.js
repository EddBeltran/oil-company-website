import React from "react";
import Button from "../UI/Button";

function HeroCard({ title, paragraph, callToAction, active }) {
  return (
    <div className="hero-card">
      <div className={`hero-card__container ${active}`}>
        <h1 className="hero-card__container__title">{title}</h1>
        <p className="hero-card__container__paragraph">{paragraph}</p>
        <Button text={callToAction} buttonStyle="secondary" />
      </div>
    </div>
  );
}

export default HeroCard;
