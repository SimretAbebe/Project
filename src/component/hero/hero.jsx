import React, { useState } from "react";
import images from "../../picture/img2.jpg";

function Hero() {
  const [mode, setMode] = useState(false);

  const toogel = () => {
    document.body.classList.toggle("dark-mode");
    setMode(!mode);
  };
  return (
    <div>
      <section class="hero">
        <div class="hero-text">
          <h1>
            Hello, I'm <span>Simret Abebe </span>
          </h1>
          <p>
            I am full stack web developer and building my skills in some modern
            languages.
          </p>
          <p>I’m Second year computer science at Bahir Dar University</p>
        </div>
        <div class="hero-img">
          <img src={images} />
          <button onClick={toogel} className="btn" id="theme-toggle">
            make a change to {mode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
