import React from "react";
import HeadSection from "../UI/HeadSection";
import MosaicCell from "./MosaicCell";

import oilRigTlp from "../../assets/images/oil-rig-tlp.jpg"
import seismic from "../../assets/images/seismic.jpg";
import eolic from "../../assets/images/eolic.jpg";
import smy from "../../assets/images/3d-model.png";
import pcp from "../../assets/images/pcp.jpg";

function Mosaic() {
  return (
    <section className="big-container block--big block-primary">
      <div className="small-container">
        <HeadSection title="Proyectos e Innovación" textStyle="primary" />
      </div>
      <div className="mosaic">

        <div className="one mosaic__cell">
          <MosaicCell image={oilRigTlp} text="Exploración en Golfo de México" />
        </div>
        <div className="two mosaic__cell">
        <MosaicCell image={seismic} text="Sismica 2D y 3D en Burgos" />
        </div>
        <div className="three mosaic__cell">
        <MosaicCell image={eolic} text="Plan de Energias Renovables en Hidalgo" />
        </div>
        <div className="four mosaic__cell">
        <MosaicCell image={smy} text="Simulacion de Yacmientos en Tampico-Misantla" />
        </div>
        <div className="five mosaic__cell">
        <MosaicCell image={pcp} text="BCP en Campo Ébano" />
        </div>
      </div>
    </section>
  );
}

export default Mosaic;
