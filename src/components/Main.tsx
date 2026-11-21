import React from "react";
import "../assets/styles/Main.scss";
import profile from "../assets/images/profilephoto.png";
import CopilotPreview from "./CopilotPreview";

function Main() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div className="hero-text rise">
          <div className="who">
            <img src={profile} alt="Bhanu Prakash Bathini" width={40} height={40} />
            <div>
              <b>Bhanu Prakash Bathini</b>
              <span>Full stack AI engineer</span>
            </div>
          </div>
          <h1 id="hero-heading">I build LLM agents, RAG pipelines and NL‑to‑SQL tools</h1>
          <p className="lede">
            Python agents with retrieval, vector databases and evaluation pipelines, shipped as products people use.
            Gen AI engineer at Mondee since 2023.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-secondary" href="#contact">Contact</a>
          </div>
        </div>
        <div className="rise rise-delay">
          <CopilotPreview />
        </div>
      </div>
    </section>
  );
}

export default Main;
