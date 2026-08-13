import React from "react";
import { projects, research, robotics } from "../data";
import { Card } from "./helpers";

export default function Projects() {
  return (
    <>
      <section className="block" id="projects">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx mono">01.</span>
            <h2>Apps I've built</h2>
            <span className="rule"></span>
          </div>
          <div className="sec-sub reveal">
            Spatial computing (AR/VR) and iOS projects — several award-winning.
            <div className="links">
              <a href="https://devpost.com/ShashwathD" target="_blank" rel="noopener noreferrer">
                Full list on Devpost →
              </a>
              <a href="https://github.com/ShashwathD" target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          </div>
          <div className="cards">
            {projects.map((p) => (
              <Card key={p.title} item={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="research">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="idx mono">02.</span>
            <h2>Research &amp; science fair</h2>
            <span className="rule"></span>
          </div>
          <div className="sec-sub reveal">
            Deeper research in AI, autonomous systems, and hardware.
          </div>
          <div className="cards" style={{ marginBottom: 40 }}>
            {research.map((p) => (
              <Card key={p.title} item={p} />
            ))}
          </div>
          <div className="sec-head reveal">
            <span className="idx mono">02b.</span>
            <h2>Circuits &amp; robotics</h2>
            <span className="rule"></span>
          </div>
          <div className="cards">
            {robotics.map((p) => (
              <Card key={p.title} item={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
