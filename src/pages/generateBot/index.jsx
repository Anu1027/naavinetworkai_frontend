import React, { useState } from "react";
import "./generateBot.scss"; // Ensure to create this SCSS file

const GenerateBot = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <div
      className={`generate-bot-container ${isDarkTheme ? "dark-theme" : ""}`}
    >
      <header className={`header ${isDarkTheme ? "dark-theme" : ""}`}>
        <div className="logo">
          <img src="/path/to/logo.svg" alt="Naavi Logo" />
        </div>
        <div className="title-container">
          <h1 className="title">
            Pathway Generator
            <span className="lightning">⚡</span>
          </h1>
        </div>
        <div className="theme-toggle">
          <input
            type="checkbox"
            id="theme-switch"
            onChange={toggleTheme}
            checked={isDarkTheme}
          />
          <label htmlFor="theme-switch" className="theme-label">
            {isDarkTheme ? (
              <span className="theme-icon">🌞</span>
            ) : (
              <span className="theme-icon">🌙</span>
            )}
          </label>
        </div>
      </header>
    </div>
  );
};

export default GenerateBot;
