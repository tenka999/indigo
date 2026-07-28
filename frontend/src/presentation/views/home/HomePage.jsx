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
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);
export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <CtaSection />
      <Footer />
    </>
  );
}
