import React from "react";
import "@/styles/hero-style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useGSAP(() => {
    gsap.to(".hero-headline h1", {
      y: "0",

      scrollTrigger: {
        trigger: ".hero-headline",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".hero-box-image", {
      // scale: 1.8,
      y: "300px",

      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".hero-image", {
      scale: 1.8,
      y: "-200px",

      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.from(".hero-headline > *", {
      y: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".hero-headline ",
        start: "top 80%",
      },
    });
  });
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-headline">
          <h1 className="hero-headline-1">BUILT TO ENDURE</h1>
          <h1 className="hero-headline-2">MONOLITHIC STRUCTURES</h1>
        </div>
        <div className="hero-sub-headline">
          <p>
            Rooted in industrial scale. KRAFT & FORM shapes solid wood,
            structural steel, and raw concrete into monumental spaces.
          </p>
        </div>
        <button className="hero-cta-button">VIEW MONUMENTS</button>
      </div>
      <div className="hero-container-image">
        <div className="hero-box-left"></div>
        <div className="hero-box-image">
          <div className="hero-image"></div>
        </div>
        <div className="hero-box-right"></div>
      </div>
    </div>
  );
}
