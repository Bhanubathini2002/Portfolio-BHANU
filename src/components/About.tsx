import React, { useMemo } from "react";
import "../assets/styles/About.scss";

const About = () => {
  const text = useMemo(
    () =>
      `
Bhanu Prakash Bathini is a software engineer concentrating on Generative AI, with particular emphasis on designing and operationalizing agentic systems that translate advanced LLM capabilities into dependable, user-facing products. He has built, tested, and deployed scalable AI agents in Python, leveraging modern agent frameworks, Retrieval-Augmented Generation (RAG) patterns, vector databases, and structured evaluation pipelines to ensure quality, safety, and consistency in real-world usage. Alongside this, he actively develops and refines a public portfolio, including the “Data Copilot” project, with the goal of presenting work that is not only technically rigorous but also product-minded and polished. His broader trajectory reflects a deliberate commitment to deepening expertise in LLMs, RAG architectures, and multi-agent systems, while maintaining strong software-engineering fundamentals and an execution-first approach to shipping complete solutions.
`.trim(),
    []
  );

  return (
    <section id="about" className="aboutFx">
      <div className="items-container">
        <div className="aboutFx__wrap">
          <div className="aboutFx__content">
            <h1>About</h1>
            <p className="aboutFx__line">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
