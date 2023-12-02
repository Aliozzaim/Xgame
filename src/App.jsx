/* eslint-disable */
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Education from "./components/Education";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <StarsCanvas />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
