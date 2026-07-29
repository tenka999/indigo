import "@/styles/hero-style.css";
<<<<<<< HEAD

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
=======
export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-top">
        <div className="hero-paragraph">
          We craft websites made for people, not just algorithms. By blending
          clean design with intuitive structure, we build calm digital spaces
          where your brand can genuinely connect with your clients.
        </div>
        <div className="hero-cta">
          Say Hello {""}
          <div className="cta-arrow-container">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="cta-arrow"
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
      <div className="hero-bottom">
        <div className="hero-brand">
          Clarity Studio <p className="hero-r">R</p>
        </div>
        <div className="hero-rights">
          <p>&copy; 2026 All Rights Reserved</p>
          <p>(Scroll down)</p>
        </div>
>>>>>>> 67aca5b19abd8c2ce5c4372b0ed550166ede0187
      </div>
    </div>
  );
}
