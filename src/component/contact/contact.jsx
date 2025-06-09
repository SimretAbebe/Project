import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:simretabebe24@gmail.com">simretabebe24@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+251993328821">+251 993328821</a>
          </p>
          <p>
            <strong>Telegram:</strong>{" "}
            <a
              href="https://t.me/simru123"
              target="_blank"
              rel="noopener noreferrer"
            >
              @simru123{" "}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
