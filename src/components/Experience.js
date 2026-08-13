import React from "react";
import { experience } from "../data";
import { asset } from "./helpers";

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="idx mono">03.</span>
          <h2>Experience</h2>
          <span className="rule"></span>
        </div>
        <div className="timeline">
          {experience.map((e) => {
            const external = e.link.startsWith("http");
            return (
              <a
                key={e.title}
                className="titem reveal"
                href={e.link}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <img className="logo" src={asset(e.image)} alt={e.org} loading="lazy" />
                <div>
                  <div className="meta">
                    <h3>{e.title}</h3>
                    <span className="when mono">{e.when}</span>
                  </div>
                  <div className="org">{e.org}</div>
                  <p>{e.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
