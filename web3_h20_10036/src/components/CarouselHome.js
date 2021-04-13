import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";
import sliderImg1 from "../images/ps5xbox-bg.jpg";
import sliderImg2 from "../images/ps5-xbox-controller.jpg";
import sliderImg3 from "../images/games-collage.jpg";


const CarouselHome = () => {

  return (
      <Carousel>
        <Carousel.Item>
          <Link to="/all-consoles">
            <img className="d-block w-100" src={sliderImg1} alt={sliderImg1}/>
            <Carousel.Caption>
              <h3>Kraftfulle nye spillkonsoller</h3>
              <p>4K-støtte, bakoverkompatibilitet, eksklusive spill og mye mer.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/all-consoles">
            <img className="d-block w-100" src={sliderImg2} alt={sliderImg2}/>
            <Carousel.Caption>
              <h3>Ergonomiske kontrollere</h3>
              <p>Dual-Sense, trigger resistance for autentisk følelse, oppgraderte knapper.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/all-games">
            <img className="d-block w-100" src={sliderImg3} alt={sliderImg3}/>
            <Carousel.Caption>
              <h3>Stream spill gjennom cloud-tjenestene til konsollene for under hundrelappen i måneden.</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
  )
}

export default CarouselHome;