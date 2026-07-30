import "@/styles/hero-style.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-top">
          <div className="hero-text">
            BUILT FOR THE PURSUIT. COLD TILL THE END.
          </div>
          <div className="hero-cta">GEAR UP NOW</div>
        </div>
        <div className="hero-bottom">
          <div className="hero-product">
            <img src="/layout/background/hero-tumbler.png" />
            <div className="hero-product-text">
              <p>SEE THE PRODUCT DETAIL</p>
              <a href="#">
                See All{" "}
                <svg
                  width="17"
                  height="20"
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
              </a>
            </div>
          </div>
          <div className="hero-brand">RADIAN</div>
        </div>
      </div>
    </div>
  );
}
