import React from "react";
import { awards, activities } from "../data";
import { asset } from "./helpers";

export default function Awards() {
  return (
    <section className="block" id="awards">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="idx mono">05.</span>
          <h2>Awards &amp; honors</h2>
          <span className="rule"></span>
        </div>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <div className="award reveal" key={i}>
              <i className="fa-solid fa-star"></i>
              <span>{a}</span>
            </div>
          ))}
        </div>

        <div className="sec-head reveal" style={{ marginTop: 56 }}>
          <span className="idx mono">06.</span>
          <h2>Activities</h2>
          <span className="rule"></span>
        </div>
        <div className="act-grid">
          {activities.map((a, i) => (
            <div className="act reveal" key={i}>
              <img src={asset(a.image)} alt="" loading="lazy" />
              <p>{a.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
