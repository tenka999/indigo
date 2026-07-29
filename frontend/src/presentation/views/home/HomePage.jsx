<<<<<<< HEAD
import "@/styles/home-style.css";
import { useRef, useState } from "react";
import HeroSection from "./section/HeroSection";
import ProductSection from "./section/ProductSection";
=======
import Navbar from "./layout/Navbar";
import "@/styles/home-sytle.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import HeroSection from "./section/HeroSection";
import AboutSection from "./section/AboutSection";
import WorkSection from "./section/WorkSection";
import ServiceSection from "./section/ServiceSection";
import CtaSection from "./section/CtaSection";
import Footer from "./layout/Footer";
gsap.registerPlugin(ScrollTrigger);
>>>>>>> 67aca5b19abd8c2ce5c4372b0ed550166ede0187
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

export default function HomePage() {
  return (
<<<<<<< HEAD
    <div>
      <HeroSection />
      <ProductSection />
    </div>
=======
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <CtaSection />
      <Footer />
    </>
>>>>>>> 67aca5b19abd8c2ce5c4372b0ed550166ede0187
  );
}
