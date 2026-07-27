import "@/styles/gallery-style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  console.log(window.innerWidth);
  //#region GSAP
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".gallery-section",
  //       start: "top top",
  //       end: "+=7850",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });
  //   tl.to(".gallery-container", {
  //     padding: "0rem",
  //     duration: 0.01,
  //   })
  //     .to(
  //       ".img2",
  //       {
  //         y: "-100%",
  //         duration: 0.1,
  //       },
  //       ">",
  //     )
  //     .to(
  //       ".img3",
  //       {
  //         y: "-100%",
  //         duration: 0.1,
  //       },
  //       ">",
  //     )
  //     .to(
  //       ".img4",
  //       {
  //         y: "-100%",
  //         duration: 0.1,
  //       },
  //       ">",
  //     );
  //   // tl.to(".gallery-container", {
  //   //   padding: "0rem",
  //   //   duration: 0.3,
  //   // })
  //   //   .to(
  //   //     ".img1",
  //   //     {
  //   //       opacity: 1,
  //   //     },
  //   //     ">",
  //   //   )
  //   //   .to(
  //   //     ".img2",
  //   //     {
  //   //       y: "-100%",
  //   //       opacity: 1,
  //   //     },
  //   //     "<",
  //   //   )
  //   //   .to(".img2", {
  //   //     // opacity: 0,
  //   //   })
  //   //   .to(
  //   //     ".img3",
  //   //     {
  //   //       y: "-200%",
  //   //       opacity: 1,
  //   //     },
  //   //     "<",
  //   //   )
  //   //   .to(".img3", {
  //   //     // opacity: 0,
  //   //   })
  //   //   .to(
  //   //     ".img4",
  //   //     {
  //   //       opacity: 1,

  //   //       y: "-300%",
  //   //     },
  //   //     "<",
  //   //   );
  //   // const trigger = ScrollTrigger.create({
  //   //   animation: tl,
  //   //   trigger: ".gallery-section",
  //   //   start: "top top",
  //   //   end: "+=1000%",
  //   //   scrub: true,
  //   //   pin: true,
  //   // });
  //   // console.log(trigger.progress);
  // });

  //#endregion GSAP
  return (
    <>
      <div className="home-icon-container">
        <svg
          // width="100%"
          // height="100%"
          viewBox="0 0 1000 1000"
          className="home-shape-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          //50
          //M 9 2 L 9 4 L 4 4 L 4 4 L 4 2 L 9 2
          //M 2 1 L 2 3 L 0 3 L 0 3 L 0 1 L 2 1
          //M 9 2 L 9 4 L 4 4 L 0 2 L 0 0 L 5 0
          //M 350 50 L 350 150 L 150 150 L 150 150 L 150 50 L 350 50
          // M 450 100 L 450 200 L 200 200 L 200 200 L 200 100 L 450 100
        >
          <path
            id="square"
            className="shape"
            fill="blue"
            d="
            M 550 175 L 550 275 L 450 275 L 450 275 L 450 175 L 550 175
            M 550 275 L 550 375 L 450 375 L 450 375 L 450 275 L 550 275

            "
          />
          <path
            id="rectangle"
            d="
           M 750 185 L 750 285 L 500 285 L 500 285 L 500 185 L 750 185 M 500 285 L 500 385 L 250 385 L 250 385 L 250 285 L 500 285
            "
            fill="transparent"
          />
          <path
            id="parallelogram"
            d="
            M 750 185 L 750 285 L 500 285 L 250 185 L 250 85 L 500 85
M 750 385 L 750 485 L 500 485 L 250 385 L 250 285 L 500 285            
            "
            fill="transparent"
          />
          <path
            id="rectangle-2"
            d="
            M 500 85 L 500 185 L 250 185 L 250 185 L 250 85 L 500 85
            M 750 385 L 750 485 L 500 485 L 500 485 L 500 385 L 750 385
            "
            fill="transparent"
          />
          <path
            id="rectangle-3"
            d="
            M 500 225 L 500 325 L 250 325 L 250 325 L 250 225 L 500 225 M 750 225 L 750 325 L 500 325 L 500 325 L 500 225 L 750 225 
          
            "
            fill="transparent"
          />
          <path
            id="rectangle-4"
            d="
            M 750 225 L 750 325 L 250 325 L 250 325 L 250 225 L 750 225
            "
            fill="transparent"
          />
          <path
            id="square-2"
            d="
            M 550 225 L 550 325 L 450 325 L 450 325 L 450 225 L 550 225
            "
            fill="transparent"
          />
        </svg>

        <svg
          // width="100%"
          // height="100%"
          viewBox="0 0 1000 1000"
          className="home-shape-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          //50
          //M 9 2 L 9 4 L 4 4 L 4 4 L 4 2 L 9 2
          //M 2 1 L 2 3 L 0 3 L 0 3 L 0 1 L 2 1
          //M 9 2 L 9 4 L 4 4 L 0 2 L 0 0 L 5 0
          //M 350 50 L 350 150 L 150 150 L 150 150 L 150 50 L 350 50
          // M 450 100 L 450 200 L 200 200 L 200 200 L 200 100 L 450 100
        >
          <path
            id="r-square"
            d="
            M 550 275 L 550 375 L 450 375 L 450 375 L 450 275 L 550 275
            "
            fill="transparent"
          />
          <path
            id="r-rectangle"
            d="
            M 500 275 L 500 375 L 250 375 L 250 375 L 250 275 L 500 275
            "
            fill="transparent"
          />
          <path
            id="r-parallelogram"
            d="
            M 750 375 L 750 475 L 500 475 L 250 375 L 250 275 L 500 275
            "
            fill="transparent"
          />
          <path
            id="r-rectangle-2"
            d="
            M 750 380 L 750 480 L 500 480 L 500 480 L 500 380 L 750 380
            "
            fill="transparent"
          />
          <path
            id="r-rectangle-3"
            d="
            M 750 200 L 750 300 L 500 300 L 500 300 L 500 200 L 750 200
            "
            fill="transparent"
          />
        </svg>
        <svg
          viewBox="0 0 1000 1000"
          className="home-shape-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            id="b-square-1"
            d="
          M 500 225 L 500 275 L 450 275 L 450 275 L 450 225 L 500 225 M 550 225 L 550 275 L 500 275 L 500 275 L 500 225 L 550 225 M 500 275 L 500 325 L 450 325 L 450 325 L 450 275 L 500 275 M 550 275 L 550 325 L 500 325 L 500 325 L 500 275 L 550 275
            "
            fill="transparent"
          />
          <path
            id="f-square-1"
            d="
            M 440 95 L 440 215 L 440 215 L 320 215 L 320 95 L 320 95 M 680 95 L 680 215 L 680 215 L 560 215 L 560 95 L 560 95 M 440 335 L 440 455 L 440 455 L 320 455 L 320 335 L 320 335 M 680 335 L 680 455 L 680 455 L 560 455 L 560 335 L 560 335
            "
            fill="transparent"
          />
          <path
            id="f-square-2"
            d="
            M 495 40 L 495 160 L 375 280 L 255 280 L 255 160 L 375 40 M 735 40 L 735 160 L 615 280 L 495 280 L 495 160 L 615 40 M 495 280 L 495 400 L 375 520 L 255 520 L 255 400 L 375 280 M 735 280 L 735 400 L 615 520 L 495 520 L 495 400 L 615 280
            "
            fill="transparent"
          />
          <path
            id="f-square-3"
            d="
            M 474 201 L 474 249 L 474 249 L 426 249 L 426 201 L 426 201 M 548 227 L 548 275 L 548 275 L 500 275 L 500 227 L 500 227 M 500 275 L 500 323 L 500 323 L 452 323 L 452 275 L 452 275 M 572 299 L 572 347 L 572 347 L 524 347 L 524 299 L 524 299
            "
            fill="transparent"
          />
          <path
            id="f-square-4"
            d="
            M 500 227 L 500 275 L 500 275 L 452 275 L 452 227 L 452 227 M 548 227 L 548 275 L 548 275 L 500 275 L 500 227 L 500 227 M 500 275 L 500 323 L 500 323 L 452 323 L 452 275 L 452 275 M 548 275 L 548 323 L 548 323 L 500 323 L 500 275 L 500 275
            "
            fill="transparent"
          />
          <path
            id="f-square-5"
            d="
            M 548 227 L 548 323 L 452 323 L 452 227 L 548 227
            "
            fill="transparent"
          />
          <path
            id="circle"
            d="
            M 555 275 A 55 55 90 0 0 500 220 A 55 55 90 0 0 445 275 A 55 55 90 0 0 500 330 A 55 55 90 0 0 555 275 
            "
            fill="transparent"
          />
          <path
            id="arch-top"
            d="
            M 555 275 A 55 55 90 0 0 500 220 A 55 55 90 0 0 445 275
            "
            fill="transparent"
          />
          <path
            id="arch-top-b"
            d="
            M 720 280 A 220 220 90 0 0 500 60 A 220 220 90 0 0 280 280 
            "
            fill="transparent"
          />
          <path
            id="arch-bottom"
            d="
            M 445 275 A 55 55 90 0 0 445 275 A 55 55 90 0 0 500 330 A 55 55 90 0 0 555 275
            "
            fill="transparent"
          />
          <path
            id="arch-bottom-b"
            d="
            M 280 280 A 220 220 90 0 0 280 280 A 220 220 90 0 0 500 500 A 220 220 90 0 0 720 280

            "
            fill="transparent"
          />
          <path
            id="arch-s"
            d="
            M 720 280 A 220 220 90 0 0 500 60 A 220 220 90 0 0 280 280 M 280 280 A 220 220 90 0 0 280 280 A 220 220 90 0 0 500 500 A 220 220 90 0 0 720 280
            "
            fill="transparent"
          />
          <path
            id="f-rectangle-1"
            d="
            M 548 227 L 548 275 L 452 275 L 452 227 L 500 227 M 548 275 L 548 323 L 452 323 L 452 275 L 500 275
           
            "
            fill="transparent"
          />
          <path
            id="f-rectangle-2"
            d="


            M 548 457 L 548 505 L 452 505 L 452 457 L 500 457 M 548 227 L 548 275 L 452 275 L 452 227 L 500 227


            "
            fill="transparent"
          />

          <path
            id="f-rectangle-3"
            d="
            M 730.4 359.88 L 730.4 498.12 L 269.6 498.12 L 269.6 359.88 L 500 280 M 730.4 140.76 L 730.4 279 L 269.6 279 L 269.6 140.76 L 500 61
            "
            fill="transparent"
          />
        </svg>
      </div>
      <div className="gallery-section">
        <div className="gallery-container">
          <img
            className="gallery-image img1"
            src="/layout/background/fa.webp"
            alt="image"
          />
          <div className="gallery-container-bottom">
            <img
              className="gallery-image img2"
              src="/layout/background/cinematic look.webp"
              alt="image"
            />
            <img
              className="gallery-image img3"
              src="/layout/background/realistic_wallpaper.jpg"
              alt="image"
            />
            <img
              className="gallery-image img4"
              src="/layout/background/d.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
