import React, { useState } from "react";
import "@/styles/view-style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default function ViewSection() {
  return (
    <>
      <div className="view-section">
        <div className="view-detail">
          <div className="view-title">
            <h1>Manifesto</h1>
          </div>
          <div className="view-tagline">
            Built to endure. Designed to dominate.
          </div>
          <div className="view-paragraph-container">
            <div className="view-paragraph left">
              KRAFT & FORM operates at the intersection of raw structural scale
              and refined spatial function. We strip away decorative clutter to
              expose the true character of industrial elements, turning heavy
              materials into serene, monumental environments.
            </div>
            <div className="view-paragraph right">
              From urban lofts in Manhattan to expansive brutalist pavilions,
              our work is defined by precision and permanence. We create spaces
              that do not merely occupy a landscape, but anchor it with
              uncompromising structural identity.
            </div>
          </div>
        </div>
        <div className="view-content">
          <div className="view-img-container">
            <img
              className="view-image day"
              src="/layout/background/view-day.png"
              alt="image"
            />
            <img
              className="view-image night"
              src="/layout/background/view-night.png"
              alt="image"
            />
          </div>
          <img
            className="view-image-night"
            src="/layout/background/view-night-2.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}
