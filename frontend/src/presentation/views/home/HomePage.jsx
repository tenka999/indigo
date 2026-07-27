import HeroSection from "./section/HeroSection";
import Navbar from "./layout/Navbar";
import "@/styles/home-style.css";
import AboutSection from "./section/AboutSection";
import GallerySection from "./section/GallerySection";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import ProjectGrid from "./section/ProjectGrid";
import ViewSection from "./section/ViewSection";
import Cursor from "./section/Cursor";
import ContactSection from "./section/ContactSection";
gsap.registerPlugin(ScrollTrigger);
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);
export default function HomePage() {
  const homePage = useRef();
  const [cursorOpen, setCursorOpen] = useState(false);
  useGSAP(() => {
    //#region gallery
    const points = [0.1, 0.37, 0.5, 0.75, 1];

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top top",
        end: "+=7850",
        scrub: true,
        pin: true,

        snap: {
          snapTo: (value) => {
            if (value > 0 && value < 0.19) return 0.1;
            if (value >= 0.19 && value < 0.47) return 0.38;
            if (value >= 0.47 && value < 0.73) return 0.66;
            if (value >= 0.73 && value < 1) return 0.89;
            return 1;
          },
          duration: 0.7,
          ease: "power2.inOut",
        },

        // refreshPriority: 10,
        // onUpdate: (self) => {
        //   console.log(self.progress);
        // },
      },
    });

    const img1Scene = gsap.timeline();
    const img2Scene = gsap.timeline();
    const img3Scene = gsap.timeline();
    const img4Scene = gsap.timeline();

    img1Scene
      .to(
        ".gallery-container",
        {
          padding: 0,
          duration: 1,
        },
        0,
      )
      .to(
        "#square",
        {
          morphSVG: "#rectangle",
          duration: 0.5,
        },
        0,
      )
      .to(
        "#square",
        {
          morphSVG: "#parallelogram",
          duration: 0.5,
        },
        1,
      )
      .to(
        ".gallery-container-bottom",
        {
          visibility: "visible",
          duration: 0,
        },
        1,
      )
      .to(
        ".gallery-section",
        {
          backgroundColor: "rgb(10, 10, 10)",
          duration: 0,
        },
        1,
      )
      .to(
        ".img2",
        {
          y: "-100%",
          duration: 5,
        },
        2,
      )
      .to(
        ".img1",
        {
          opacity: 0,
          duration: 4,
        },
        2,
      )
      .to(
        "#square",
        {
          morphSVG: "#rectangle-2",
          duration: 0.5,
        },
        2,
      )
      .to(
        "#square",
        {
          morphSVG: "#rectangle-3",
          duration: 0.5,
        },
        3,
      )
      .to(
        "#square",
        {
          fill: "transparent",
          duration: 0,
        },
        4,
      )
      .to(
        "#rectangle-4",
        {
          fill: "#E30613",
          duration: 0,
        },
        4,
      )
      .to(
        "#rectangle-4",
        {
          morphSVG: "#square-2",
          duration: 0.5,
        },
        4,
      )
      .to(
        "#rectangle-4",
        {
          fill: "transparent",
          duration: 0,
        },
        5,
      )
      .to(
        "#b-square-1",
        {
          fill: "#E30613",
          duration: 0,
        },
        5,
      )
      .to(
        "#b-square-1",
        {
          morphSVG: "#f-square-1",
          duration: 0.5,
        },
        5,
      )
      .to(
        "#b-square-1",
        {
          morphSVG: "#f-square-2",
          duration: 0.5,
        },
        6,
      )
      .to(
        ".img3",
        {
          y: "-100%",
          duration: 5,
        },
        7,
      )
      .to(
        ".img2",
        {
          opacity: 0,
          duration: 4,
        },
        7,
      )
      .to(
        "#b-square-1",
        {
          morphSVG: "#f-square-3",
          duration: 0.5,
        },
        7,
      )
      .to(
        "#b-square-1",
        {
          morphSVG: "#f-square-4",
          duration: 0.5,
        },
        8,
      )

      .to(
        "#f-square-5",
        {
          fill: "#e30613",
          duration: 0,
        },
        9,
      )
      .to(
        "#b-square-1",
        {
          fill: "transparent",
          duration: 0,
        },
        9,
      )
      .to(
        "#f-square-5",
        {
          morphSVG: "#circle",
          rotate: -40,
          transformOrigin: "center center",
          duration: 0.5,
        },
        9,
      )
      .to(
        "#arch-top",
        {
          fill: "#e30613",
          duration: 0,
        },
        10,
      )
      .to(
        "#arch-bottom",
        {
          fill: "#e30613",
          duration: 0,
        },
        10,
      )
      .to(
        "#f-square-5",
        {
          morphSVG: "#f-square-5",
          duration: 0,
        },
        10,
      )
      .to(
        "#f-square-5",
        {
          fill: "transparent",
          duration: 0,
        },
        10,
      )
      .to(
        "#arch-bottom",
        {
          y: 175,
          rotation: 180,
          transformOrigin: "center center",
          duration: 0.5,
        },
        10,
      )
      .to(
        "#arch-bottom",
        {
          morphSVG: "#arch-bottom-b",
          duration: 0.5,
        },
        11,
      )
      .to(
        "#arch-top",
        {
          morphSVG: "#arch-top-b",
          duration: 0.5,
        },
        11,
      )
      .to(
        ".img4",
        {
          y: "-100%",
          duration: 4,
        },
        12,
      )
      .to(
        ".img3",
        {
          opacity: 0,
          duration: 3,
        },
        12,
      )
      .to(
        "#arch-top",
        {
          morphSVG: "#arch-top",
          duration: 0.5,
        },
        12,
      )
      .to(
        "#arch-bottom",
        {
          y: 175,
          rotation: 0,
          morphSVG: "#arch-bottom",
          transformOrigin: "center center",
          duration: 0.5,
        },
        12,
      )
      .to(
        "#circle",
        {
          fill: "#e30613",
          duration: 0,
        },
        13,
      )
      .to(
        "#arch-top",
        {
          fill: "transparent",
          duration: 0,
        },
        13,
      )
      .to(
        "#arch-bottom",
        {
          fill: "transparent",
          duration: 0,
        },
        13,
      )
      .to(
        "#circle",
        {
          rotate: -40,
          transformOrigin: "center center",
          duration: 0,
        },
        13,
      )
      .to(
        "#circle",
        {
          morphSVG: "#f-square-5",
          rotate: 0,
          transformOrigin: "center center",
          duration: 0.5,
        },
        13,
      )
      .to(
        "#f-rectangle-1",
        {
          duration: 0,
          fill: "#E30613",
        },
        14,
      )
      .to(
        "#circle",
        {
          duration: 0,
          fill: "transparent",
        },
        14,
      )
      .to(
        "#f-rectangle-1",
        {
          morphSVG: "#f-rectangle-2",
          duration: 0.5,
        },
        14,
      )
      .to(
        "#f-rectangle-1",
        {
          morphSVG: "#f-rectangle-3",
          duration: 0.5,
        },
        15,
      )
      .to(
        "#f-rectangle-1",
        {
          morphSVG: "#f-rectangle-1",
          duration: 1,
          ease: "power4.inOut",
        },
        16,
      )

      .to(
        "#f-rectangle-1",
        {
          fill: "transparent",
          duration: 1,
          ease: "power4.inOut",
        },
        17,
      )
      .to(
        ".home-shape-icon",
        {
          position: "absolute",
          duration: 0,
        },
        18,
      );

    img2Scene;

    master.add(img1Scene);
    master.add(img2Scene);
    master.add(img3Scene);
    master.add(img4Scene);
    ScrollTrigger.refresh();

    //#endregion gallery
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        start: "top center",
        end: "+=5000",
        scrub: true,
      },
    });

    lineTl
      .to(
        "#line-1",
        {
          morphSVG: "#line-2",
          duration: 100,
        },
        0,
      )
      .to(
        ".project-shape-icon",
        {
          top: 0,
          duration: 100,
        },
        1,
      );

    gsap.to(".hero-section", {
      // scaleY: 0.95,
      opacity: 1,

      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(".about-section", {
      // marginTop: "0px",
      top: 0,
      // opacity: 1,

      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".home-shape-icon", {
      position: "fixed",

      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top top",
        end: "+=1500",
        scrub: true,
      },
    });

    // gsap.to(".project-title.top", {
    //   x: 0,
    //   scrollTrigger: {
    //     trigger: ".project-section",
    //     start: "top bottom",
    //     end: "top center",
    //     scrub: true,
    //   },
    // });
    // gsap.to(".project-title.bottom", {
    //   x: 0,

    //   scrollTrigger: {
    //     trigger: ".project-section",
    //     start: "top bottom",
    //     end: "top center",
    //     scrub: true,
    //   },
    // });

    const viewTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-content",
        start: "top bottom",
        end: "+=500",
        scrub: true,
      },
    });

    viewTl
      .to(".project-title.top", {
        x: 0,
      })
      .to(
        ".project-title.bottom",
        {
          x: 0,
        },
        ">",
      );

    gsap.to(".view-content", {
      background: "rgba(10,10,10,0.9)",
      scrollTrigger: {
        trigger: ".view-content",
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".view-image.night", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".view-content",
        start: "top top",
        end: "+=700",
        scrub: true,
        // markers: true,
      },
    });
  });

  return (
    <div ref={homePage}>
      <Cursor cursorOpen={cursorOpen} />
      <Navbar />

      <div className="home-page">
        {/* <svg
          id="svg-stage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path id="diamond" fill="red" d="M50,1l49,49L50,99L1,50L50,1z" />
          <path
            id="lightning"
            fill="transparent"
            d="M47.1,0.8 73.3,0.8 61.9,37.2 77.1,37.2 30.7,99.4 45.8,51.9 29,51.9z"
          />
        </svg> */}
        <HeroSection />
        <AboutSection />
        <ProjectGrid setCursorOpen={setCursorOpen} />
        <GallerySection />
        <ViewSection />
        <ContactSection />
      </div>

      {/* <div style={{ height: "100vh" }}></div> */}
      {/* <div style={{ height: "100vh" }}></div> */}
    </div>
  );
}
