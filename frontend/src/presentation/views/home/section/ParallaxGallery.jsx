import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import "./FullpageReveal.css";
import "@/styles/ParallaxGallery.css";
// Tiap section punya label + array kolom (1 kolom = full image, 4 kolom = grid)
const SECTIONS = [
  {
    label: "Entrance",
    columns: [{ label: null, src: "/images/entrance.jpg" }],
  },
  {
    label: "Living Room",
    columns: [
      { label: "Living Room", src: "/layout/background/d.jpg" },
      { label: "Kitchen", src: "/images/kitchen.jpg" },
    ],
  },
  {
    label: "Rooms",
    columns: [
      { label: "Storage", src: "/images/storage.jpg" },
      { label: "Guest WC", src: "/images/guest-wc.jpg" },
      { label: "Bedroom", src: "/images/bedroom.jpg" },
      { label: "Bath", src: "/images/bath.jpg" },
    ],
  },
];

export default function FullpageReveal() {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const revealSection = (section) => {
    const masks = section.querySelectorAll("[data-mask-img]");
    const labels = section.querySelectorAll("[data-col-label]");

    gsap.to(masks, {
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.18, // jarak antar kemunculan tiap kolom gambar
      overwrite: true,
    });
    gsap.to(labels, {
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
      stagger: 0.18,
      overwrite: true,
    });
  };

  const hideSection = (section) => {
    const masks = section.querySelectorAll("[data-mask-img]");
    const labels = section.querySelectorAll("[data-col-label]");
    gsap.to(masks, {
      y: "120%",
      duration: 0.6,
      ease: "power2.in",
      overwrite: true,
    });
    gsap.to(labels, { opacity: 0, duration: 0.3, overwrite: true });
  };

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionRefs.current.filter(Boolean);
    if (!container || sections.length === 0) return;

    // reveal section pertama begitu halaman dibuka
    revealSection(sections[0]);

    let currentIndex = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target);
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            if (index !== currentIndex) revealSection(entry.target);
            currentIndex = index;
            setActiveIndex(index);
          } else if (!entry.isIntersecting) {
            hideSection(entry.target);
          }
        });
      },
      { root: container, threshold: [0, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fullpage-reveal">
      <div className="fullpage-reveal__topbar">
        <span className="fullpage-reveal__label">
          {SECTIONS[activeIndex]?.label}
        </span>
        <button className="fullpage-reveal__menu">Menu</button>
      </div>

      <div className="fullpage-reveal__container" ref={containerRef}>
        {SECTIONS.map((section, sIndex) => (
          <section
            key={section.label}
            className="fullpage-reveal__section"
            ref={(el) => (sectionRefs.current[sIndex] = el)}
          >
            {section.columns.map((col) => (
              <div className="fullpage-reveal__col" key={col.src}>
                {col.label && (
                  <span className="fullpage-reveal__col-label" data-col-label>
                    {col.label}
                  </span>
                )}
                <div className="fullpage-reveal__mask">
                  <img
                    src={col.src}
                    alt={col.label ?? section.label}
                    data-mask-img
                  />
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>

      <div className="fullpage-reveal__pagination">
        {SECTIONS.map((_, i) => (
          <div
            key={i}
            className={`fullpage-reveal__dot ${i === activeIndex ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
