import React, { useState } from "react";

const LINKS = [
  ["01", "Projects", "#projects"],
  ["02", "Programs", "#research"],
  ["03", "Robotics", "#robotics"],
  ["04", "Experience", "#experience"],
  ["05", "Awards", "#awards"],
  ["07", "Skills", "#skills"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <nav className={`links${open ? " open" : ""}`}>
          {LINKS.map(([num, label, href]) => (
            <a key={href} href={href} onClick={close}>
              <span className="num">{num}</span>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>
            Contact
          </a>
        </nav>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
