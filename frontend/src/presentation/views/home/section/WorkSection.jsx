import "@/styles/work-style.css";

export default function WorkSection() {
  return (
    <>
      <div className="work-section">
        <div className="work-container">
          <div className="work-top">
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
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>{" "}
              Simplicity isn't the lack of clutter, it's the presence of
              clarity.
            </p>
            <h3>
              A collection of thoughtful digital spaces{" "}
              <span> crafted with clarity, purpose, and care.</span>
            </h3>
          </div>
          <div className="work-bottom">
            <div className="work-card ">
              <div className="work-card-background first">
                <img
                  className="work-card-image"
                  src="/layout/background/work-1.jpg"
                  alt=""
                />
                <div className="work-card-date">JAN 2025</div>
              </div>
              <div className="work-card-caption">
                <h3>Milan Resort </h3>
                <p>Architecture & Interior Design • Design</p>
              </div>
            </div>
            <div className="work-card">
              <div className="work-card-background second">
                <img
                  className="work-card-image"
                  src="/layout/background/work-2.jpg"
                  alt=""
                />
                <div className="work-card-date">OKT 2025</div>
              </div>
              <div className="work-card-caption">
                <h3>Coco Chanel </h3>
                <p>Style & Lifestyle • Fashion</p>
              </div>
            </div>
            <div className="work-card">
              <div className="work-card-background third">
                <img
                  className="work-card-image"
                  src="/layout/background/work-3.jpg"
                  alt=""
                />
                <div className="work-card-date">JUN 2026</div>
              </div>
              <div className="work-card-caption">
                <h3>San Francisco </h3>
                <p>Visual Identity • Art</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
