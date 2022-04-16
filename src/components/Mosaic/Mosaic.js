import React from "react";
import HeadSection from "../UI/HeadSection";
import MosaicCell from "./MosaicCell";
import one from "../../assets/images/plataforma.jpeg";
import two from "../../assets/images/eolic.jpg";
import three from "../../assets/images/3D_seismic.jpg";

function Mosaic() {
  return (
    <section className="big-container block--big block-primary">
      <div className="small-container">
        <HeadSection title="Proyectos e Innovación" textStyle="primary" />
      </div>
      <div className="mosaic">

        <div className="one mosaic__cell">
          <MosaicCell image={one} text="Aguas Profundas" />
        </div>
        <div className="two mosaic__cell">
        <MosaicCell image={three} text="Sismica 2D y 3D" />
        </div>
        <div className="three mosaic__cell">
        <MosaicCell image={two} text="Energias Limpias" />
        </div>
        <div className="four mosaic__cell">
        <MosaicCell image={one} text="my brop" />
        </div>
        <div className="five mosaic__cell">
        <MosaicCell image={one} text="my brop" />
        </div>
      </div>
    </section>
  );
}

export default Mosaic;
