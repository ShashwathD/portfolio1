import React from "react";
import { asset, Socials } from "./helpers";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hi mono">Hi, my name is</div>
          <h1>Shashwath Dinesh.</h1>
          <h2>I build things that think.</h2>
          <span className="role">
            Senior @ Lynbrook High · iOS · AR/VR · ML · Robotics
          </span>
          <p>
            I've been building iOS apps and games since seventh grade. Since then I've taught
            myself machine learning, written custom algorithms, and expanded into spatial
            computing with AR/VR and robotics. At my core, I'm a creator who loves using
            technology to solve real problems.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-arrow-down"></i> See my work
            </a>
            <a href="mailto:shashwathdinesh7@gmail.com" className="btn btn-ghost">
              <i className="fa-solid fa-envelope"></i> Get in touch
            </a>
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
