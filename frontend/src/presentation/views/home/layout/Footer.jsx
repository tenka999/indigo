import "@/styles/footer-style.css";

export default function Footer() {
  return (
    <footer className="layout-footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-content-left">
            <div className="">
              <h4>(Our office)</h4>
              <p> California, USA </p>
            </div>
            <div className="">
              <h4>(Contact Us)</h4>
              <p> +1 234 567 890 </p>
            </div>
          </div>
          <div className="footer-content-right">
            <h4>(Navigation)</h4>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Works</a>
            <a href="#">Expertise</a>
            <a href="#">Approach</a>
          </div>
        </div>
        <div className="footer-top-right">
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
            let's work together
          </p>
          <h2>hello@claritydesign.eu</h2>
          <div className="footer-social">
            <h4>(Social media)</h4>
            <div className="footer-link">
              <a href="#">Linkedin</a>
              <a href="#">Behance</a>
              <a href="#">Dribbble</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-tagline">Clarity over Clutter</div>
        <div className="footer-text">
          <a href="#">Privacy Policy</a>
          <p>Copyright © 2026 Clarity Design</p>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
