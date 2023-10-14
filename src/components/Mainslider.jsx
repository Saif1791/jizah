import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../helper/slider.json";
import Fade from "@mui/material/Fade";
function Mainslider() {
  return (
    <Fade in={true}>
      <div className="carousel">
        <Carousel
          animation="fade"
          duration={2000}
          interval={4000}
          indicators={false}
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={true}
        >
          {slider.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </Fade>
  );
}

export default Mainslider;
