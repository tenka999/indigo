import React, { useState } from "react";
import "@/styles/project-grid-style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

const images = [
  {
    src: "/layout/background/landscape-4.jpg",
    // type: "landscape",
    col: 2,
    row: 1,
    name: "Landscape 4",
  },
  {
    src: "/layout/background/potrait-2.jpg",
    // type: "portrait",
    col: 1,
    row: 2,
    name: "portrait 2",
  },
  {
    src: "/layout/background/square-4.jpg",
    // type: "square",
    col: 1,
    row: 1,
    name: "square 4",
  },

  //   {
  //     src: "/layout/background/landscape-2.jpg",
  //     type: "landscape",
  //   },

  {
    src: "/layout/background/potrait-2.jpg",
    // type: "portrait",
    col: 1,
    row: 2,
    name: "portrait 1",
  },

  {
    src: "/layout/background/potrait-1.jpg",
    // type: "square",
    col: 1,
    row: 2,
    name: "square 2",
  },
  {
    src: "/layout/background/square-3.jpg",
    // type: "square",
    col: 1,
    row: 1,
    name: "square 2",
  },
  {
    src: "/layout/background/square-1.jpg",
    // type: "square",
    col: 2,
    row: 1,
    name: "square 3",
  },
  //   {
  //     src: "/layout/background/landscape-4.jpg",
  //     type: "landscape",
  //   },
];

export default function ProjectGrid({ setCursorOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const closeGallery = () => {
    gsap
      .timeline({
        onComplete() {
          setIsOpen(false);
        },
      })
      .to(".lightbox-image", {
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
        duration: 0.4,
        ease: "power4.inOut",
      })
      .to(
        ".lightbox",
        {
          opacity: 0,
          duration: 0.5,
        },
        "<",
      );
  };
  useGSAP(() => {
    if (!isOpen) {
      //   closeGallery();
      return;
    }

    gsap.from(".lightbox", {
      opacity: 0,

      duration: 0.2,
    });

    gsap.from(".lightbox img", {
      scale: 0.9,

      duration: 0.3,
    });
  }, [isOpen]);

  function handleClose() {
    // setIsOpen(false);
    closeGallery();
  }

  return (
    <>
      <div className="project-section">
        <div className="project-content">
          <div className="project-title top">
            SELECTED
            <div className="project-tagline top">
              <p className="project-tagline-2">PROJECTS \\</p>
              <p>INDEX / 01</p>
            </div>
          </div>
          <div className="project-title bottom">
            <div className="project-tagline bottom">
              <p className="project-tagline-2"> WORKS TOTAL / [06] </p>
              <p>ARCHITECTURAL ARCHIVE</p>
            </div>
            MONUMENTS
          </div>
        </div>
        <div className="project-grid">
          <svg
            viewBox="0 0 1000 1000"
            className="project-shape-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              id="line-2"
              d="
              M 747 0 L 747 2110 L 252.5 2110 L 252.5 0 L 747 0
              "
              fill="transparent"
            />
            <path
              id="line-1"
              d="
              M 747 0 L 747 0 L 252.5 0 L 252.5 0 L 747 0
            "
              // fill="#e30613"
              fill="rgb(140, 0, 0)"
            />
          </svg>
          <div className="project-grid-container">
            {images.map((item, index) => (
              <div
                key={index}
                className={`gallery-item ${item.type}`}
                onMouseEnter={() => setCursorOpen(true)}
                onMouseLeave={() => setCursorOpen(false)}
                onClick={() => {
                  setIsOpen(true);
                  setActiveIndex(index);
                }}
                style={{
                  gridColumn: `span ${item.col}`,
                  gridRow: `span ${item.row}`,
                }}
              >
                <h3 className="gallery-item-name">{item.name}</h3>
                <img src={item.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lightbox">
          <div className="lightbox-close-container">
            <button className="lightbox-close" onClick={() => handleClose()}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                  d="M15 15L33 33"
                  stroke="gray"
                  strokeWidth="3"
                  //   strokeLinecap="round"
                />
                <path
                  d="M33 15L15 33"
                  stroke="gray"
                  strokeWidth="3"
                  //   strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="lightbox-content">
            <div className="lightbox-prev-container">
              <button className="lightbox-prev" onClick={prevImage}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 4L7 12L15 20"
                    stroke="gray"
                    strokeWidth="1"
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <img className="lightbox-image" src={images[activeIndex].src} />
            <div className="lightbox-next-container">
              <button className="lightbox-next" onClick={nextImage}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 4L17 12L9 20"
                    stroke="gray"
                    strokeWidth="1"
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="thumbs">
            {images.map((img, index) => (
              <img
                key={img.id}
                src={img.src}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
