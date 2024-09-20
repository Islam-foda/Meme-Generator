// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

export default function Navbar({darkMode, toggleDark}) {
 
  return (
    <nav className={`nav ${darkMode ? "dark" : ""}`}>
      <div className="nav-left">
      <img className="nav" src="/TrollFace.png" alt="memelogo"></img>
      <h3>Meme Generator</h3>
      </div>
      <div className="nav-right">
        <button
            className={`nav ${darkMode ? "dark" : ""}` }
            onClick= {toggleDark}
        >{darkMode?"Night":"Dark"} mode</button>
      </div>
    </nav>
  );
}
