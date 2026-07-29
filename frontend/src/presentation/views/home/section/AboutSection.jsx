import "@/styles/about-style.css";
export default function AboutSection() {
  return (
    <>
      <div className="about-section">
        <div className="about-top">
          <div className="about-top-left">
            <div className="about-title">ABOUT CLARITY</div>
            <div className="about-tagline">
              $123K<span>+</span>{" "}
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
                capital have been raised after collaboration
              </p>
            </div>
          </div>
          <div className="about-top-right">
            <div className="about-paragraph">
              We craft clean, intentional websites that help brands connect
              naturally with real people. No jargon, no visual clutter—just
              simple, high-performing digital spaces{" "}
              <span> built on trust and clarity.</span>
            </div>
            <div className="about-cta">
              More about Clarity{" "}
              <div className="about-cta-arrow-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="about-cta-arrow"
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
        </div>
        <div className="about-bottom">
          <div className="about-card">
            <div className="about-card-top">
              <div className="about-card-icon"></div>
              <h4> Human-Centered</h4>
            </div>
            <div className="about-card-bottom">
              Designed for real people. Every interaction is intuitive,
              comfortable, and effortless to navigate.
              <p>Learn more</p>
            </div>
          </div>
          <div className="about-card center">
            <div className="about-card-top">
              <div className="about-card-icon center"></div>
              <h4>Radical Clarity</h4>
            </div>
            <div className="about-card-bottom">
              No unnecessary noise. We strip away the extra so your core message
              shines through boldly.
              <p>Learn more</p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-top">
              <div className="about-card-icon"></div>
              <h4>True Partnership</h4>
            </div>
            <div className="about-card-bottom">
              No complicated process. We work side-by-side with you through
              clear and open collaboration.
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
