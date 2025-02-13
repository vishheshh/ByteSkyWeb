import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Hero} from "../sections/Hero";
import {AboutSection} from "../sections/About";
import {Subsidiaries} from "../sections/Subsidiaries";
import { Leadership } from "../sections/Leadership";
import { FAQ } from "../sections/Faq";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  return (
    <div className="overflow-x-hidden font-inter">
      <Hero />
      <AboutSection />
      <Subsidiaries />
      <Leadership />
      <FAQ/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Homepage;
