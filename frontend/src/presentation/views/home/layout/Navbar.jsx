import "@/styles/navbar-style.css";

export default function Navbar() {
  return (
    <div className="navbar">
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
        a bold design agency.
      </p>
      <div className="navbar-links">
        <a href="#">Expertise</a>
        <a href="#">Works</a>
        <a href="#">Testimonials</a>
      </div>
      <a href="#" className="navbar-cta">
        Get Connected
      </a>
    </div>
  );
}
