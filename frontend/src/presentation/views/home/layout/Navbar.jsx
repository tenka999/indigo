"use client";
import { useScrollState } from "@/hooks/useScroll";
import { motion, AnimatePresence, color } from "framer-motion";
import { useEffect, useState } from "react";
import "@/styles/navbar-style.css";

export default function Navbar() {
  const { scrolled, scrollUp } = useScrollState();
  const [open, setOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const navVariants = {
    top: {
      width: "100%",
      top: 0,
      borderRadius: 0,
      backgroundColor: "rgba(35, 35, 35,0)",
      // borderTop: "1px solid rgba(255,255,255,1)",
      // borderBottom: "1px solid rgba(255,255,255,1)",
      fontSize: "1.1rem",
      padding: "0 0.5rem",
      fontWeight: "800",
    },
    scrolled: {
      width: "80%",
      top: 0,
      // borderRadius: 24,
      backgroundColor: "rgba(0,0,0,0)",
      //   backgroundColor: "rgba(255,255,255,1)",
      backdropFilter: "blur(7px)",
      color: "#fff",
      fontWeight: "800",
    },
    isDark: {
      width: "80%",
      top: 0,
      // borderRadius: 24,
      backgroundColor: "rgba(0,0,0,1)",
      backdropFilter: "blur(12px)",
      color: "#fff",
      fontWeight: "800",
    },
    hidden: {
      y: -120,
    },
    visible: {
      y: 0,
    },
    open: {
      width: "97%",
      height: "96vh",
      top: 0,
      // borderRadius: 24,
      backgroundColor: "rgba(10,10,10,1)",
      backdropFilter: "blur(22px)",
      border: "1px solid rgba(255,255,255)",
      padding: "0",
      color: "#fff",
    },
  };

  const smoothScrollTo = (target) => {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const duration = 700;
    let startTime = null;

    const easeInOut = (t) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    function animate(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      window.scrollTo(0, start + (end - start) * easeInOut(progress));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setLastScroll(current);

      // Jika sudah melewati 100vh
      setIsDark(current >= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="container-navbar">
      <motion.nav
        initial="top"
        animate={
          open
            ? "open"
            : !scrollUp && scrolled
              ? "hidden"
              : isDark
                ? "isDark"
                : scrolled
                  ? "scrolled"
                  : "top"
        }
        variants={navVariants}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        // className="left-1/2 -translate-x-1/2"
        className="navbar"
        style={{
          position: open ? "fixed" : "fixed",
          zIndex: 9999,
        }}
      >
        <div className="navbar-content">
          <div className="navbar-links">FIBERIX</div>
          {/* <div className={`navbar-links center ${scrolled ? "" : "active"}`}>
            <div
              onClick={() => smoothScrollTo(document.getElementById("hero"))}
            >
              HOME
            </div>
            <div
              onClick={() => smoothScrollTo(document.getElementById("about"))}
            >
              ABOUT
            </div>
            <div
              onClick={() => smoothScrollTo(document.getElementById("pricing"))}
            >
              PRICING
            </div>
            <div
              onClick={() => smoothScrollTo(document.getElementById("article"))}
            >
              ARTICLE
            </div>
            <div
              onClick={() => smoothScrollTo(document.getElementById("gallery"))}
            >
              GALLERY
            </div>
            <div
              onClick={() => smoothScrollTo(document.getElementById("contact"))}
            >
              CONTACT
            </div>
          </div> */}
          <div>
            <button
              className={`hamburger ${open ? "active" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <line
                  className="line top"
                  stroke={`${scrolled ? "#fff" : open ? "#fff" : "#fff"}`}
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                />
                <line
                  className="line middle"
                  stroke={`${scrolled ? "#fff" : open ? "#fff" : "#fff"}`}
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                />
                <line
                  className="line bottom"
                  stroke={`${scrolled ? "#fff" : open ? "#fff" : "#fff"}`}
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="navbar-open"
              // className="flex flex-col items-center justify-center h-full text-4xl gap-8 navbar-open"
            >
              <div className="navbar-open-main">
                <div className="navbar-open-left">
                  <div className="navbar-open-left-top">
                    <div className="solution-headline"></div>
                    <div className="solution-list">
                      <div className="solution-title">Residential</div>
                      <div className="solution-subtitle">
                        {/* Paket internet rumah (Home Fiber). */}
                      </div>
                    </div>
                    <div className="solution-list">
                      <div className="solution-title">Business</div>
                      <div className="solution-subtitle">
                        {/* Dedicated internet untuk kantor. */}
                      </div>
                    </div>
                    <div className="solution-list">
                      <div className="solution-title">Enterprise</div>
                      <div className="solution-subtitle">
                        {/* Solusi data center & infrastruktur. */}
                      </div>
                    </div>
                    <div className="solution-list">
                      <div className="solution-title">Enterprise</div>
                      <div className="solution-subtitle"></div>
                    </div>
                  </div>
                  <div className="navbar-open-left-bottom">
                    <div className="navbar-open-bottom">
                      <div className="navbar-open-bottom-left">
                        <div className="navbar-footer-link">Company</div>
                        <div className="navbar-footer-link">Event</div>
                        <div className="navbar-footer-link">Testimonials</div>
                      </div>
                      <div className="navbar-open-bottom-right">
                        <div className="navbar-footer-link">Coverage Area</div>
                        <div className="navbar-footer-link">FAQ</div>
                        <div className="navbar-footer-link">Contact Us</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-open-right">
                  <div className="image1"></div>
                  <div className="image2"></div>
                  <div className="image3"></div>
                </div>
              </div>
              {/* <div>AE.1</div>
              <div>Technology</div>
              <div>Make it Yours</div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
