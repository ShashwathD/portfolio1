import React, { useState } from "react";

const LINKS = [
  ["01", "Projects", "#projects"],
  ["02", "Research", "#research"],
  ["03", "Experience", "#experience"],
  ["04", "Awards", "#awards"],
  ["05", "Skills", "#skills"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={close}>
          shashwath<span>.</span>
        </a>
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
