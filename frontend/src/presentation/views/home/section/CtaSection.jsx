import "@/styles/cta-style.css";

export default function CtaSection() {
  return (
    <div className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <div className="cta-img-container">
            <img src="/layout/background/cta-img.jpg"></img>
          </div>
        </div>
        <div className="cta-right">
          <div className="cta-right-top">
            <div className="cta-right-top-content">
              <p>
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
                The best time to build a clear, impactful online presence is
                right now.
              </p>
              <h3>
                <span> Ready to create a website that truly</span> represents
                your brand? Let’s talk about your next project and bring your
                vision to life.
              </h3>
              <div className="cta-button">
                Start a Project{" "}
                <div className="cta-button-arrow-container">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="cta-button-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cta-bottom-text">
              {" "}
              <p>Hear what our customer say</p> <a href="#">Explore more</a>
            </div>
          </div>
          <div className="cta-right-bottom">
            <div className="cta-testimonial">
              <div className="testimonial-text">
                "Working with them was effortless. Our new website feels clean,
                modern, and perfectly aligned with who we are."
              </div>
              <div className="testimonial-writer">
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
                Sarah M., Founder at Atelier Studio
              </div>
            </div>
            <div className="cta-testimonial">
              <div className="testimonial-text">
                "Clear communication, zero fuss, and an incredible final
                product. Our clients love the new site."
              </div>
              <div className="testimonial-writer">
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
                David K., Creative Director
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
