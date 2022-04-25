import React from "react";
import ServicesCard from "./ServicesCard";

import serviceOne from "../../assets/images/serviceOne.jpeg";
import serviceTwo from "../../assets/images/serviceTwo.jpg";
import serviceThree from "../../assets/images/serviceThree.jpg";
import serviceFour from "../../assets/images/serviceFour.jpeg";

import HeadSection from "../UI/HeadSection";

function Services() {
  return (
    <section className="block">
      <div className="small-container">
        <HeadSection title="Servicios" textStyle="primary" />
        <div className="services">
          <ServicesCard
            image={serviceOne}
            title="Exploración y Producción"
            paragraph="Offshore, Onshore, sistemas artificiales."
          />
          <ServicesCard
            image={serviceTwo}
            title="Transporte y Refinación de Hidrocarburos"
            paragraph="Ductos, oleoductos y infraestructura de refinación."
          />
          <ServicesCard 
            image={serviceThree}
            title='Comercializacion de Petroliferos'
            paragraph="Gasolina, diesel y turbosina."
          />
          <ServicesCard
            image={serviceFour}
            title="Energias Limpias e Innovación"
            paragraph="Paneles solares, turbinas de viento y proyectos innovadores."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
