import "@/styles/benefit-style.css";

export default function BenefitSection() {
  return (
    <div className="benefit-section">
      <div className="benefit-container left">
        {/* <img src="/layout/background/benefit-img1.jpg" alt="" /> */}
        <div className="benefit-title">Extreme thermal lock</div>
        <p>Peak Performance Arctic Cold</p>
      </div>
      <div className="benefit-container right">
        {/* <img src="/layout/background/benefit-img2.jpg" alt="" /> */}
        <div className="benefit-title">Desk-redy hydration</div>
        <p>Desk-Side Essential Zero Leaks</p>
      </div>
    </div>
  );
}
