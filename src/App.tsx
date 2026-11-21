import React, { useEffect, useState } from "react";
import { Main, Timeline, Expertise, Project, About, Contact, Navigation, Footer } from "./components";
import "./index.scss";

type Mode = "dark" | "light";
const STORAGE_KEY = "theme";

function readSavedMode(): Mode {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // storage unavailable (private mode); fall back to dark
  }
  return "dark";
}

function App() {
  const [mode, setMode] = useState<Mode>(readSavedMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // storage unavailable; theme still works for this visit
    }
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const toggleMode = () => setMode((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation mode={mode} onToggleMode={toggleMode} />
      <main>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
