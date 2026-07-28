import "@/styles/service-style.css";
import { useState } from "react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Architecture & Interior Design",
    description:
      "Spatial and elegant web layouts crafted to showcase structures,materials, and form with the quiet confidence they deserve.",
  },
  {
    id: 2,
    number: "02",
    title: "Style & Lifestyle",
    description:
      "Visually immersive digital spaces designed to capture mood,elevate aesthetic storytelling, and build an emotional bond with",
  },
  {
    id: 3,
    number: "03",
    title: "Visual Identity",
    description:
      "Clean, high-impact web representations that translate your brand’s core values, typography, and tone into a cohesive digital experience.",
  },
];

export default function ServiceSection() {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <div className="service-section">
      <div className="service-top">
        {" "}
        <div className="service-top-left">
          <h3>
            <span> We craft clean, functional websites for brands</span> rooted
            in design, lifestyle, and visual identity. Digital spaces tailored
            to showcase your best work.
          </h3>{" "}
        </div>
        <div className="service-top-right">
          <h4>WHAT WE DO</h4>
          <p>
            {" "}
            <svg
              width="20"
              height="8"
              viewBox="0 0 80 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4H78"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>{" "}
            Refined aesthetics, and purpose in every detail.
          </p>
        </div>
      </div>
      <div className="service-bottom">
        <div className="service-bottom-left">
          {/* <div className="service-detail">
            <div className="service-detail-num">(01)</div>
            <div className="service-detail-content">
              <h4>Architecture & Interior Design</h4>
              <p>
                Spatial and elegant web layouts crafted to showcase structures,
                materials, and form with the quiet confidence they deserve.
              </p>
            </div>
          </div>
          <div className="service-detail">
            <div className="service-detail-num">(02)</div>
            <div className="service-detail-content">
              <h4>Style & Lifestyle</h4>
              <p>
                Visually immersive digital spaces designed to capture mood,
                elevate aesthetic storytelling, and build an emotional bond with
                your audience.
              </p>
            </div>
          </div>
          <div className="service-detail">
            <div className="service-detail-num">(03)</div>
            <div className="service-detail-content">
              {" "}
              <h4>Visual Identity</h4>
              <p>
                Clean, high-impact web representations that translate your
                brand’s core values, typography, and tone into a cohesive
                digital experience.
              </p>
            </div>
          </div> */}
          <div className="accordion">
            {services.map((item) => (
              <div className="accordion-item" key={item.id}>
                <div
                  className="accordion-header"
                  onClick={() => toggle(item.id)}
                >
                  <span>({item.number})</span>

                  <h2>{item.title}</h2>

                  <span>
                    <svg
                      className={`chevron ${active === item.id ? "open" : ""}`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  className={`accordion-content ${
                    active === item.id ? "open" : ""
                  }`}
                >
                  <p>{item.description}</p>
                  <a href="/">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="service-bottom-right">
          <div className="service-img-container">
            <img src="/layout/background/service-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
