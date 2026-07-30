import "@/styles/product-style.css";
import ProductCarousel from "./ProductCarousel";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
const products = [
  {
    name: "KTWO",
    price: "$120",
    image: "/layout/background/product-img.png",
    color: "#4562ff",
    description:
      "Streamlined body designed to fit bike cages and running vests. Double-wall vacuum insulation keeps liquid ice-cold without adding extra weight to your stride.",
  },
  {
    name: "KOTKA",
    price: "$120",
    image: "/layout/background/product-img.png",
    description:
      "The core daily driver. Featuring a high-impact rubber base, wide-mouth opening for easy ice filling, and an ergonomic sweat-proof grip.",

    color: "#2db84d",
  },
  {
    name: "KARIBA",
    price: "$120",
    image: "/layout/background/product-img.png",
    description:
      "Maximum hydration for long sessions in harsh conditions. Reinforced steel body made to withstand accidental drops, rugged rocks, and heavy pack storage.",

    color: "#ff8d2c",
  },
  {
    name: "FLOW",
    price: "$120",
    image: "/layout/background/product-img.png",
    description:
      "Maximum hydration for long sessions in harsh conditions. Reinforced steel body made to withstand accidental drops, rugged rocks, and heavy pack storage.",

    color: "#444",
  },
  {
    name: "NOVA",
    price: "$120",
    image: "/layout/background/product-img.png",
    description:
      "Maximum hydration for long sessions in harsh conditions. Reinforced steel body made to withstand accidental drops, rugged rocks, and heavy pack storage.",

    color: "#b71fff",
  },
];

export default function ProductSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: false,
  });
  const [active, setActive] = useState(true);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  console.log(canPrev, canNext);
  return (
    <div className="product-section">
      <div className="product-top">
        <div className="product-text">
          <p>
            {" "}
            <span> Choose your capacity.</span> Built from 18/8 pro-grade
            stainless steel with sweat-free powder coating and 100% leakproof
            lock.
          </p>
        </div>
        <div className="product-title">
          <h4>HOT TUMBLER</h4>
          <h3>ENGINEERED FOR THE RELENTLESS</h3>
        </div>
        <div className="product-nav">
          <div className="nav-container">
            <div
              className={`nav ${!canPrev ? "not-active" : ""} `}
              onClick={prev}
            >
              <svg
                width="34"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L11 6M5 12L11 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className={`nav ${!canNext ? "not-active" : ""} `}
              onClick={next}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {products.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="product-card">
                  <div className="product-img">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="product-info">
                    <div className="product-info-top">
                      <h3>{item.name}</h3>

                      <span style={{ color: item.color }}>{item.price}</span>
                    </div>
                    <div className="product-info-bottom">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
