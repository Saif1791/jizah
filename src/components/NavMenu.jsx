import React from "react";
import { motion } from "framer-motion";
import Slide from "@mui/material/Slide";

function NavMenu() {
  const [checked] = React.useState(true);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.975, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="overlay"
      >
        <div className="brandNameContainer">
          <h1 data-text="JizaArchitects" className="brandName brandNameNav">
            JizaArchitects
          </h1>
        </div>
        <div className="navMenu">
          <ul>
            <Slide
              direction="right"
              in={checked}
              // container={containerRef.current}
              mountOnEnter
              unmountOnExit
              timeout={2000}
            >
              <motion.li
                whileHover={{ translateX: 100 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <h1>
                  <a href="/">Home</a>
                </h1>
              </motion.li>
            </Slide>
            <Slide
              direction="left"
              in={checked}
              // container={containerRef.current}
              mountOnEnter
              unmountOnExit
              timeout={2500}
            >
              <motion.li
                whileHover={{ translateX: 100 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <h1>
                  <a href="/about">About</a>
                </h1>
              </motion.li>
            </Slide>
            <Slide
              direction="right"
              in={checked}
              // container={containerRef.current}
              mountOnEnter
              unmountOnExit
              timeout={3000}
            >
              <motion.li
                whileHover={{ translateX: 100 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <h1>
                  <a href="/projects">Projects</a>
                </h1>
              </motion.li>
            </Slide>
            <Slide
              direction="left"
              in={checked}
              // container={containerRef.current}
              mountOnEnter
              unmountOnExit
              timeout={3500}
            >
              <motion.li
                whileHover={{ translateX: 100 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <h1>
                  <a href="/contact">Contact</a>
                </h1>
              </motion.li>
            </Slide>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default NavMenu;
