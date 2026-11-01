import React from "react";
import { skills, hobbies } from "../data";

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="idx mono">07.</span>
          <h2>Skills &amp; tools</h2>
          <span className="rule"></span>
        </div>
        <div className="skills-wrap reveal">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <i className={s.icon}></i> {s.name}
            </div>
          ))}
        </div>

        <div className="sec-head reveal" style={{ marginTop: 56 }} id="hobbies">
          <span className="idx mono">08.</span>
          <h2>Hobbies</h2>
          <span className="rule"></span>
        </div>
        <div className="hobbies-grid">
          {hobbies.map((h) => (
            <div className="hobby reveal" key={h.title}>
              <i className={h.icon}></i>
              <h4>{h.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
