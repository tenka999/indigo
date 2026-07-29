import Navbar from "./layout/Navbar";
import "@/styles/home-sytle.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(ScrollTrigger);
// import { ReactComponent as Logo } from "/layout/background/svg-path.svg";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);
export default function HomePage() {
  return <div className="body">asdas</div>;
}
