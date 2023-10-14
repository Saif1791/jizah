import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 3.5 } },
};
function TaglineTwo(props) {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 5.5 }}
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariants}
      viewport={{ once: false }}
      className="taglineTwoContainer"
    >
      <div>
        <h1 className="taglineTwoHeading">{props.Tagline}</h1>
      </div>
      <div>
        <p className="taglineTwoText">{props.text}</p>
      </div>
    </motion.div>
  );
}

export default TaglineTwo;
