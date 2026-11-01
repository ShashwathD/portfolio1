import React from "react";
import { asset, Socials } from "./helpers";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hi mono">Hi, my name is</div>
          <h1>Shashwath Dinesh.</h1>
          <span className="role">
            Senior @ Lynbrook High · Embedded Systems · iOS · AR/VR · ML · Robotics
          </span>
          <p>
            I've involved myself in electrical, mechanical, and software engineering since
            seventh grade. My projects include work with embedded systems, iOS apps, AR/VR,
            robotics, etc. In general, I enjoy building projects for fun but also to solve
            real world issues.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-arrow-down"></i> See my work
            </a>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => window.dispatchEvent(new Event("open-email"))}
            >
              <i className="fa-solid fa-envelope"></i> Get in touch
            </button>
          </div>
          <Socials />
        </div>
        <div className="portrait-wrap">
          <img className="portrait" src={asset("/shash.jpg")} alt="Shashwath Dinesh" />
        </div>
      </div>
    </section>
  );
}
