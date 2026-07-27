import React, { useState } from "react";
import "@/styles/contact-style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default function ContactSection() {
  return (
    <>
      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-title">INQUIRE</div>
          <div className="contact-form">
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <div className="form-right">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget</label>
                <input type="text" id="budget" />
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea className="form-message" id="message"></textarea>

            <button className="form-send">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
