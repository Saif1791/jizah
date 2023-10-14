import React from "react";
import Header from "../components/Header";
import Tagline from "../components/Tagline";
import Menubar from "../components/Menubar";
import Mainslider from "../components/Mainslider";
import TaglineTwo from "../components/TaglineTwo";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <Tagline
        Tagline={
          <div>
            Modern, environmentally <br /> conscious homes.
          </div>
        }
      />
      <Menubar />
      <Mainslider />
      <TaglineTwo
        Tagline={
          <div>
            Great homes begin with <br /> great relationships.
          </div>
        }
        text={
          <div>
            Throughout the design process, we collaborate with
            <br /> each client to gain an understanding of their unique
            <br /> needs – defining the success of each building.
          </div>
        }
      />
      <Footer />
    </div>
  );
}

export default Home;
