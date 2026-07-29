import "@/styles/home-style.css";
import { useRef, useState } from "react";
import HeroSection from "./section/HeroSection";
import ProductSection from "./section/ProductSection";
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProductSection />
    </div>
  );
}
