import React from "react";
import "@/styles/about-style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useGSAP(() => {
    gsap.to(".about-container-left", {
      // y: "400px",
      top: "400px",
      scrollTrigger: {
        trigger: ".about-container-left",
        start: "center bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    gsap.to(".about-container-center", {
      // y: "400px",
      top: 0,
      scrollTrigger: {
        trigger: ".about-container-left",
        start: "top bottom",
        end: "+=1130",
        // end: "bottom center",
        // markers: true,
        scrub: true,
      },
    });
    gsap.to(".about-container-right", {
      y: "-400px",
      scrollTrigger: {
        trigger: ".about-container-right",
        start: "center bottom",
        end: "top top",
        scrub: 1,
      },
    });
    // gsap.to(".about-section", {
    //   marginTop: "-100px",
    //   scrollTrigger: {
    //     trigger: ".about-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //   },
    // });
  });
  return (
    <>
      <div className="about-section">
        <div className="about-container-left">
          <h1>US</h1>
        </div>
        <div className="about-container-center">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            facere voluptas corrupti, repellat aspernatur neque impedit ut,
            corporis ab nihil labore eius consequuntur similique aliquid fugiat
            cumque. Iure, dignissimos totam.{" "}
          </p>
        </div>
        <div className="about-container-right">
          <h1>ABOUT</h1>
        </div>
      </div>
    </>
  );
}
