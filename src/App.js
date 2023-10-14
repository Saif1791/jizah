import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    // <div>
    //   {/* <Parallax pages={3}>
    //     <Header />
    //     <Tagline />
    //     <Menubar />
    //     <Mainslider />
    //     <TaglineTwo />
    //     <ParallaxLayer offset={2.7} speed={2.5}>
    //       <div>
    //         <BottomCarousel />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={2.5} speed={2.7}>
    //       <div>
    //         <Footer />
    //       </div>
    //     </ParallaxLayer>
    //   </Parallax> */}
    // </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<About />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
