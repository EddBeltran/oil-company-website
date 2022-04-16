import React from "react";
import Fact from "./Fact";

function CompanyFacts() {
  return (
    <section className="block block--primary big-container">
      <div className="company-facts grid grid--1x4 small-container">
        <Fact
          iconName="barrel"
          iconColor="white"
          iconSize="40"
          number="+5,000"
          text="barrels per day"
        />
        <Fact
          iconName="engineer"
          iconColor="white"
          iconSize="50"
          number="+200"
          text="workers"
        />
        <Fact
          iconName="map"
          iconColor="white"
          iconSize="40"
          number="9"
          text="fields"
        />
        <Fact
          iconName="sucker-rod"
          iconColor="white"
          iconSize="50"
          number="75"
          text="wells"
        />
      </div>
    </section>
  );
}

export default CompanyFacts;
