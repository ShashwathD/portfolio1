import React, { useEffect, useState } from "react";

const EMAIL = "shashwathdinesh7@gmail.com";
const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export default function EmailModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openFn = () => setOpen(true);
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("open-email", openFn);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-email", openFn);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        <h3>Reach out</h3>
        <p>How would you like to email me?</p>
        <div className="modal-actions">
          <a
            className="btn btn-primary"
            href={GMAIL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <i className="fa-brands fa-google"></i> Gmail
          </a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}`} onClick={() => setOpen(false)}>
            <i className="fa-solid fa-envelope"></i> Desktop mail app
          </a>
        </div>
        <div className="modal-email">{EMAIL}</div>
      </div>
    </div>
  );
}
