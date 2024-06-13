import React from "react";
import './services.css'

function Services() {
  return (
    <div className="services">
      <h1>This is the services section in component</h1>
      <div className="service">
        <i className="service-icon fa fa-code"></i>
        <h2 className="service-title">Web Development</h2>
        <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <button className="service-button">Learn More</button>
      </div>
      <div className="service">
        <i className="service-icon fa fa-mobile"></i>
        <h2 className="service-title">Mobile App Development</h2>
        <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <button className="service-button">Learn More</button>
      </div>
      <div className="service">
        <i className="service-icon fa fa-camera"></i>
        <h2 className="service-title">Photography</h2>
        <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <button className="service-button">Learn More</button>
      </div>
    </div>
  );
}

export default Services;