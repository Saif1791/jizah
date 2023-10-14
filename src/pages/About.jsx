import React from "react";
import Header from "../components/Header";
import Tagline from "../components/Tagline";
import Mainslider from "../components/Mainslider";
import TaglineTwo from "../components/TaglineTwo";
import Footer from "../components/Footer";
import BottomSlider from "../components/BottomSlider";
function About() {
  return (
    <div>
      <Header />
      <Tagline
        Tagline={
          <div>
            Lorem Ipsum Lorem
            <br /> Ipsum Lorem Ipsum
          </div>
        }
      />
      <Mainslider />
      <TaglineTwo
        Tagline={
          <div>
            Lorem Ipsum Lorem
            <br /> Ipsum Lorem Ipsum
          </div>
        }
        text={
          <div style={{ margin: "0 0 0 180px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.
            Et odio pellentesque diam volutpat commodo sed. Ut sem viverra
            aliquet eget sit amet tellus. Dictum at tempor commodo ullamcorper.
            Senectus et netus et malesuada fames ac turpis egestas sed. At
            ultrices mi tempus imperdiet nulla malesuada. Neque ornare aenean
            euismod elementum nisi quis eleifend. Fermentum dui faucibus in
            ornare quam viverra orci. Imperdiet sed euismod nisi porta lorem
            mollis. Curabitur gravida arcu ac tortor dignissim convallis aenean
            et tortor.
          </div>
        }
      />
      <BottomSlider />
      <Footer />
    </div>
  );
}

export default About;
