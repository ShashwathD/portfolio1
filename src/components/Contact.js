import React from "react";
import { Socials } from "./helpers";

export default function Contact() {
  return (
    <>
      <section className="block" id="contact">
        <div className="wrap">
          <div className="contact reveal">
            <div className="idx mono">09. Contact</div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.dispatchEvent(new Event("open-email"))}
            >
              <i className="fa-solid fa-envelope"></i> Get in touch
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <Socials />
          <p style={{ marginTop: 16 }}>
            Designed &amp; built by Shashwath Dinesh · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
