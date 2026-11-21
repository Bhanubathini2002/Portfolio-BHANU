import React, { useState } from "react";
import Icon from "./Icon";
import { navItems } from "../data/content";

type Props = {
  mode: "dark" | "light";
  onToggleMode: () => void;
};

function Navigation({ mode, onToggleMode }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-row">
        <a className="brand" href="#top">Bhanu Prakash Bathini</a>
        <nav className="nav-links" aria-label="Sections">
          {navItems.map((item) => (
            <a key={item.id} className="nav-link" href={`#${item.id}`}>{item.label}</a>
          ))}
          <button
            className="icon-btn"
            type="button"
            onClick={onToggleMode}
            aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Icon name={mode === "dark" ? "sun" : "moon"} />
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name="menu" />
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="wrap">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
