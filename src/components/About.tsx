import React from "react";
import "../assets/styles/About.scss";

function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-heading">
      <div className="wrap block-head">
        <h2 id="about-heading">About</h2>
        <div className="about-body">
          <p>
            I'm a software engineer focused on generative AI, mostly agentic systems that turn LLM capabilities into
            dependable, user-facing products. I build, test and deploy AI agents in Python with modern agent frameworks,
            retrieval-augmented generation, vector databases and structured evaluation pipelines that keep quality,
            safety and consistency in check in real use.
          </p>
          <p>
            I'm deepening my work in LLMs, RAG architectures and multi-agent systems while keeping strong software
            engineering fundamentals, and I like to ship complete solutions. Data Copilot is the project that shows
            this best.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
