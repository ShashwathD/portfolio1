import React from "react";
import { Socials } from "./helpers";

export default function Contact() {
  return (
    <>
      <section className="block" id="contact">
        <div className="wrap">
          <div className="contact reveal">
            <div className="idx mono">06. What's next?</div>
            <h2>Get in touch</h2>
            <p>
              Whether it's a project, an internship, or just a chat about AR, ML, or robotics —
              my inbox is always open.
            </p>
            <a href="mailto:shashwathdinesh7@gmail.com" className="btn btn-primary">
              <i className="fa-solid fa-envelope"></i> Say hello
            </a>
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
