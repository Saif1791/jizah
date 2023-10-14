import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../helper/slider.json";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 5.5 } },
};

function BottomSlider() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariants}
      viewport={{ once: false }}
      className="Bottomcarousel"
    >
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
    </motion.div>
    /* </Slide> */
  );
}

export default BottomSlider;
