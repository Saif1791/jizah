import React from "react";
import { motion } from "framer-motion";

function BottomCarousel() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      whileInView={{ x: 50 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: false }}
      className="bottomCarouselContainer"
    >
      <div className="lineHeading">
        <p className="line"></p>
        <div>
          <h4>Select Projects</h4>
        </div>
      </div>
    </motion.div>
  );
}

export default BottomCarousel;
