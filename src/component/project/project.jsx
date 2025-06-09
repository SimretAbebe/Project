import React from "react";

function Project() {
  return (
    <div>
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div>
          <h3>
            <span>Internship at Prodigy-info Tech</span>
          </h3>
          <p>
            Contributed to frontend development tasks and helped build
            responsive user interfaces using HTML, CSS, and JavaScript.
            <br />
            Some of my works with their GitHub links:
          </p>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <h3>Tic Tac Toe Game</h3>
            <p>
              A classic 2-player game built with JavaScript that tracks turns
              and checks for win/draw conditions. Clean design and
              mobile-friendly.
            </p>
            <a
              href="https://github.com/SimretAbebe/PRODIGY_WD_02.git"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now
            </a>
          </div>

          <div className="project-card">
            <h3>Stop-watch</h3>
            <p>
              A simple, elegant, and functional stopwatch built using HTML, CSS,
              and JavaScript. Start, stop, and reset the timer with precision
              and responsive design.
            </p>
            <a
              href="https://github.com/SimretAbebe/PRODIGY_WD_03.git"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It
            </a>
          </div>

          <div className="project-card">
            <h3>Weather App (API)</h3>
            <p>
              Fetches real-time weather data using a public API. Includes search
              by city, icons, and responsive design for mobile use.
            </p>
            <a
              href="https://github.com/SimretAbebe/PRODIGY_WD_04.git"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Weather
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
