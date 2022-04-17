import React from "react";
import { useState } from "react";
import Icon from "../UI/Icon";

function Collapsible(props) {
  const [linkVisible, setLinksVisible] = useState(false);
  
  function collapsibleLinks() {
    var mediaQuery = document.body.clientWidth;

    if (mediaQuery <= 768){
      setLinksVisible((prevState) => !prevState);
      console.log("change state")
    }
  }

  const links = props.links.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="collapsible">
      <div onClick={collapsibleLinks} className={linkVisible ? "collapsible__title active" : "collapsible__title"}>
        <p>{props.category}</p>
        <Icon name="arrow" color="#fff" size="25" />
      </div>
      <ul className="collapsible__list">{links}</ul>
    </div>
  );
}

export default Collapsible;
