import React from "react";

// Resolve local (/foo.png) vs external (http...) image paths for CRA.
export const asset = (src) =>
  src && src.startsWith("http") ? src : `${process.env.PUBLIC_URL}${src}`;

export function Card({ item }) {
  return (
    <a
      className="card reveal"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="thumb">
        {item.tag && <span className="tag">{item.tag}</span>}
        <img src={asset(item.image)} alt={item.title} loading="lazy" />
      </div>
      <div className="body">
        <h3>{item.title}</h3>
        {item.stack && <div className="stack">{item.stack}</div>}
        <p className="desc">{item.description}</p>
        <span className="go">
          View project <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </span>
      </div>
    </a>
  );
}

export function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/shashwath-dinesh/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a
        href="https://github.com/ShashwathD"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://devpost.com/ShashwathD/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Devpost"
      >
        <i className="fa-brands fa-dev"></i>
      </a>
      <a href="mailto:shashwathdinesh7@gmail.com" aria-label="Email">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
}
